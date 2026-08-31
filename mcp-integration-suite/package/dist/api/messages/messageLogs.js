"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMappingTestIflow = exports.getMessageMedia = exports.getMessagesCount = exports.getMessages = exports.getFilters = void 0;
const __1 = require("../..");
const MessageProcessingLogs_1 = require("../../generated/MessageProcessingLogs");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const odata_common_1 = require("@sap-cloud-sdk/odata-common");
const moment_1 = __importDefault(require("moment"));
const api_destination_1 = require("../api_destination");
const IntegrationContent_1 = require("../../generated/IntegrationContent");
const zip_1 = require("../../utils/zip");
const path_1 = __importDefault(require("path"));
const { messageProcessingLogsApi, messageProcessingLogAttachmentsApi } = (0, MessageProcessingLogs_1.messageProcessingLogs)();
const errStatus = ["RETRY", "FAILED", "ABANDONED", "ESCALATED", "DISCARDED"];
const { integrationDesigntimeArtifactsApi } = (0, IntegrationContent_1.integrationContent)();
const getFilters = (filterProps) => {
    const { INTEGRATION_ARTIFACT, STATUS, LOG_START, LOG_END, SENDER, RECEIVER, MESSAGE_GUID } = messageProcessingLogsApi.schema;
    const filterArr = [];
    if (filterProps.LogEnd) {
        const momentTime = (0, moment_1.default)(filterProps.LogEnd);
        const logEndFilter = LOG_END.lessOrEqual(momentTime);
        filterArr.push(logEndFilter);
    }
    if (filterProps.LogStart) {
        const momentTime = (0, moment_1.default)(filterProps.LogStart);
        const loStartFilter = LOG_START.greaterOrEqual(momentTime);
        filterArr.push(loStartFilter);
    }
    if (filterProps.integrationFlowId)
        filterArr.push(INTEGRATION_ARTIFACT.id.equals(filterProps.integrationFlowId));
    if (filterProps.status) {
        const filterStatusArr = [];
        filterProps.status.forEach((statusValue) => filterStatusArr.push(STATUS.equals(statusValue)));
        const statusOrFilter = (0, odata_v2_1.or)(filterStatusArr);
        filterArr.push(statusOrFilter);
    }
    if (filterProps.sender)
        filterArr.push(SENDER.equals(filterProps.sender));
    if (filterProps.receiver)
        filterArr.push(RECEIVER.equals(filterProps.receiver));
    if (filterProps.msgGUID)
        filterArr.push(MESSAGE_GUID.equals(filterProps.msgGUID));
    return (0, odata_common_1.and)(filterArr);
};
exports.getFilters = getFilters;
/**
 * Get messages from messaging log with dependencies
 * Honestly needs refactoring
 * @param filterProps Available filters
 * @returns Messages with all dependencies
 */
