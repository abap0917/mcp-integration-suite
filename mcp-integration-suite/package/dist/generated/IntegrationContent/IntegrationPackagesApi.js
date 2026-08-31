"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPackagesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationPackages_1 = require("./IntegrationPackages");
const IntegrationPackagesRequestBuilder_1 = require("./IntegrationPackagesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IntegrationPackagesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IntegrationPackagesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            INTEGRATION_DESIGNTIME_ARTIFACTS: new odata_v2_1.Link('IntegrationDesigntimeArtifacts', this, linkedApis[0]),
            VALUE_MAPPING_DESIGNTIME_ARTIFACTS: new odata_v2_1.Link('ValueMappingDesigntimeArtifacts', this, linkedApis[1]),
            MESSAGE_MAPPING_DESIGNTIME_ARTIFACTS: new odata_v2_1.Link('MessageMappingDesigntimeArtifacts', this, linkedApis[2]),
            CUSTOM_TAGS: new odata_v2_1.Link('CustomTags', this, linkedApis[3])
        };
        return this;
    }
    entityConstructor = IntegrationPackages_1.IntegrationPackages;
    requestBuilder() {
        return new IntegrationPackagesRequestBuilder_1.IntegrationPackagesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IntegrationPackages_1.IntegrationPackages, this.deSerializers);
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
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', true),
                /**
                 * Static representation of the {@link shortText} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SHORT_TEXT: fieldBuilder.buildEdmTypeField('ShortText', 'Edm.String', true),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
                /**
                 * Static representation of the {@link vendor} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VENDOR: fieldBuilder.buildEdmTypeField('Vendor', 'Edm.String', true),
                /**
                 * Static representation of the {@link mode} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODE: fieldBuilder.buildEdmTypeField('Mode', 'Edm.String', true),
                /**
                 * Static representation of the {@link supportedPlatform} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUPPORTED_PLATFORM: fieldBuilder.buildEdmTypeField('SupportedPlatform', 'Edm.String', true),
                /**
                 * Static representation of the {@link modifiedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODIFIED_BY: fieldBuilder.buildEdmTypeField('ModifiedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_DATE: fieldBuilder.buildEdmTypeField('CreationDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link modifiedDate} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODIFIED_DATE: fieldBuilder.buildEdmTypeField('ModifiedDate', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('CreatedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link products} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PRODUCTS: fieldBuilder.buildEdmTypeField('Products', 'Edm.String', true),
                /**
                 * Static representation of the {@link keywords} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                KEYWORDS: fieldBuilder.buildEdmTypeField('Keywords', 'Edm.String', true),
                /**
                 * Static representation of the {@link countries} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COUNTRIES: fieldBuilder.buildEdmTypeField('Countries', 'Edm.String', true),
                /**
                 * Static representation of the {@link industries} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                INDUSTRIES: fieldBuilder.buildEdmTypeField('Industries', 'Edm.String', true),
                /**
                 * Static representation of the {@link lineOfBusiness} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LINE_OF_BUSINESS: fieldBuilder.buildEdmTypeField('LineOfBusiness', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IntegrationPackages_1.IntegrationPackages)
            };
        }
        return this._schema;
    }
}
exports.IntegrationPackagesApi = IntegrationPackagesApi;
//# sourceMappingURL=IntegrationPackagesApi.js.map