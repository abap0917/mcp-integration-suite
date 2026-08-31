"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMessageMappings = exports.createMessageMapping = exports.deployMapping = exports.saveAsNewVersion = exports.updateMessageMapping = exports.getMessageMappingFolder = exports.getMessageMappingContentString = void 0;
const __1 = require("../..");
const IntegrationContent_1 = require("../../generated/IntegrationContent");
const fileBasedUtils_1 = require("../../utils/fileBasedUtils");
const zip_1 = require("../../utils/zip");
const api_destination_1 = require("../api_destination");
const semver_1 = __importDefault(require("semver"));
const http_client_1 = require("@sap-cloud-sdk/http-client");
const { messageMappingDesigntimeArtifactsApi } = (0, IntegrationContent_1.integrationContent)();
const getMessageMappingContentString = async (id) => {
    const folderPath = await (0, exports.getMessageMappingFolder)(id);
    return (0, fileBasedUtils_1.parseFolder)(folderPath);
};
exports.getMessageMappingContentString = getMessageMappingContentString;
const getMessageMappingFolder = async (id) => {
    const arrBuffer = await messageMappingDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(id, "active")
        .appendPath("/$value")
        .addCustomRequestConfiguration({ responseType: "arraybuffer" })
        .executeRaw(await (0, api_destination_1.getCurrentDestination)());
    const buf = Buffer.from(arrBuffer.data);
    return (0, zip_1.extractToFolder)(buf, id);
};
exports.getMessageMappingFolder = getMessageMappingFolder;
const updateMessageMapping = async (id, messagemappingFiles) => {
    const messagemappingPath = await (0, exports.getMessageMappingFolder)(id);
    for (const file of messagemappingFiles) {
        await (0, fileBasedUtils_1.patchFile)(messagemappingPath, file.filepath, file.content, file.appendMode);
    }
    const messagemappingBuffer = await (0, zip_1.folderToZipBuffer)(messagemappingPath);
    const url = await messageMappingDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(id, "active")
        .url(await (0, api_destination_1.getCurrentDestination)());
    const res = await (0, http_client_1.executeHttpRequest)(await (0, api_destination_1.getCurrentDestination)(), {
        url,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
            Name: id,
            ArtifactContent: messagemappingBuffer.toString("base64"),
        }),
    });
    if (res.status !== 200) {
        throw new Error("Error updating message mapping");
    }
    return {
        messageMappingUpdate: {
            status: res.status,
            text: "Succesfully updated mapping",
        },
    };
};
exports.updateMessageMapping = updateMessageMapping;
const saveAsNewVersion = async (id) => {
    const currentMessageMapping = await messageMappingDesigntimeArtifactsApi
        .requestBuilder()
        .getByKey(id, "active")
        .execute(await (0, api_destination_1.getCurrentDestination)());
    const newVersion = semver_1.default.inc(currentMessageMapping.version, "patch");
    if (!newVersion) {
        throw new Error("Error increasing semantic version");
    }
    (0, __1.logInfo)(`Increasing messagemapping ${id} from version ${currentMessageMapping.version} to ${newVersion}`);
    await (0, IntegrationContent_1.messageMappingDesigntimeArtifactSaveAsVersion)({
        id,
        saveAsVersion: newVersion,
    }).execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.saveAsNewVersion = saveAsNewVersion;
/**
 * Deploy Mapping
 * @param Mapping ID
 * @returns Deployment Task ID
 */
const deployMapping = async (id) => {
    const deployRes = await (0, IntegrationContent_1.deployMessageMappingDesigntimeArtifact)({
        id,
        version: "active",
    }).executeRaw(await (0, api_destination_1.getCurrentDestination)());
    if (deployRes.status !== 202) {
        throw new Error("Error starting deployment of " + id);
    }
    // Actually SAP API is broken, it returns an empty body instead of the taskId, so waiting for deployment isn't possible
    if (deployRes.data) {
        throw new Error(`The deployment was triggered successfully altough didn't return a token to wait for the deployment to finish
		But you can still use get-deploy-error to check the status`);
    }
    (0, __1.logInfo)(`got TaskId ${deployRes.data} for deployment of ${id}`);
    return deployRes.data;
};
exports.deployMapping = deployMapping;
const createMessageMapping = async (packageId, id) => {
    const newMessageMapping = messageMappingDesigntimeArtifactsApi
        .entityBuilder()
        .fromJson({
        id,
        name: id,
        packageId,
    });
    await messageMappingDesigntimeArtifactsApi
        .requestBuilder()
        .create(newMessageMapping)
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.createMessageMapping = createMessageMapping;
const getAllMessageMappings = async () => messageMappingDesigntimeArtifactsApi
    .requestBuilder()
    .getAll()
    .execute(await (0, api_destination_1.getCurrentDestination)());
exports.getAllMessageMappings = getAllMessageMappings;
//# sourceMappingURL=index.js.map