"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultValMapsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DefaultValMaps_1 = require("./DefaultValMaps");
const DefaultValMapsRequestBuilder_1 = require("./DefaultValMapsRequestBuilder");
const Value_1 = require("./Value");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DefaultValMapsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new DefaultValMapsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = DefaultValMaps_1.DefaultValMaps;
    requestBuilder() {
        return new DefaultValMapsRequestBuilder_1.DefaultValMapsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DefaultValMaps_1.DefaultValMaps, this.deSerializers);
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
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildComplexTypeField('Value', Value_1.ValueField, false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DefaultValMaps_1.DefaultValMaps)
            };
        }
        return this._schema;
    }
}
exports.DefaultValMapsApi = DefaultValMapsApi;
//# sourceMappingURL=DefaultValMapsApi.js.map