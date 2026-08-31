"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptCollectionDesigntimeArtifactsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ScriptCollectionDesigntimeArtifacts_1 = require("./ScriptCollectionDesigntimeArtifacts");
const ScriptCollectionDesigntimeArtifactsRequestBuilder_1 = require("./ScriptCollectionDesigntimeArtifactsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ScriptCollectionDesigntimeArtifactsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ScriptCollectionDesigntimeArtifactsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            RESOURCES: new odata_v2_1.Link('Resources', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = ScriptCollectionDesigntimeArtifacts_1.ScriptCollectionDesigntimeArtifacts;
    requestBuilder() {
        return new ScriptCollectionDesigntimeArtifactsRequestBuilder_1.ScriptCollectionDesigntimeArtifactsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ScriptCollectionDesigntimeArtifacts_1.ScriptCollectionDesigntimeArtifacts, this.deSerializers);
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', ScriptCollectionDesigntimeArtifacts_1.ScriptCollectionDesigntimeArtifacts)
            };
        }
        return this._schema;
    }
}
exports.ScriptCollectionDesigntimeArtifactsApi = ScriptCollectionDesigntimeArtifactsApi;
//# sourceMappingURL=ScriptCollectionDesigntimeArtifactsApi.js.map