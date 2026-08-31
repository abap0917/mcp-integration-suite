"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = exports.ValueField = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * ValueField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class ValueField extends odata_v2_1.ComplexTypeField {
    _fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
    /**
     * Representation of the {@link Value.srcValue} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    srcValue = this._fieldBuilder.buildEdmTypeField('SrcValue', 'Edm.String', true);
    /**
     * Representation of the {@link Value.tgtValue} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    tgtValue = this._fieldBuilder.buildEdmTypeField('TgtValue', 'Edm.String', true);
    /**
     * Creates an instance of ValueField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, Value, fieldOptions);
    }
}
exports.ValueField = ValueField;
var Value;
(function (Value) {
    /**
     * Metadata information on all properties of the `Value` complex type.
     */
    Value._propertyMetadata = [
        {
            originalName: 'SrcValue',
            name: 'srcValue',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'TgtValue',
            name: 'tgtValue',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(Value || (exports.Value = Value = {}));
//# sourceMappingURL=Value.js.map