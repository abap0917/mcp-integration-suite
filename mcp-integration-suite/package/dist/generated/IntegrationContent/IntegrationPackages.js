"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationPackages = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "IntegrationPackages" of service "com.sap.hci.api".
 */
class IntegrationPackages extends odata_v2_1.Entity {
    /**
     * Technical entity name for IntegrationPackages.
     */
    static _entityName = 'IntegrationPackages';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the IntegrationPackages entity.
     */
    static _keys = ['Id'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.IntegrationPackages = IntegrationPackages;
//# sourceMappingURL=IntegrationPackages.js.map