"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPoints = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "EntryPoints" of service "com.sap.hci.api".
 */
class EntryPoints extends odata_v2_1.Entity {
    /**
     * Technical entity name for EntryPoints.
     */
    static _entityName = 'EntryPoints';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the EntryPoints entity.
     */
    static _keys = ['Url'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.EntryPoints = EntryPoints;
//# sourceMappingURL=EntryPoints.js.map