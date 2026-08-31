"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoresApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DataStores_1 = require("./DataStores");
const DataStoresRequestBuilder_1 = require("./DataStoresRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DataStoresApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new DataStoresApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ENTRIES: new odata_v2_1.Link('Entries', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = DataStores_1.DataStores;
    requestBuilder() {
        return new DataStoresRequestBuilder_1.DataStoresRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DataStores_1.DataStores, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
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
                 * Static representation of the {@link visibility} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VISIBILITY: fieldBuilder.buildEdmTypeField('Visibility', 'Edm.String', true),
                /**
                 * Static representation of the {@link numberOfMessages} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER_OF_MESSAGES: fieldBuilder.buildEdmTypeField('NumberOfMessages', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link numberOfOverdueMessages} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NUMBER_OF_OVERDUE_MESSAGES: fieldBuilder.buildEdmTypeField('NumberOfOverdueMessages', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DataStores_1.DataStores)
            };
        }
        return this._schema;
    }
}
exports.DataStoresApi = DataStoresApi;
//# sourceMappingURL=DataStoresApi.js.map