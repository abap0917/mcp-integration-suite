"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const Configurations_1 = require("./Configurations");
const ConfigurationsRequestBuilder_1 = require("./ConfigurationsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ConfigurationsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ConfigurationsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = Configurations_1.Configurations;
    requestBuilder() {
        return new ConfigurationsRequestBuilder_1.ConfigurationsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(Configurations_1.Configurations, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link parameterKey} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMETER_KEY: fieldBuilder.buildEdmTypeField('ParameterKey', 'Edm.String', false),
                /**
                 * Static representation of the {@link parameterValue} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PARAMETER_VALUE: fieldBuilder.buildEdmTypeField('ParameterValue', 'Edm.String', true),
                /**
                 * Static representation of the {@link dataType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DATA_TYPE: fieldBuilder.buildEdmTypeField('DataType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', Configurations_1.Configurations)
            };
        }
        return this._schema;
    }
}
exports.ConfigurationsApi = ConfigurationsApi;
//# sourceMappingURL=ConfigurationsApi.js.map