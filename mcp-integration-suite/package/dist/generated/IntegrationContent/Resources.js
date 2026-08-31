"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resources = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Resources" of service "com.sap.hci.api".
 */
class Resources extends odata_v2_1.Entity {
    /**
     * Technical entity name for Resources.
     */
    static _entityName = 'Resources';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the Resources entity.
     */
    static _keys = ['Name', 'ResourceType'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Resources = Resources;
//# sourceMappingURL=Resources.js.map