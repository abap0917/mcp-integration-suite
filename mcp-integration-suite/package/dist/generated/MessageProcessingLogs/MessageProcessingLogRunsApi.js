"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogRuns_1 = require("./MessageProcessingLogRuns");
const MessageProcessingLogRunsRequestBuilder_1 = require("./MessageProcessingLogRunsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogRunsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogRunsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            RUN_STEPS: new odata_v2_1.Link('RunSteps', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = MessageProcessingLogRuns_1.MessageProcessingLogRuns;
    requestBuilder() {
        return new MessageProcessingLogRunsRequestBuilder_1.MessageProcessingLogRunsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogRuns_1.MessageProcessingLogRuns, this.deSerializers);
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
                 * Static representation of the {@link runStart} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RUN_START: fieldBuilder.buildEdmTypeField('RunStart', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link runStop} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RUN_STOP: fieldBuilder.buildEdmTypeField('RunStop', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link logLevel} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LOG_LEVEL: fieldBuilder.buildEdmTypeField('LogLevel', 'Edm.String', true),
                /**
                 * Static representation of the {@link overallState} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                OVERALL_STATE: fieldBuilder.buildEdmTypeField('OverallState', 'Edm.String', true),
                /**
                 * Static representation of the {@link processId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                PROCESS_ID: fieldBuilder.buildEdmTypeField('ProcessId', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogRuns_1.MessageProcessingLogRuns)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogRunsApi = MessageProcessingLogRunsApi;
//# sourceMappingURL=MessageProcessingLogRunsApi.js.map