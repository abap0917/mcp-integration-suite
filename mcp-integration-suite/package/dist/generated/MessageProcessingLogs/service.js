"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageProcessingLogs = messageProcessingLogs;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageStoreEntriesApi_1 = require("./MessageStoreEntriesApi");
const TraceMessagesApi_1 = require("./TraceMessagesApi");
const MessageProcessingLogRunsApi_1 = require("./MessageProcessingLogRunsApi");
const MessageProcessingLogRunStepsApi_1 = require("./MessageProcessingLogRunStepsApi");
const MessageStoreEntryAttachmentPropertiesApi_1 = require("./MessageStoreEntryAttachmentPropertiesApi");
const MessageStoreEntryAttachmentsApi_1 = require("./MessageStoreEntryAttachmentsApi");
const MessageStoreEntryPropertiesApi_1 = require("./MessageStoreEntryPropertiesApi");
const MessageProcessingLogsApi_1 = require("./MessageProcessingLogsApi");
const MessageProcessingLogAttachmentsApi_1 = require("./MessageProcessingLogAttachmentsApi");
const TraceMessagePropertiesApi_1 = require("./TraceMessagePropertiesApi");
const MessageProcessingLogCustomHeaderPropertiesApi_1 = require("./MessageProcessingLogCustomHeaderPropertiesApi");
const MessageProcessingLogRunStepPropertiesApi_1 = require("./MessageProcessingLogRunStepPropertiesApi");
const MessageProcessingLogErrorInformationsApi_1 = require("./MessageProcessingLogErrorInformationsApi");
const MessageProcessingLogAdapterAttributesApi_1 = require("./MessageProcessingLogAdapterAttributesApi");
const IdMapFromId2SApi_1 = require("./IdMapFromId2SApi");
const IdMapFromIdsApi_1 = require("./IdMapFromIdsApi");
const IdMapToIdsApi_1 = require("./IdMapToIdsApi");
const IdempotentRepositoryEntriesApi_1 = require("./IdempotentRepositoryEntriesApi");
const GenericIdempotentRepositoryEntriesApi_1 = require("./GenericIdempotentRepositoryEntriesApi");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function messageProcessingLogs(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new MessageProcessingLogs((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class MessageProcessingLogs {
    apis = {};
    deSerializers;
    constructor(deSerializers) {
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get messageStoreEntriesApi() {
        const api = this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi_1.MessageStoreEntriesApi);
        const linkedApis = [
            this.initApi('messageStoreEntryPropertiesApi', MessageStoreEntryPropertiesApi_1.MessageStoreEntryPropertiesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get traceMessagesApi() {
        const api = this.initApi('traceMessagesApi', TraceMessagesApi_1.TraceMessagesApi);
        const linkedApis = [
            this.initApi('traceMessagePropertiesApi', TraceMessagePropertiesApi_1.TraceMessagePropertiesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageProcessingLogRunsApi() {
        const api = this.initApi('messageProcessingLogRunsApi', MessageProcessingLogRunsApi_1.MessageProcessingLogRunsApi);
        const linkedApis = [
            this.initApi('messageProcessingLogRunStepsApi', MessageProcessingLogRunStepsApi_1.MessageProcessingLogRunStepsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageProcessingLogRunStepsApi() {
        const api = this.initApi('messageProcessingLogRunStepsApi', MessageProcessingLogRunStepsApi_1.MessageProcessingLogRunStepsApi);
        const linkedApis = [
            this.initApi('messageProcessingLogRunStepPropertiesApi', MessageProcessingLogRunStepPropertiesApi_1.MessageProcessingLogRunStepPropertiesApi),
            this.initApi('traceMessagesApi', TraceMessagesApi_1.TraceMessagesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageStoreEntryAttachmentPropertiesApi() {
        return this.initApi('messageStoreEntryAttachmentPropertiesApi', MessageStoreEntryAttachmentPropertiesApi_1.MessageStoreEntryAttachmentPropertiesApi);
    }
    get messageStoreEntryAttachmentsApi() {
        const api = this.initApi('messageStoreEntryAttachmentsApi', MessageStoreEntryAttachmentsApi_1.MessageStoreEntryAttachmentsApi);
        const linkedApis = [
            this.initApi('messageStoreEntryAttachmentPropertiesApi', MessageStoreEntryAttachmentPropertiesApi_1.MessageStoreEntryAttachmentPropertiesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageStoreEntryPropertiesApi() {
        return this.initApi('messageStoreEntryPropertiesApi', MessageStoreEntryPropertiesApi_1.MessageStoreEntryPropertiesApi);
    }
    get messageProcessingLogsApi() {
        const api = this.initApi('messageProcessingLogsApi', MessageProcessingLogsApi_1.MessageProcessingLogsApi);
        const linkedApis = [
            this.initApi('messageProcessingLogCustomHeaderPropertiesApi', MessageProcessingLogCustomHeaderPropertiesApi_1.MessageProcessingLogCustomHeaderPropertiesApi),
            this.initApi('messageStoreEntriesApi', MessageStoreEntriesApi_1.MessageStoreEntriesApi),
            this.initApi('messageProcessingLogErrorInformationsApi', MessageProcessingLogErrorInformationsApi_1.MessageProcessingLogErrorInformationsApi),
            this.initApi('messageProcessingLogAdapterAttributesApi', MessageProcessingLogAdapterAttributesApi_1.MessageProcessingLogAdapterAttributesApi),
            this.initApi('messageProcessingLogAttachmentsApi', MessageProcessingLogAttachmentsApi_1.MessageProcessingLogAttachmentsApi),
            this.initApi('messageProcessingLogRunsApi', MessageProcessingLogRunsApi_1.MessageProcessingLogRunsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageProcessingLogAttachmentsApi() {
        return this.initApi('messageProcessingLogAttachmentsApi', MessageProcessingLogAttachmentsApi_1.MessageProcessingLogAttachmentsApi);
    }
    get traceMessagePropertiesApi() {
        return this.initApi('traceMessagePropertiesApi', TraceMessagePropertiesApi_1.TraceMessagePropertiesApi);
    }
    get messageProcessingLogCustomHeaderPropertiesApi() {
        const api = this.initApi('messageProcessingLogCustomHeaderPropertiesApi', MessageProcessingLogCustomHeaderPropertiesApi_1.MessageProcessingLogCustomHeaderPropertiesApi);
        const linkedApis = [
            this.initApi('messageProcessingLogsApi', MessageProcessingLogsApi_1.MessageProcessingLogsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get messageProcessingLogRunStepPropertiesApi() {
        return this.initApi('messageProcessingLogRunStepPropertiesApi', MessageProcessingLogRunStepPropertiesApi_1.MessageProcessingLogRunStepPropertiesApi);
    }
    get messageProcessingLogErrorInformationsApi() {
        return this.initApi('messageProcessingLogErrorInformationsApi', MessageProcessingLogErrorInformationsApi_1.MessageProcessingLogErrorInformationsApi);
    }
    get messageProcessingLogAdapterAttributesApi() {
        const api = this.initApi('messageProcessingLogAdapterAttributesApi', MessageProcessingLogAdapterAttributesApi_1.MessageProcessingLogAdapterAttributesApi);
        const linkedApis = [
            this.initApi('messageProcessingLogsApi', MessageProcessingLogsApi_1.MessageProcessingLogsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get idMapFromId2SApi() {
        const api = this.initApi('idMapFromId2SApi', IdMapFromId2SApi_1.IdMapFromId2SApi);
        const linkedApis = [this.initApi('idMapToIdsApi', IdMapToIdsApi_1.IdMapToIdsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get idMapFromIdsApi() {
        const api = this.initApi('idMapFromIdsApi', IdMapFromIdsApi_1.IdMapFromIdsApi);
        const linkedApis = [this.initApi('idMapToIdsApi', IdMapToIdsApi_1.IdMapToIdsApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get idMapToIdsApi() {
        const api = this.initApi('idMapToIdsApi', IdMapToIdsApi_1.IdMapToIdsApi);
        const linkedApis = [
            this.initApi('idMapFromIdsApi', IdMapFromIdsApi_1.IdMapFromIdsApi),
            this.initApi('idMapFromId2SApi', IdMapFromId2SApi_1.IdMapFromId2SApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get idempotentRepositoryEntriesApi() {
        return this.initApi('idempotentRepositoryEntriesApi', IdempotentRepositoryEntriesApi_1.IdempotentRepositoryEntriesApi);
    }
    get genericIdempotentRepositoryEntriesApi() {
        return this.initApi('genericIdempotentRepositoryEntriesApi', GenericIdempotentRepositoryEntriesApi_1.GenericIdempotentRepositoryEntriesApi);
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map