"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntryProperties = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageStoreEntryProperties" of service "com.sap.hci.api".
 */
class MessageStoreEntryProperties extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageStoreEntryProperties.
     */
    static _entityName = 'MessageStoreEntryProperties';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageStoreEntryProperties entity.
     */
    static _keys = ['MessageId', 'Name'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageStoreEntryProperties = MessageStoreEntryProperties;
//# sourceMappingURL=MessageStoreEntryProperties.js.map