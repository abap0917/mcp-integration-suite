"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configurations = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "Configurations" of service "com.sap.hci.api".
 */
class Configurations extends odata_v2_1.Entity {
    /**
     * Technical entity name for Configurations.
     */
    static _entityName = 'Configurations';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the Configurations entity.
     */
    static _keys = ['ParameterKey'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.Configurations = Configurations;
//# sourceMappingURL=Configurations.js.map