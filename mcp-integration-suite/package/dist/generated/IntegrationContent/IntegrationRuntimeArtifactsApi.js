"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationRuntimeArtifactsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationRuntimeArtifacts_1 = require("./IntegrationRuntimeArtifacts");
const IntegrationRuntimeArtifactsRequestBuilder_1 = require("./IntegrationRuntimeArtifactsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IntegrationRuntimeArtifactsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IntegrationRuntimeArtifactsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ERROR_INFORMATION: new odata_v2_1.OneToOneLink('ErrorInformation', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = IntegrationRuntimeArtifacts_1.IntegrationRuntimeArtifacts;
    requestBuilder() {
        return new IntegrationRuntimeArtifactsRequestBuilder_1.IntegrationRuntimeArtifactsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IntegrationRuntimeArtifacts_1.IntegrationRuntimeArtifacts, this.deSerializers);
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
                VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
                /**
                 * Static representation of the {@link deployedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPLOYED_BY: fieldBuilder.buildEdmTypeField('DeployedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link deployedOn} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DEPLOYED_ON: fieldBuilder.buildEdmTypeField('DeployedOn', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IntegrationRuntimeArtifacts_1.IntegrationRuntimeArtifacts)
            };
        }
        return this._schema;
    }
}
exports.IntegrationRuntimeArtifactsApi = IntegrationRuntimeArtifactsApi;
//# sourceMappingURL=IntegrationRuntimeArtifactsApi.js.map