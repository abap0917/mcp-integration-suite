"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationDesigntimeLocksApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationDesigntimeLocks_1 = require("./IntegrationDesigntimeLocks");
const IntegrationDesigntimeLocksRequestBuilder_1 = require("./IntegrationDesigntimeLocksRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IntegrationDesigntimeLocksApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IntegrationDesigntimeLocksApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = IntegrationDesigntimeLocks_1.IntegrationDesigntimeLocks;
    requestBuilder() {
        return new IntegrationDesigntimeLocksRequestBuilder_1.IntegrationDesigntimeLocksRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IntegrationDesigntimeLocks_1.IntegrationDesigntimeLocks, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link resourceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RESOURCE_ID: fieldBuilder.buildEdmTypeField('ResourceId', 'Edm.String', false),
                /**
                 * Static representation of the {@link artifactId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_ID: fieldBuilder.buildEdmTypeField('ArtifactId', 'Edm.String', false),
                /**
                 * Static representation of the {@link artifactName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_NAME: fieldBuilder.buildEdmTypeField('ArtifactName', 'Edm.String', true),
                /**
                 * Static representation of the {@link artifactType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_TYPE: fieldBuilder.buildEdmTypeField('ArtifactType', 'Edm.String', true),
                /**
                 * Static representation of the {@link packageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKAGE_ID: fieldBuilder.buildEdmTypeField('PackageId', 'Edm.String', true),
                /**
                 * Static representation of the {@link packageName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PACKAGE_NAME: fieldBuilder.buildEdmTypeField('PackageName', 'Edm.String', true),
                /**
                 * Static representation of the {@link createdAt} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_AT: fieldBuilder.buildEdmTypeField('CreatedAt', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link createdBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATED_BY: fieldBuilder.buildEdmTypeField('CreatedBy', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IntegrationDesigntimeLocks_1.IntegrationDesigntimeLocks)
            };
        }
        return this._schema;
    }
}
exports.IntegrationDesigntimeLocksApi = IntegrationDesigntimeLocksApi;
//# sourceMappingURL=IntegrationDesigntimeLocksApi.js.map