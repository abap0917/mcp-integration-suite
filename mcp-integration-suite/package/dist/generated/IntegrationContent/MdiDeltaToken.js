"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MdiDeltaToken = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MDIDeltaToken" of service "com.sap.hci.api".
 */
class MdiDeltaToken extends odata_v2_1.Entity {
    /**
     * Technical entity name for MdiDeltaToken.
     */
    static _entityName = 'MDIDeltaToken';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MdiDeltaToken entity.
     */
    static _keys = ['Operation', 'Entity', 'Version'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MdiDeltaToken = MdiDeltaToken;
//# sourceMappingURL=MdiDeltaToken.js.map