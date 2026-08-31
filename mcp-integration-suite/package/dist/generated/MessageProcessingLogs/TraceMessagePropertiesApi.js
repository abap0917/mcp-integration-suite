"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessagePropertiesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TraceMessageProperties_1 = require("./TraceMessageProperties");
const TraceMessagePropertiesRequestBuilder_1 = require("./TraceMessagePropertiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TraceMessagePropertiesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new TraceMessagePropertiesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = TraceMessageProperties_1.TraceMessageProperties;
    requestBuilder() {
        return new TraceMessagePropertiesRequestBuilder_1.TraceMessagePropertiesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TraceMessageProperties_1.TraceMessageProperties, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link traceId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TRACE_ID: fieldBuilder.buildEdmTypeField('TraceId', 'Edm.Int64', false),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TraceMessageProperties_1.TraceMessageProperties)
            };
        }
        return this._schema;
    }
}
exports.TraceMessagePropertiesApi = TraceMessagePropertiesApi;
//# sourceMappingURL=TraceMessagePropertiesApi.js.map