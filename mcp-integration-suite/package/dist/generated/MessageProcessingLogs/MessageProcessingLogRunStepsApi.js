"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunStepsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogRunSteps_1 = require("./MessageProcessingLogRunSteps");
const MessageProcessingLogRunStepsRequestBuilder_1 = require("./MessageProcessingLogRunStepsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogRunStepsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogRunStepsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            RUN_STEP_PROPERTIES: new odata_v2_1.Link('RunStepProperties', this, linkedApis[0]),
            TRACE_MESSAGES: new odata_v2_1.Link('TraceMessages', this, linkedApis[1])
        };
        return this;
    }
    entityConstructor = MessageProcessingLogRunSteps_1.MessageProcessingLogRunSteps;
    requestBuilder() {
        return new MessageProcessingLogRunStepsRequestBuilder_1.MessageProcessingLogRunStepsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogRunSteps_1.MessageProcessingLogRunSteps, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link runId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                RUN_ID: fieldBuilder.buildEdmTypeField('RunId', 'Edm.String', false),
                /**
                 * Static representation of the {@link childCount} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CHILD_COUNT: fieldBuilder.buildEdmTypeField('ChildCount', 'Edm.Int32', false),
                /**
                 * Static representation of the {@link stepStart} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STEP_START: fieldBuilder.buildEdmTypeField('StepStart', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link stepStop} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STEP_STOP: fieldBuilder.buildEdmTypeField('StepStop', 'Edm.DateTime', true),
                /**
                 * Static representation of the {@link stepId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STEP_ID: fieldBuilder.buildEdmTypeField('StepId', 'Edm.String', true),
                /**
                 * Static representation of the {@link modelStepId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MODEL_STEP_ID: fieldBuilder.buildEdmTypeField('ModelStepId', 'Edm.String', true),
                /**
                 * Static representation of the {@link branchId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                BRANCH_ID: fieldBuilder.buildEdmTypeField('BranchId', 'Edm.String', true),
                /**
                 * Static representation of the {@link status} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                STATUS: fieldBuilder.buildEdmTypeField('Status', 'Edm.String', true),
                /**
                 * Static representation of the {@link error} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ERROR: fieldBuilder.buildEdmTypeField('Error', 'Edm.String', true),
                /**
                 * Static representation of the {@link activity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTIVITY: fieldBuilder.buildEdmTypeField('Activity', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogRunSteps_1.MessageProcessingLogRunSteps)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogRunStepsApi = MessageProcessingLogRunStepsApi;
//# sourceMappingURL=MessageProcessingLogRunStepsApi.js.map