"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDefinitions = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "APIDefinitions" of service "com.sap.hci.api".
 */
class ApiDefinitions extends odata_v2_1.Entity {
    /**
     * Technical entity name for ApiDefinitions.
     */
    static _entityName = 'APIDefinitions';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the ApiDefinitions entity.
     */
    static _keys = ['Url'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ApiDefinitions = ApiDefinitions;
//# sourceMappingURL=ApiDefinitions.js.map