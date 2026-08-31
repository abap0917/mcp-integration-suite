"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogErrorInformationsApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogErrorInformations_1 = require("./MessageProcessingLogErrorInformations");
const MessageProcessingLogErrorInformationsRequestBuilder_1 = require("./MessageProcessingLogErrorInformationsRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogErrorInformationsApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogErrorInformationsApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {};
        return this;
    }
    entityConstructor = MessageProcessingLogErrorInformations_1.MessageProcessingLogErrorInformations;
    requestBuilder() {
        return new MessageProcessingLogErrorInformationsRequestBuilder_1.MessageProcessingLogErrorInformationsRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogErrorInformations_1.MessageProcessingLogErrorInformations, this.deSerializers);
        }
        return this._fieldBuilder;
    }
    _schema;
    get schema() {
        if (!this._schema) {
            const fieldBuilder = this.fieldBuilder;
            this._schema = {
                /**
                 * Static representation of the {@link messageGuid} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                MESSAGE_GUID: fieldBuilder.buildEdmTypeField('MessageGuid', 'Edm.String', false),
                /**
                 * Static representation of the {@link type} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
                /**
                 * Static representation of the {@link lastErrorModelStepId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                LAST_ERROR_MODEL_STEP_ID: fieldBuilder.buildEdmTypeField('LastErrorModelStepId', 'Edm.String', true),
                ...this.navigationPropertyFields,
                /**
                 *
                 * All fields selector.
                 */
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogErrorInformations_1.MessageProcessingLogErrorInformations)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogErrorInformationsApi = MessageProcessingLogErrorInformationsApi;
//# sourceMappingURL=MessageProcessingLogErrorInformationsApi.js.map