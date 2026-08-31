"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationDesigntimeArtifactsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationDesigntimeArtifacts_1 = require("./IntegrationDesigntimeArtifacts");
const IntegrationDesigntimeArtifactsRequestBuilder_1 = require("./IntegrationDesigntimeArtifactsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IntegrationDesigntimeArtifactsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IntegrationDesigntimeArtifactsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            CONFIGURATIONS: new odata_v2_1.Link('Configurations', this, linkedApis[0]),
            RESOURCES: new odata_v2_1.Link('Resources', this, linkedApis[1]),
            DESIGN_GUIDELINE_EXECUTION_RESULTS: new odata_v2_1.Link('DesignGuidelineExecutionResults', this, linkedApis[2])
        };
        return this;
    }
    entityConstructor = IntegrationDesigntimeArtifacts_1.IntegrationDesigntimeArtifacts;
    requestBuilder() {
        return new IntegrationDesigntimeArtifactsRequestBuilder_1.IntegrationDesigntimeArtifactsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IntegrationDesigntimeArtifacts_1.IntegrationDesigntimeArtifacts, this.deSerializers);
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
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
                /**
                 * Static representation of the {@link packageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKAGE_ID: fieldBuilder.buildEdmTypeField('PackageId', 'Edm.String', true),
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
                 * Static representation of the {@link artifactContent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_CONTENT: fieldBuilder.buildEdmTypeField('ArtifactContent', 'Edm.Binary', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IntegrationDesigntimeArtifacts_1.IntegrationDesigntimeArtifacts)
            };
        }
        return this._schema;
    }
}
exports.IntegrationDesigntimeArtifactsApi = IntegrationDesigntimeArtifactsApi;
//# sourceMappingURL=IntegrationDesigntimeArtifactsApi.js.map