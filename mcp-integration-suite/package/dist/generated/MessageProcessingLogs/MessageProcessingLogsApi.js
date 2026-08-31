"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogs_1 = require("./MessageProcessingLogs");
const MessageProcessingLogsRequestBuilder_1 = require("./MessageProcessingLogsRequestBuilder");
const IntegrationArtifact_1 = require("./IntegrationArtifact");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CUSTOM_HEADER_PROPERTIES: new odata_v2_1.Link('CustomHeaderProperties', this, linkedApis[0]),
            MESSAGE_STORE_ENTRIES: new odata_v2_1.Link('MessageStoreEntries', this, linkedApis[1]),
            ERROR_INFORMATION: new odata_v2_1.OneToOneLink('ErrorInformation', this, linkedApis[2]),
            ADAPTER_ATTRIBUTES: new odata_v2_1.Link('AdapterAttributes', this, linkedApis[3]),
            ATTACHMENTS: new odata_v2_1.Link('Attachments', this, linkedApis[4]),
            RUNS: new odata_v2_1.Link('Runs', this, linkedApis[5])
        };
        return this;
    }
    entityConstructor = MessageProcessingLogs_1.MessageProcessingLogs;
    requestBuilder() {
        return new MessageProcessingLogsRequestBuilder_1.MessageProcessingLogsRequestBuilder(this);
    }
    entityBuilder() {
        return (0, odata_v2_1.entityBuilder)(this);
    }
    customField(fieldName, isNullable = false) {
        return new odata_v2_1.CustomField(fieldName, this.entityConstructor, this.deSerializers, isNullable);
    }
    _fieldBuilder;
    get fieldBuilder() {
        if (!this._fieldBuilder) {
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogs_1.MessageProcessingLogs, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link messageGuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_GUID: fieldBuilder.buildEdmTypeField('MessageGuid', 'Edm.String', false),
                /**
                 * Static representation of the {@link correlationId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CORRELATION_ID: fieldBuilder.buildEdmTypeField('CorrelationId', 'Edm.String', true),
                /**
                 * Static representation of the {@link applicationMessageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICATION_MESSAGE_ID: fieldBuilder.buildEdmTypeField('ApplicationMessageId', 'Edm.String', true),
                /**
                 * Static representation of the {@link applicationMessageType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICATION_MESSAGE_TYPE: fieldBuilder.buildEdmTypeField('ApplicationMessageType', 'Edm.String', true),
                /**
                 * Static representation of the {@link logStart} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOG_START: fieldBuilder.buildEdmTypeField('LogStart', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link logEnd} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOG_END: fieldBuilder.buildEdmTypeField('LogEnd', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link sender} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SENDER: fieldBuilder.buildEdmTypeField('Sender', 'Edm.String', true),
                /**
                 * Static representation of the {@link receiver} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RECEIVER: fieldBuilder.buildEdmTypeField('Receiver', 'Edm.String', true),
                /**
                 * Static representation of the {@link integrationFlowName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEGRATION_FLOW_NAME: fieldBuilder.buildEdmTypeField('IntegrationFlowName', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                /**
                 * Static representation of the {@link alternateWebLink} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ALTERNATE_WEB_LINK: fieldBuilder.buildEdmTypeField('AlternateWebLink', 'Edm.String', true),
                /**
                 * Static representation of the {@link integrationArtifact} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEGRATION_ARTIFACT: fieldBuilder.buildComplexTypeField('IntegrationArtifact', IntegrationArtifact_1.IntegrationArtifactField, false),
                /**
                 * Static representation of the {@link logLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOG_LEVEL: fieldBuilder.buildEdmTypeField('LogLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link customStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOM_STATUS: fieldBuilder.buildEdmTypeField('CustomStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link transactionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRANSACTION_ID: fieldBuilder.buildEdmTypeField('TransactionId', 'Edm.String', true),
                /**
                 * Static representation of the {@link previousComponentName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PREVIOUS_COMPONENT_NAME: fieldBuilder.buildEdmTypeField('PreviousComponentName', 'Edm.String', true),
                /**
                 * Static representation of the {@link localComponentName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOCAL_COMPONENT_NAME: fieldBuilder.buildEdmTypeField('LocalComponentName', 'Edm.String', true),
                /**
                 * Static representation of the {@link originComponentName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ORIGIN_COMPONENT_NAME: fieldBuilder.buildEdmTypeField('OriginComponentName', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogs_1.MessageProcessingLogs)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogsApi = MessageProcessingLogsApi;
//# sourceMappingURL=MessageProcessingLogsApi.js.map