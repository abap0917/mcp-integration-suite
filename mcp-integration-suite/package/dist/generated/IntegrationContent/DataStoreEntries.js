"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreEntries = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "DataStoreEntries" of service "com.sap.hci.api".
 */
class DataStoreEntries extends odata_v2_1.Entity {
    /**
     * Technical entity name for DataStoreEntries.
     */
    static _entityName = 'DataStoreEntries';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the DataStoreEntries entity.
     */
    static _keys = ['Id', 'DataStoreName', 'IntegrationFlow', 'Type'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.DataStoreEntries = DataStoreEntries;
//# sourceMappingURL=DataStoreEntries.js.map