"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapFromIds = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "IdMapFromIds" of service "com.sap.hci.api".
 */
class IdMapFromIds extends odata_v2_1.Entity {
    /**
     * Technical entity name for IdMapFromIds.
     */
    static _entityName = 'IdMapFromIds';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the IdMapFromIds entity.
     */
    static _keys = ['FromId'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.IdMapFromIds = IdMapFromIds;
//# sourceMappingURL=IdMapFromIds.js.map