"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdiDeltaTokenApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MdiDeltaToken_1 = require("./MdiDeltaToken");
const MdiDeltaTokenRequestBuilder_1 = require("./MdiDeltaTokenRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MdiDeltaTokenApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MdiDeltaTokenApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = MdiDeltaToken_1.MdiDeltaToken;
    requestBuilder() {
        return new MdiDeltaTokenRequestBuilder_1.MdiDeltaTokenRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MdiDeltaToken_1.MdiDeltaToken, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link operation} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OPERATION: fieldBuilder.buildEdmTypeField('Operation', 'Edm.String', false),
                /**
                 * Static representation of the {@link entity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ENTITY: fieldBuilder.buildEdmTypeField('Entity', 'Edm.String', false),
                /**
                 * Static representation of the {@link version} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
                /**
                 * Static representation of the {@link deltaToken} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                DELTA_TOKEN: fieldBuilder.buildEdmTypeField('DeltaToken', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastUpdateTimestamp} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_UPDATE_TIMESTAMP: fieldBuilder.buildEdmTypeField('LastUpdateTimestamp', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MdiDeltaToken_1.MdiDeltaToken)
            };
        }
        return this._schema;
    }
}
exports.MdiDeltaTokenApi = MdiDeltaTokenApi;
//# sourceMappingURL=MdiDeltaTokenApi.js.map