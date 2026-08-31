"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageStoreEntryAttachmentProperties = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageStoreEntryAttachmentProperties" of service "com.sap.hci.api".
 */
class MessageStoreEntryAttachmentProperties extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageStoreEntryAttachmentProperties.
     */
    static _entityName = 'MessageStoreEntryAttachmentProperties';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageStoreEntryAttachmentProperties entity.
     */
    static _keys = ['AttachmentId', 'Name'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageStoreEntryAttachmentProperties = MessageStoreEntryAttachmentProperties;
//# sourceMappingURL=MessageStoreEntryAttachmentProperties.js.map