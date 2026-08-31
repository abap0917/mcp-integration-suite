"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntries = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageStoreEntries" of service "com.sap.hci.api".
 */
class MessageStoreEntries extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageStoreEntries.
     */
    static _entityName = 'MessageStoreEntries';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageStoreEntries entity.
     */
    static _keys = ['Id'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageStoreEntries = MessageStoreEntries;
//# sourceMappingURL=MessageStoreEntries.js.map