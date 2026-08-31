"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdempotentRepositoryEntriesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IdempotentRepositoryEntries_1 = require("./IdempotentRepositoryEntries");
const IdempotentRepositoryEntriesRequestBuilder_1 = require("./IdempotentRepositoryEntriesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class IdempotentRepositoryEntriesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new IdempotentRepositoryEntriesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = IdempotentRepositoryEntries_1.IdempotentRepositoryEntries;
    requestBuilder() {
        return new IdempotentRepositoryEntriesRequestBuilder_1.IdempotentRepositoryEntriesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(IdempotentRepositoryEntries_1.IdempotentRepositoryEntries, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link hexSource} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HEX_SOURCE: fieldBuilder.buildEdmTypeField('HexSource', 'Edm.String', false),
                /**
                 * Static representation of the {@link hexEntry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                HEX_ENTRY: fieldBuilder.buildEdmTypeField('HexEntry', 'Edm.String', false),
                /**
                 * Static representation of the {@link source} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SOURCE: fieldBuilder.buildEdmTypeField('Source', 'Edm.String', true),
                /**
                 * Static representation of the {@link entry} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTRY: fieldBuilder.buildEdmTypeField('Entry', 'Edm.String', true),
                /**
                 * Static representation of the {@link component} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPONENT: fieldBuilder.buildEdmTypeField('Component', 'Edm.String', true),
                /**
                 * Static representation of the {@link creationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CREATION_TIME: fieldBuilder.buildEdmTypeField('CreationTime', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link expirationTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPIRATION_TIME: fieldBuilder.buildEdmTypeField('ExpirationTime', 'Edm.Int64', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', IdempotentRepositoryEntries_1.IdempotentRepositoryEntries)
            };
        }
        return this._schema;
    }
}
exports.IdempotentRepositoryEntriesApi = IdempotentRepositoryEntriesApi;
//# sourceMappingURL=IdempotentRepositoryEntriesApi.js.map