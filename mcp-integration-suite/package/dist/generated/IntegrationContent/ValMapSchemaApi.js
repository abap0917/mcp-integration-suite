"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValMapSchemaApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const ValMapSchema_1 = require("./ValMapSchema");
const ValMapSchemaRequestBuilder_1 = require("./ValMapSchemaRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class ValMapSchemaApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new ValMapSchemaApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            VAL_MAPS: new odata_v2_1.Link('ValMaps', this, linkedApis[0]),
            DEFAULT_VAL_MAPS: new odata_v2_1.Link('DefaultValMaps', this, linkedApis[1])
        };
        return this;
    }
    entityConstructor = ValMapSchema_1.ValMapSchema;
    requestBuilder() {
        return new ValMapSchemaRequestBuilder_1.ValMapSchemaRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(ValMapSchema_1.ValMapSchema, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link srcAgency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_AGENCY: fieldBuilder.buildEdmTypeField('SrcAgency', 'Edm.String', false),
                /**
                 * Static representation of the {@link srcId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SRC_ID: fieldBuilder.buildEdmTypeField('SrcId', 'Edm.String', false),
                /**
                 * Static representation of the {@link tgtAgency} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TGT_AGENCY: fieldBuilder.buildEdmTypeField('TgtAgency', 'Edm.String', false),
                /**
                 * Static representation of the {@link tgtId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TGT_ID: fieldBuilder.buildEdmTypeField('TgtId', 'Edm.String', false),
                /**
                 * Static representation of the {@link state} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', ValMapSchema_1.ValMapSchema)
            };
        }
        return this._schema;
    }
}
exports.ValMapSchemaApi = ValMapSchemaApi;
//# sourceMappingURL=ValMapSchemaApi.js.map