"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStores = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "DataStores" of service "com.sap.hci.api".
 */
class DataStores extends odata_v2_1.Entity {
    /**
     * Technical entity name for DataStores.
     */
    static _entityName = 'DataStores';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the DataStores entity.
     */
    static _keys = ['DataStoreName', 'IntegrationFlow', 'Type'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.DataStores = DataStores;
//# sourceMappingURL=DataStores.js.map