const getMessages = async (filterProps) => {
    const messageBaseReq = messageProcessingLogsApi
        .requestBuilder()
        .getAll()
        // Every message will cause 4 API calls so be aware of rate limits
        // also most LLM truncate Output at some point
        .top(50)
        .filter((0, exports.getFilters)(filterProps));
    (0, __1.logInfo)(await messageBaseReq.url(await (0, api_destination_1.getCurrentDestination)()));
    const messageWithErrVal = await messageBaseReq.execute(await (0, api_destination_1.getCurrentDestination)());
    (0, __1.logInfo)(`Found ${messageWithErrVal.length} messages`);
    // Fill all dependencies of the message log entry and return the object
    return Promise.all(messageWithErrVal.map(async (message) => {
        try {
            message.adapterAttributes = (await messageProcessingLogsApi
                .requestBuilder()
                .getByKey(message.messageGuid)
                .appendPath("/AdapterAttributes")
                .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data;
        }
        catch (error) {
            (0, __1.logInfo)(`Could not get adapterAttributes for ${message.messageGuid}`);
        }
        try {
            message.customHeaderProperties = (await messageProcessingLogsApi
                .requestBuilder()
                .getByKey(message.messageGuid)
                .appendPath("/CustomHeaderProperties")
                .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data.d.results;
        }
        catch (error) {
            (0, __1.logInfo)(`Could not get CustomHeaderProperties for ${message.messageGuid}`);
            (0, __1.logInfo)(error);
        }
        try {
            message.attachments = (await messageProcessingLogsApi
                .requestBuilder()
                .getByKey(message.messageGuid)
                .appendPath("/Attachments")
                .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data.d.results;
            (0, __1.logInfo)(`Found ${message.attachments.length} attachements for ${message.messageGuid}`);
            message.messageAttachementFiles = [];
            for (const attachement of message.attachments) {
                message.messageAttachementFiles?.push({
                    description: attachement.name,
                    // TS ignore because SAP specification is not what they actually provide
                    data: await (0, exports.getMessageMedia)(
                    // @ts-ignore
                    attachement["Id"]),
                });
            }
        }
        catch (error) {
            (0, __1.logInfo)(`Could not get Attachments for ${message.messageGuid}`);
            (0, __1.logInfo)(await messageProcessingLogsApi
                .requestBuilder()
                .getByKey(message.messageGuid)
                .appendPath("/Attachments")
                .url(await (0, api_destination_1.getCurrentDestination)()));
            (0, __1.logInfo)(error);
        }
        if (message.status && errStatus.includes(message.status)) {
            try {
                (0, __1.logInfo)(`Getting error value for msg: ${message.messageGuid}`);
                message.errorInformation = (await messageProcessingLogsApi
                    .requestBuilder()
                    .getByKey(message.messageGuid)
                    .appendPath("/ErrorInformation")
                    .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data.d.results;
                message.ErrorInformationValue = (await messageProcessingLogsApi
                    .requestBuilder()
                    .getByKey(message.messageGuid)
                    .appendPath("/ErrorInformation/$value")
                    .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data;
            }
            catch (error) {
                (0, __1.logInfo)(`Error getting error info for ${message.messageGuid}`);
            }
        }
        return message;
    }));
};
exports.getMessages = getMessages;
/**
 * Count messages of given filter
 * @param filterProps
 */
const getMessagesCount = async (filterProps) => {
    return messageProcessingLogsApi
        .requestBuilder()
        .getAll()
        .filter((0, exports.getFilters)(filterProps))
        .count()
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.getMessagesCount = getMessagesCount;
/**
 * Returns message media like attachement as string
 * @param mediaId
 * @returns Media as string
 */
const getMessageMedia = async (mediaId) => {
    (0, __1.logInfo)(`Getting file ${mediaId}`);
    return (await messageProcessingLogAttachmentsApi
        .requestBuilder()
        .getByKey(mediaId)
        .appendPath("/$value")
        .executeRaw(await (0, api_destination_1.getCurrentDestination)())).data;
};
exports.getMessageMedia = getMessageMedia;
const createMappingTestIflow = async (pkgId) => {
    try {
        await integrationDesigntimeArtifactsApi
            .requestBuilder()
            .delete("if_echo_mapping", "active")
            .execute(await (0, api_destination_1.getCurrentDestination)());
    }
    catch (error) { }
    const iflowBuffer = await (0, zip_1.folderToZipBuffer)(path_1.default.resolve(__1.projPath, "resources", "helpers", "if_echo_mapping"));
    const newIflow = integrationDesigntimeArtifactsApi
        .entityBuilder()
        .fromJson({
        id: "if_echo_mapping",
        name: "if_echo_mapping",
        packageId: pkgId,
        artifactContent: iflowBuffer.toString("base64"),
    });
    await integrationDesigntimeArtifactsApi
        .requestBuilder()
        .create(newIflow)
        .execute(await (0, api_destination_1.getCurrentDestination)());
};
exports.createMappingTestIflow = createMappingTestIflow;
//# sourceMappingURL=messageLogs.js.map