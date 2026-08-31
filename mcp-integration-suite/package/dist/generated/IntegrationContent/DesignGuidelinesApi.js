"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignGuidelinesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const DesignGuidelines_1 = require("./DesignGuidelines");
const DesignGuidelinesRequestBuilder_1 = require("./DesignGuidelinesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class DesignGuidelinesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new DesignGuidelinesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = DesignGuidelines_1.DesignGuidelines;
    requestBuilder() {
        return new DesignGuidelinesRequestBuilder_1.DesignGuidelinesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(DesignGuidelines_1.DesignGuidelines, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link guidelineId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GUIDELINE_ID: fieldBuilder.buildEdmTypeField('GuidelineId', 'Edm.String', false),
                /**
                 * Static representation of the {@link guidelineName} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                GUIDELINE_NAME: fieldBuilder.buildEdmTypeField('GuidelineName', 'Edm.String', true),
                /**
                 * Static representation of the {@link category} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                CATEGORY: fieldBuilder.buildEdmTypeField('Category', 'Edm.String', true),
                /**
                 * Static representation of the {@link severity} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SEVERITY: fieldBuilder.buildEdmTypeField('Severity', 'Edm.String', true),
                /**
                 * Static representation of the {@link applicability} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                APPLICABILITY: fieldBuilder.buildEdmTypeField('Applicability', 'Edm.String', true),
                /**
                 * Static representation of the {@link compliance} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                COMPLIANCE: fieldBuilder.buildEdmTypeField('Compliance', 'Edm.String', true),
                /**
                 * Static representation of the {@link isGuidelineSkipped} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                IS_GUIDELINE_SKIPPED: fieldBuilder.buildEdmTypeField('IsGuidelineSkipped', 'Edm.Boolean', true),
                /**
                 * Static representation of the {@link skipReason} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SKIP_REASON: fieldBuilder.buildEdmTypeField('SkipReason', 'Edm.String', true),
                /**
                 * Static representation of the {@link skippedBy} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                SKIPPED_BY: fieldBuilder.buildEdmTypeField('SkippedBy', 'Edm.String', true),
                /**
                 * Static representation of the {@link expectedKpi} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                EXPECTED_KPI: fieldBuilder.buildEdmTypeField('ExpectedKPI', 'Edm.String', true),
                /**
                 * Static representation of the {@link actualKpi} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ACTUAL_KPI: fieldBuilder.buildEdmTypeField('ActualKPI', 'Edm.String', true),
                /**
                 * Static representation of the {@link violatedComponents} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VIOLATED_COMPONENTS: fieldBuilder.buildEdmTypeField('ViolatedComponents', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', DesignGuidelines_1.DesignGuidelines)
            };
        }
        return this._schema;
    }
}
exports.DesignGuidelinesApi = DesignGuidelinesApi;
//# sourceMappingURL=DesignGuidelinesApi.js.map