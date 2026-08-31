"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDefinitionsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ApiDefinitions_1 = require("./ApiDefinitions");
const ApiDefinitionsRequestBuilder_1 = require("./ApiDefinitionsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ApiDefinitionsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ApiDefinitionsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = ApiDefinitions_1.ApiDefinitions;
    requestBuilder() {
        return new ApiDefinitionsRequestBuilder_1.ApiDefinitionsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ApiDefinitions_1.ApiDefinitions, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link url} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                URL: fieldBuilder.buildEdmTypeField('Url', 'Edm.String', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ApiDefinitions_1.ApiDefinitions)
            };
        }
        return this._schema;
    }
}
exports.ApiDefinitionsApi = ApiDefinitionsApi;
//# sourceMappingURL=ApiDefinitionsApi.js.map