"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationArtifact = exports.IntegrationArtifactField = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * IntegrationArtifactField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
class IntegrationArtifactField extends odata_v2_1.ComplexTypeField {
    _fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
    /**
     * Representation of the {@link IntegrationArtifact.id} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    id = this._fieldBuilder.buildEdmTypeField('Id', 'Edm.String', true);
    /**
     * Representation of the {@link IntegrationArtifact.name} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    name = this._fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true);
    /**
     * Representation of the {@link IntegrationArtifact.type} property for query construction.
     * Use to reference this property in query operations such as 'filter' in the fluent request API.
     */
    type = this._fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true);
    /**
     * Creates an instance of IntegrationArtifactField.
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, IntegrationArtifact, fieldOptions);
    }
}
exports.IntegrationArtifactField = IntegrationArtifactField;
var IntegrationArtifact;
(function (IntegrationArtifact) {
    /**
     * Metadata information on all properties of the `IntegrationArtifact` complex type.
     */
    IntegrationArtifact._propertyMetadata = [
        {
            originalName: 'Id',
            name: 'id',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        },
        {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.String',
            isCollection: false
        }
    ];
})(IntegrationArtifact || (exports.IntegrationArtifact = IntegrationArtifact = {}));
//# sourceMappingURL=IntegrationArtifact.js.map