"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessagesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const TraceMessages_1 = require("./TraceMessages");
const TraceMessagesRequestBuilder_1 = require("./TraceMessagesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class TraceMessagesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new TraceMessagesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            PROPERTIES: new odata_v2_1.Link('Properties', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = TraceMessages_1.TraceMessages;
    requestBuilder() {
        return new TraceMessagesRequestBuilder_1.TraceMessagesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(TraceMessages_1.TraceMessages, this.deSerializers);
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
                 * Static representation of the {@link mplId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MPL_ID: fieldBuilder.buildEdmTypeField('MplId', 'Edm.String', false),
                /**
                 * Static representation of the {@link modelStepId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODEL_STEP_ID: fieldBuilder.buildEdmTypeField('ModelStepId', 'Edm.String', true),
                /**
                 * Static representation of the {@link payloadSize} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PAYLOAD_SIZE: fieldBuilder.buildEdmTypeField('PayloadSize', 'Edm.Int64', true),
                /**
                 * Static representation of the {@link mimeType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MIME_TYPE: fieldBuilder.buildEdmTypeField('MimeType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', TraceMessages_1.TraceMessages)
            };
        }
        return this._schema;
    }
}
exports.TraceMessagesApi = TraceMessagesApi;
//# sourceMappingURL=TraceMessagesApi.js.map