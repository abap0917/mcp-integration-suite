"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValMapSchema = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "ValMapSchema" of service "com.sap.hci.api".
 */
class ValMapSchema extends odata_v2_1.Entity {
    /**
     * Technical entity name for ValMapSchema.
     */
    static _entityName = 'ValMapSchema';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the ValMapSchema entity.
     */
    static _keys = ['SrcAgency', 'SrcId', 'TgtAgency', 'TgtId'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.ValMapSchema = ValMapSchema;
//# sourceMappingURL=ValMapSchema.js.map