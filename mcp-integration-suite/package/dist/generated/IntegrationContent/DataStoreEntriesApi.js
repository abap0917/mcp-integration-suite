"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreEntriesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DataStoreEntries_1 = require("./DataStoreEntries");
const DataStoreEntriesRequestBuilder_1 = require("./DataStoreEntriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DataStoreEntriesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new DataStoreEntriesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = DataStoreEntries_1.DataStoreEntries;
    requestBuilder() {
        return new DataStoreEntriesRequestBuilder_1.DataStoreEntriesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DataStoreEntries_1.DataStoreEntries, this.deSerializers);
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
                 * Static representation of the {@link dataStoreName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATA_STORE_NAME: fieldBuilder.buildEdmTypeField('DataStoreName', 'Edm.String', false),
                /**
                 * Static representation of the {@link integrationFlow} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEGRATION_FLOW: fieldBuilder.buildEdmTypeField('IntegrationFlow', 'Edm.String', false),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', false),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                /**
                 * Static representation of the {@link messageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_ID: fieldBuilder.buildEdmTypeField('MessageId', 'Edm.String', true),
                /**
                 * Static representation of the {@link dueAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DUE_AT: fieldBuilder.buildEdmTypeField('DueAt', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link createdAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_AT: fieldBuilder.buildEdmTypeField('CreatedAt', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link retainUntil} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RETAIN_UNTIL: fieldBuilder.buildEdmTypeField('RetainUntil', 'Edm.DateTime', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DataStoreEntries_1.DataStoreEntries)
            };
        }
        return this._schema;
    }
}
exports.DataStoreEntriesApi = DataStoreEntriesApi;
//# sourceMappingURL=DataStoreEntriesApi.js.map