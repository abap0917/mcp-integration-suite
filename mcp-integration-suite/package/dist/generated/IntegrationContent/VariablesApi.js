"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Variables_1 = require("./Variables");
const VariablesRequestBuilder_1 = require("./VariablesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class VariablesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new VariablesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = Variables_1.Variables;
    requestBuilder() {
        return new VariablesRequestBuilder_1.VariablesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Variables_1.Variables, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link variableName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VARIABLE_NAME: fieldBuilder.buildEdmTypeField('VariableName', 'Edm.String', false),
                /**
                 * Static representation of the {@link integrationFlow} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INTEGRATION_FLOW: fieldBuilder.buildEdmTypeField('IntegrationFlow', 'Edm.String', false),
                /**
                 * Static representation of the {@link visibility} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VISIBILITY: fieldBuilder.buildEdmTypeField('Visibility', 'Edm.String', true),
                /**
                 * Static representation of the {@link updatedAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                UPDATED_AT: fieldBuilder.buildEdmTypeField('UpdatedAt', 'Edm.DateTime', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', Variables_1.Variables)
            };
        }
        return this._schema;
    }
}
exports.VariablesApi = VariablesApi;
//# sourceMappingURL=VariablesApi.js.map