"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllIflowsByPackage = exports.getIflowConfiguration = exports.deployIflow = exports.getEndpoints = exports.getIflowContentString = exports.saveAsNewVersion = exports.updateIflow = exports.createIflow = exports.getIflowFolder = void 0;
const zip_1 = require("../../utils/zip");
const api_destination_1 = require("../api_destination");
const semver_1 = __importDefault(require("semver"));
const IntegrationContent_1 = require("../../generated/IntegrationContent");
const __1 = require("../..");
const fileBasedUtils_1 = require("../../utils/fileBasedUtils");
const getEndpointUrl_1 = require("../../utils/getEndpointUrl");
const { integrationDesigntimeArtifactsApi, serviceEndpointsApi, configurationsApi, integrationPackagesApi, } = (0, IntegrationContent_1.integrationContent)();
/**
 * Download IFlow unzipp it and get the folderpath
 * @param id Iflow Id
 * @returns Path to extracted IFlow
 */
const getIflowFolder = async (id) => {
    const iflowBuffer = await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(id, "active")
        .appendPath("/$value")
        .addCustomRequestConfiguration({ responseType: "arraybuffer" })
        .executeRaw(await (0, api_destination_1.getCurrentDestination)());
    const arrBuffer = await iflowBuffer.data;
    const buf = Buffer.from(arrBuffer);
    return (0, zip_1.extractToFolder)(buf, id);
};
exports.getIflowFolder = getIflowFolder;
/**
 * Create empty Iflow
 * @param packageId Package ID
 * @param id ID/Name of Iflow
 */
const createIflow = async (packageId, id) => {
    const newIflow = integrationDesigntimeArtifactsApi
        .entityBuilder()
        .fromJson({
        id,
        name: id,
        packageId,
    });
    await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .create(newIflow)
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.createIflow = createIflow;
/**
 *
 * @param id iflowId
 * @param iflowFiles Array of project paths and File content
 * @returns Status information of the update/Deploy process
 */
const updateIflow = async (id, iflowFiles) => {
    const iflowPath = await (0, exports.getIflowFolder)(id);
    for (const file of iflowFiles) {
        await (0, fileBasedUtils_1.patchFile)(iflowPath, file.filepath, file.content, file.appendMode);
    }
    const iflowBuffer = await (0, zip_1.folderToZipBuffer)(iflowPath);
    const newIflowEntity = integrationDesigntimeArtifactsApi
        .entityBuilder()
        .fromJson({
        version: "active",
        id,
        artifactContent: iflowBuffer.toString("base64"),
    });
    await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .update(newIflowEntity)
        .replaceWholeEntityWithPut()
        .execute(await (0, api_destination_1.getCurrentDestination)());
    return {
        iflowUpdate: {
            status: 200,
            text: "successfully updated",
        },
    };
};
exports.updateIflow = updateIflow;
/**
 * Update version number of iflow by 1 patch using semver
 * @param id iflow Id
 */
const saveAsNewVersion = async (id) => {
    const currentIflow = await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(id, "active")
        .execute(await (0, api_destination_1.getCurrentDestination)());
    const newVersion = semver_1.default.inc(currentIflow.version, "patch");
    if (!newVersion) {
        throw new Error("Error increasing semantic version");
    }
    (0, __1.logInfo)(`Increasing iflow ${id} from version ${currentIflow.version} to ${newVersion}`);
    await (0, IntegrationContent_1.integrationDesigntimeArtifactSaveAsVersion)({
        id,
        saveAsVersion: newVersion,
    }).execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.saveAsNewVersion = saveAsNewVersion;
/**
 * Download Iflow extract it to folder and parse all content into one string
 * @param id iflow Id
 * @returns One string including all Iflow data
 */
const getIflowContentString = async (id) => {
    const folderPath = await (0, exports.getIflowFolder)(id);
    return (0, fileBasedUtils_1.parseFolder)(folderPath);
};
exports.getIflowContentString = getIflowContentString;
/**
 * Get Service Endpoints of iflow
 * @param id Iflow Id
 * @returns serviceEndpoints instances
 */
const getEndpoints = async (id) => {
    let endpointRequest = serviceEndpointsApi.requestBuilder().getAll();
    if (id) {
        endpointRequest = endpointRequest.filter(serviceEndpointsApi.schema.NAME.equals(id));
    }
    (0, __1.logInfo)(`Requesting Endpoints on ${await endpointRequest.url(await (0, api_destination_1.getCurrentDestination)())}`);
    const endpoints = await endpointRequest.execute(await (0, api_destination_1.getCurrentDestination)());
    const endpointsWithUrl = endpoints;
    endpointsWithUrl.map((endpoint) => {
        endpoint.URL = (0, getEndpointUrl_1.getEndpointUrl)(endpoint);
    });
    return endpoints;
};
exports.getEndpoints = getEndpoints;
/**
 * Deploy Iflow
 * Only works for iflow deployment altough API is called deployArtifact
 * @param id Iflow ID
 * @returns Deployment Task ID
 */
const deployIflow = async (id) => {
    const deployRes = await (0, IntegrationContent_1.deployIntegrationDesigntimeArtifact)({
        id,
        version: "active",
    }).executeRaw(await (0, api_destination_1.getCurrentDestination)());
    if (deployRes.status !== 202) {
        throw new Error("Error starting deployment of " + id);
    }
    return deployRes.data;
};
exports.deployIflow = deployIflow;
const getIflowConfiguration = async (iflowId) => {
    const configurationRes = await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(iflowId, "active")
        .appendPath("/Configurations")
        .executeRaw(await (0, api_destination_1.getCurrentDestination)());
    if (configurationRes.status !== 200 || !configurationRes.data.d.results) {
        throw new Error(`Error getting configuration of ${iflowId} status: ${configurationRes.status}, response: ${configurationRes.data}`);
    }
    return configurationRes.data.d.results;
};
exports.getIflowConfiguration = getIflowConfiguration;
const getAllIflowsByPackage = async (pkgId) => {
    const allIflowsRes = await integrationPackagesApi
        .requestBuilder()
        .getByKey(pkgId)
        .appendPath("/IntegrationDesigntimeArtifacts")
        .executeRaw(await (0, api_destination_1.getCurrentDestination)());
    integrationDesigntimeArtifactsApi.schema;
    if (allIflowsRes.status !== 200 || !allIflowsRes?.data?.d?.results) {
        throw new Error(`Error getting iflows of ${pkgId} status: ${allIflowsRes.status}, response: ${allIflowsRes.data}`);
    }
    return allIflowsRes.data.d.results;
};
exports.getAllIflowsByPackage = getAllIflowsByPackage;
//# sourceMappingURL=index.js.map