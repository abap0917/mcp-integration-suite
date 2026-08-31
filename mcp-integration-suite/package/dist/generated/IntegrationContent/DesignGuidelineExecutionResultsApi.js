"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignGuidelineExecutionResultsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DesignGuidelineExecutionResults_1 = require("./DesignGuidelineExecutionResults");
const DesignGuidelineExecutionResultsRequestBuilder_1 = require("./DesignGuidelineExecutionResultsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DesignGuidelineExecutionResultsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new DesignGuidelineExecutionResultsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            DESIGN_GUIDELINES: new odata_v2_1.Link('DesignGuidelines', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = DesignGuidelineExecutionResults_1.DesignGuidelineExecutionResults;
    requestBuilder() {
        return new DesignGuidelineExecutionResultsRequestBuilder_1.DesignGuidelineExecutionResultsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DesignGuidelineExecutionResults_1.DesignGuidelineExecutionResults, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link executionId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXECUTION_ID: fieldBuilder.buildEdmTypeField('ExecutionId', 'Edm.String', false),
                /**
                 * Static representation of the {@link artifactVersion} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ARTIFACT_VERSION: fieldBuilder.buildEdmTypeField('ArtifactVersion', 'Edm.String', true),
                /**
                 * Static representation of the {@link executionStatus} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXECUTION_STATUS: fieldBuilder.buildEdmTypeField('ExecutionStatus', 'Edm.String', true),
                /**
                 * Static representation of the {@link executionTime} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXECUTION_TIME: fieldBuilder.buildEdmTypeField('ExecutionTime', 'Edm.String', true),
                /**
                 * Static representation of the {@link reportType} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                REPORT_TYPE: fieldBuilder.buildEdmTypeField('ReportType', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DesignGuidelineExecutionResults_1.DesignGuidelineExecutionResults)
            };
        }
        return this._schema;
    }
}
exports.DesignGuidelineExecutionResultsApi = DesignGuidelineExecutionResultsApi;
//# sourceMappingURL=DesignGuidelineExecutionResultsApi.js.map