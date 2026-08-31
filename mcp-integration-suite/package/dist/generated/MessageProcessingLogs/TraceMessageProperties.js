"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessageProperties = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "TraceMessageProperties" of service "com.sap.hci.api".
 */
class TraceMessageProperties extends odata_v2_1.Entity {
    /**
     * Technical entity name for TraceMessageProperties.
     */
    static _entityName = 'TraceMessageProperties';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the TraceMessageProperties entity.
     */
    static _keys = ['TraceId', 'Name'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.TraceMessageProperties = TraceMessageProperties;
//# sourceMappingURL=TraceMessageProperties.js.map