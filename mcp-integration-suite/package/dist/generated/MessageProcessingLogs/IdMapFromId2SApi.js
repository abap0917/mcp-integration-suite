"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapFromId2SApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IdMapFromId2S_1 = require("./IdMapFromId2S");
const IdMapFromId2SRequestBuilder_1 = require("./IdMapFromId2SRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IdMapFromId2SApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IdMapFromId2SApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            TO_ID: new odata_v2_1.OneToOneLink('ToId', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = IdMapFromId2S_1.IdMapFromId2S;
    requestBuilder() {
        return new IdMapFromId2SRequestBuilder_1.IdMapFromId2SRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IdMapFromId2S_1.IdMapFromId2S, this.deSerializers);
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
                /**
                 * Static representation of the {@link toId2} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TO_ID_2: fieldBuilder.buildEdmTypeField('ToId2', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', IdMapFromId2S_1.IdMapFromId2S)
            };
        }
        return this._schema;
    }
}
exports.IdMapFromId2SApi = IdMapFromId2SApi;
//# sourceMappingURL=IdMapFromId2SApi.js.map