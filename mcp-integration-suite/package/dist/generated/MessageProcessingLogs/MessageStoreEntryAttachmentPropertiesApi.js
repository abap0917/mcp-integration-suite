"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntryAttachmentPropertiesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageStoreEntryAttachmentProperties_1 = require("./MessageStoreEntryAttachmentProperties");
const MessageStoreEntryAttachmentPropertiesRequestBuilder_1 = require("./MessageStoreEntryAttachmentPropertiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageStoreEntryAttachmentPropertiesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageStoreEntryAttachmentPropertiesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = MessageStoreEntryAttachmentProperties_1.MessageStoreEntryAttachmentProperties;
    requestBuilder() {
        return new MessageStoreEntryAttachmentPropertiesRequestBuilder_1.MessageStoreEntryAttachmentPropertiesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageStoreEntryAttachmentProperties_1.MessageStoreEntryAttachmentProperties, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link attachmentId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ATTACHMENT_ID: fieldBuilder.buildEdmTypeField('AttachmentId', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageStoreEntryAttachmentProperties_1.MessageStoreEntryAttachmentProperties)
            };
        }
        return this._schema;
    }
}
exports.MessageStoreEntryAttachmentPropertiesApi = MessageStoreEntryAttachmentPropertiesApi;
//# sourceMappingURL=MessageStoreEntryAttachmentPropertiesApi.js.map