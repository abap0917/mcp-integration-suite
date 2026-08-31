"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapFromIdsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IdMapFromIds_1 = require("./IdMapFromIds");
const IdMapFromIdsRequestBuilder_1 = require("./IdMapFromIdsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IdMapFromIdsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IdMapFromIdsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_IDS: new odata_v2_1.Link('ToIds', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = IdMapFromIds_1.IdMapFromIds;
    requestBuilder() {
        return new IdMapFromIdsRequestBuilder_1.IdMapFromIdsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IdMapFromIds_1.IdMapFromIds, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link fromId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FROM_ID: fieldBuilder.buildEdmTypeField('FromId', 'Edm.String', false),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IdMapFromIds_1.IdMapFromIds)
            };
        }
        return this._schema;
    }
}
exports.IdMapFromIdsApi = IdMapFromIdsApi;
//# sourceMappingURL=IdMapFromIdsApi.js.map