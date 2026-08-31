"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeploymentErrorReason = exports.waitAndGetDeployStatus = void 0;
const IntegrationContent_1 = require("../generated/IntegrationContent");
const api_destination_1 = require("./api_destination");
const { buildAndDeployStatusApi, integrationRuntimeArtifactsApi } = (0, IntegrationContent_1.integrationContent)();
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
/**
 * Waits until deployment is finished
 * Runs as long as status is DEPLOYING
 * @param taskId Task ID of deployment
 * @returns Staus e.g. SUCCESS, FAILED, ...
 */
const waitAndGetDeployStatus = async (taskId) => {
    let statusObj = await buildAndDeployStatusApi
        .requestBuilder()
        .getByKey(taskId)
        .execute(await (0, api_destination_1.getCurrentDestination)());
    while (statusObj.status === "DEPLOYING") {
        statusObj = await buildAndDeployStatusApi
            .requestBuilder()
            .getByKey(taskId)
            .execute(await (0, api_destination_1.getCurrentDestination)());
        await sleep(1000);
    }
    if (!statusObj.status) {
        throw new Error("Error getting deployment status for " + taskId);
    }
    return statusObj.status;
};
exports.waitAndGetDeployStatus = waitAndGetDeployStatus;
/**
 * Get the error of an artifact
 * @param id
 * @returns the error or null if there is no error
 */
const getDeploymentErrorReason = async (id) => {
    return (await integrationRuntimeArtifactsApi
        .requestBuilder()
        .getByKey(id)
        .appendPath("/ErrorInformation/$value")
        .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data;
};
exports.getDeploymentErrorReason = getDeploymentErrorReason;
//# sourceMappingURL=deployment.js.map