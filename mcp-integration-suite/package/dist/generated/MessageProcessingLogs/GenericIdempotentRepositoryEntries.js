"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericIdempotentRepositoryEntries = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "GenericIdempotentRepositoryEntries" of service "com.sap.hci.api".
 */
class GenericIdempotentRepositoryEntries extends odata_v2_1.Entity {
    /**
     * Technical entity name for GenericIdempotentRepositoryEntries.
     */
    static _entityName = 'GenericIdempotentRepositoryEntries';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the GenericIdempotentRepositoryEntries entity.
     */
    static _keys = ['HexVendor', 'HexSource', 'HexEntry', 'HexComponent'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.GenericIdempotentRepositoryEntries = GenericIdempotentRepositoryEntries;
//# sourceMappingURL=GenericIdempotentRepositoryEntries.js.map