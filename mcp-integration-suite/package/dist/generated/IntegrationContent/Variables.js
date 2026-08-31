"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Variables = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Variables" of service "com.sap.hci.api".
 */
class Variables extends odata_v2_1.Entity {
    /**
     * Technical entity name for Variables.
     */
    static _entityName = 'Variables';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the Variables entity.
     */
    static _keys = ['VariableName', 'IntegrationFlow'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Variables = Variables;
//# sourceMappingURL=Variables.js.map