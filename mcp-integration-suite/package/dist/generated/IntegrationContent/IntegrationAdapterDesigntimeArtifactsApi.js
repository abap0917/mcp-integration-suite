"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationAdapterDesigntimeArtifactsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationAdapterDesigntimeArtifacts_1 = require("./IntegrationAdapterDesigntimeArtifacts");
const IntegrationAdapterDesigntimeArtifactsRequestBuilder_1 = require("./IntegrationAdapterDesigntimeArtifactsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IntegrationAdapterDesigntimeArtifactsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IntegrationAdapterDesigntimeArtifactsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = IntegrationAdapterDesigntimeArtifacts_1.IntegrationAdapterDesigntimeArtifacts;
    requestBuilder() {
        return new IntegrationAdapterDesigntimeArtifactsRequestBuilder_1.IntegrationAdapterDesigntimeArtifactsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IntegrationAdapterDesigntimeArtifacts_1.IntegrationAdapterDesigntimeArtifacts, this.deSerializers);
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
                 * Static representation of the {@link artifactContent} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_CONTENT: fieldBuilder.buildEdmTypeField('ArtifactContent', 'Edm.Binary', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IntegrationAdapterDesigntimeArtifacts_1.IntegrationAdapterDesigntimeArtifacts)
            };
        }
        return this._schema;
    }
}
exports.IntegrationAdapterDesigntimeArtifactsApi = IntegrationAdapterDesigntimeArtifactsApi;
//# sourceMappingURL=IntegrationAdapterDesigntimeArtifactsApi.js.map