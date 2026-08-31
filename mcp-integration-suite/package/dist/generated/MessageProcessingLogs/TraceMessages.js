"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessages = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TraceMessages" of service "com.sap.hci.api".
 */
class TraceMessages extends odata_v2_1.Entity {
    /**
     * Technical entity name for TraceMessages.
     */
    static _entityName = 'TraceMessages';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the TraceMessages entity.
     */
    static _keys = ['TraceId'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.TraceMessages = TraceMessages;
//# sourceMappingURL=TraceMessages.js.map