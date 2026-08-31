"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunStepPropertiesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogRunStepProperties_1 = require("./MessageProcessingLogRunStepProperties");
const MessageProcessingLogRunStepPropertiesRequestBuilder_1 = require("./MessageProcessingLogRunStepPropertiesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogRunStepPropertiesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogRunStepPropertiesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = MessageProcessingLogRunStepProperties_1.MessageProcessingLogRunStepProperties;
    requestBuilder() {
        return new MessageProcessingLogRunStepPropertiesRequestBuilder_1.MessageProcessingLogRunStepPropertiesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogRunStepProperties_1.MessageProcessingLogRunStepProperties, this.deSerializers);
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
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
                /**
                 * Static representation of the {@link value} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogRunStepProperties_1.MessageProcessingLogRunStepProperties)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogRunStepPropertiesApi = MessageProcessingLogRunStepPropertiesApi;
//# sourceMappingURL=MessageProcessingLogRunStepPropertiesApi.js.map