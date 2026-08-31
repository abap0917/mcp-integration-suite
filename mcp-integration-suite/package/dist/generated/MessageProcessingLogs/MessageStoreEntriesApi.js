"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntriesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageStoreEntries_1 = require("./MessageStoreEntries");
const MessageStoreEntriesRequestBuilder_1 = require("./MessageStoreEntriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageStoreEntriesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageStoreEntriesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROPERTIES: new odata_v2_1.Link('Properties', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = MessageStoreEntries_1.MessageStoreEntries;
    requestBuilder() {
        return new MessageStoreEntriesRequestBuilder_1.MessageStoreEntriesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageStoreEntries_1.MessageStoreEntries, this.deSerializers);
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
                 * Static representation of the {@link messageStoreId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_STORE_ID: fieldBuilder.buildEdmTypeField('MessageStoreId', 'Edm.String', true),
                /**
                 * Static representation of the {@link timeStamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TIME_STAMP: fieldBuilder.buildEdmTypeField('TimeStamp', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link hasAttachments} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HAS_ATTACHMENTS: fieldBuilder.buildEdmTypeField('HasAttachments', 'Edm.Boolean', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageStoreEntries_1.MessageStoreEntries)
            };
        }
        return this._schema;
    }
}
exports.MessageStoreEntriesApi = MessageStoreEntriesApi;
//# sourceMappingURL=MessageStoreEntriesApi.js.map