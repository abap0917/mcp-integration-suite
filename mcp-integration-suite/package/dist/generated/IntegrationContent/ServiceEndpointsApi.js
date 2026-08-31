"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEndpointsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ServiceEndpoints_1 = require("./ServiceEndpoints");
const ServiceEndpointsRequestBuilder_1 = require("./ServiceEndpointsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ServiceEndpointsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ServiceEndpointsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            ENTRY_POINTS: new odata_v2_1.Link('EntryPoints', this, linkedApis[0]),
            API_DEFINITIONS: new odata_v2_1.Link('ApiDefinitions', this, linkedApis[1]),
            CUSTOM_TAGS: new odata_v2_1.Link('CustomTags', this, linkedApis[2])
        };
        return this;
    }
    entityConstructor = ServiceEndpoints_1.ServiceEndpoints;
    requestBuilder() {
        return new ServiceEndpointsRequestBuilder_1.ServiceEndpointsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ServiceEndpoints_1.ServiceEndpoints, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
                /**
                 * Static representation of the {@link id} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
                /**
                 * Static representation of the {@link title} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', false),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
                /**
                 * Static representation of the {@link summary} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SUMMARY: fieldBuilder.buildEdmTypeField('Summary', 'Edm.String', false),
                /**
                 * Static representation of the {@link description} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DESCRIPTION: fieldBuilder.buildEdmTypeField('Description', 'Edm.String', false),
                /**
                 * Static representation of the {@link lastUpdated} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_UPDATED: fieldBuilder.buildEdmTypeField('LastUpdated', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link protocol} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROTOCOL: fieldBuilder.buildEdmTypeField('Protocol', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ServiceEndpoints_1.ServiceEndpoints)
            };
        }
        return this._schema;
    }
}
exports.ServiceEndpointsApi = ServiceEndpointsApi;
//# sourceMappingURL=ServiceEndpointsApi.js.map