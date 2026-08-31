"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdempotentRepositoryEntries = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "IdempotentRepositoryEntries" of service "com.sap.hci.api".
 */
class IdempotentRepositoryEntries extends odata_v2_1.Entity {
    /**
     * Technical entity name for IdempotentRepositoryEntries.
     */
    static _entityName = 'IdempotentRepositoryEntries';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the IdempotentRepositoryEntries entity.
     */
    static _keys = ['HexSource', 'HexEntry'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.IdempotentRepositoryEntries = IdempotentRepositoryEntries;
//# sourceMappingURL=IdempotentRepositoryEntries.js.map