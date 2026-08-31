"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapToIdsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IdMapToIds_1 = require("./IdMapToIds");
const IdMapToIdsRequestBuilder_1 = require("./IdMapToIdsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IdMapToIdsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IdMapToIdsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            FROM_ID_1: new odata_v2_1.OneToOneLink('FromId', this, linkedApis[0]),
            FROM_ID_2_S: new odata_v2_1.Link('FromId2s', this, linkedApis[1])
        };
        return this;
    }
    entityConstructor = IdMapToIds_1.IdMapToIds;
    requestBuilder() {
        return new IdMapToIdsRequestBuilder_1.IdMapToIdsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IdMapToIds_1.IdMapToIds, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link toId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TO_ID: fieldBuilder.buildEdmTypeField('ToId', 'Edm.String', false),
                /**
                 * Static representation of the {@link fromId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                FROM_ID: fieldBuilder.buildEdmTypeField('FromId_', 'Edm.String', true),
                /**
                 * Static representation of the {@link mapper} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MAPPER: fieldBuilder.buildEdmTypeField('Mapper', 'Edm.String', true),
                /**
                 * Static representation of the {@link expirationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRATION_TIME: fieldBuilder.buildEdmTypeField('ExpirationTime', 'Edm.DateTimeOffset', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IdMapToIds_1.IdMapToIds)
            };
        }
        return this._schema;
    }
}
exports.IdMapToIdsApi = IdMapToIdsApi;
//# sourceMappingURL=IdMapToIdsApi.js.map