"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTagConfigurationsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const CustomTagConfigurations_1 = require("./CustomTagConfigurations");
const CustomTagConfigurationsRequestBuilder_1 = require("./CustomTagConfigurationsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomTagConfigurationsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new CustomTagConfigurationsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = CustomTagConfigurations_1.CustomTagConfigurations;
    requestBuilder() {
        return new CustomTagConfigurationsRequestBuilder_1.CustomTagConfigurationsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(CustomTagConfigurations_1.CustomTagConfigurations, this.deSerializers);
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
                 * Static representation of the {@link customTagsConfigurationContent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CUSTOM_TAGS_CONFIGURATION_CONTENT: fieldBuilder.buildEdmTypeField('CustomTagsConfigurationContent', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', CustomTagConfigurations_1.CustomTagConfigurations)
            };
        }
        return this._schema;
    }
}
exports.CustomTagConfigurationsApi = CustomTagConfigurationsApi;
//# sourceMappingURL=CustomTagConfigurationsApi.js.map