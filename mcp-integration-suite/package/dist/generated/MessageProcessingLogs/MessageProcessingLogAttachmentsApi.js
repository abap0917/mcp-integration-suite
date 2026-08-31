"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogAttachmentsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogAttachments_1 = require("./MessageProcessingLogAttachments");
const MessageProcessingLogAttachmentsRequestBuilder_1 = require("./MessageProcessingLogAttachmentsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogAttachmentsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogAttachmentsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = MessageProcessingLogAttachments_1.MessageProcessingLogAttachments;
    requestBuilder() {
        return new MessageProcessingLogAttachmentsRequestBuilder_1.MessageProcessingLogAttachmentsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogAttachments_1.MessageProcessingLogAttachments, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
                /**
                 * Static representation of the {@link messageGuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_GUID: fieldBuilder.buildEdmTypeField('MessageGuid', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeStamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_STAMP: fieldBuilder.buildEdmTypeField('TimeStamp', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
                /**
                 * Static representation of the {@link contentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTENT_TYPE: fieldBuilder.buildEdmTypeField('ContentType', 'Edm.String', true),
                /**
                 * Static representation of the {@link payloadSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYLOAD_SIZE: fieldBuilder.buildEdmTypeField('PayloadSize', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogAttachments_1.MessageProcessingLogAttachments)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogAttachmentsApi = MessageProcessingLogAttachmentsApi;
//# sourceMappingURL=MessageProcessingLogAttachmentsApi.js.map