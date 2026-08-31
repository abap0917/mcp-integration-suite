"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogAdapterAttributesApi = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const MessageProcessingLogAdapterAttributes_1 = require("./MessageProcessingLogAdapterAttributes");
const MessageProcessingLogAdapterAttributesRequestBuilder_1 = require("./MessageProcessingLogAdapterAttributesRequestBuilder");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class MessageProcessingLogAdapterAttributesApi {
    deSerializers;
    constructor(deSerializers = odata_v2_1.defaultDeSerializers) {
        this.deSerializers = deSerializers;
    }
    /**
     * Do not use this method or the constructor directly.
     * Use the service function as described in the documentation to get an API instance.
     */
    static _privateFactory(deSerializers = odata_v2_1.defaultDeSerializers) {
        return new MessageProcessingLogAdapterAttributesApi(deSerializers);
    }
    navigationPropertyFields;
    _addNavigationProperties(linkedApis) {
        this.navigationPropertyFields = {
            MESSAGE_PROCESSING_LOG: new odata_v2_1.OneToOneLink('MessageProcessingLog', this, linkedApis[0])
        };
        return this;
    }
    entityConstructor = MessageProcessingLogAdapterAttributes_1.MessageProcessingLogAdapterAttributes;
    requestBuilder() {
        return new MessageProcessingLogAdapterAttributesRequestBuilder_1.MessageProcessingLogAdapterAttributesRequestBuilder(this);
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
            this._fieldBuilder = new odata_v2_1.FieldBuilder(MessageProcessingLogAdapterAttributes_1.MessageProcessingLogAdapterAttributes, this.deSerializers);
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
                 * Static representation of the {@link adapterId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADAPTER_ID: fieldBuilder.buildEdmTypeField('AdapterId', 'Edm.String', true),
                /**
                 * Static representation of the {@link adapterMessageId} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                ADAPTER_MESSAGE_ID: fieldBuilder.buildEdmTypeField('AdapterMessageId', 'Edm.String', true),
                /**
                 * Static representation of the {@link name} property for query construction.
                 * Use to reference this property in query operations such as 'select' in the fluent request API.
                 */
                NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
                ALL_FIELDS: new odata_v2_1.AllFields('*', MessageProcessingLogAdapterAttributes_1.MessageProcessingLogAdapterAttributes)
            };
        }
        return this._schema;
    }
}
exports.MessageProcessingLogAdapterAttributesApi = MessageProcessingLogAdapterAttributesApi;
//# sourceMappingURL=MessageProcessingLogAdapterAttributesApi.js.map