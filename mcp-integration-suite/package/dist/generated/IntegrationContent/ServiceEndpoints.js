"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceEndpoints = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ServiceEndpoints" of service "com.sap.hci.api".
 */
class ServiceEndpoints extends odata_v2_1.Entity {
    /**
     * Technical entity name for ServiceEndpoints.
     */
    static _entityName = 'ServiceEndpoints';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the ServiceEndpoints entity.
     */
    static _keys = ['Id'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ServiceEndpoints = ServiceEndpoints;
//# sourceMappingURL=ServiceEndpoints.js.map