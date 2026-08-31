"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntryAttachmentsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageStoreEntryAttachments_1 = require("./MessageStoreEntryAttachments");
const MessageStoreEntryAttachmentsRequestBuilder_1 = require("./MessageStoreEntryAttachmentsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageStoreEntryAttachmentsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageStoreEntryAttachmentsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROPERTIES: new odata_v2_1.Link('Properties', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = MessageStoreEntryAttachments_1.MessageStoreEntryAttachments;
    requestBuilder() {
        return new MessageStoreEntryAttachmentsRequestBuilder_1.MessageStoreEntryAttachmentsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageStoreEntryAttachments_1.MessageStoreEntryAttachments, this.deSerializers);
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
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
                /**
                 * Static representation of the {@link contentType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CONTENT_TYPE: fieldBuilder.buildEdmTypeField('ContentType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageStoreEntryAttachments_1.MessageStoreEntryAttachments)
            };
        }
        return this._schema;
    }
}
exports.MessageStoreEntryAttachmentsApi = MessageStoreEntryAttachmentsApi;
//# sourceMappingURL=MessageStoreEntryAttachmentsApi.js.map