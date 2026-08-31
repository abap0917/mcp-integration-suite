"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogs = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageProcessingLogs" of service "com.sap.hci.api".
 */
class MessageProcessingLogs extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageProcessingLogs.
     */
    static _entityName = 'MessageProcessingLogs';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageProcessingLogs entity.
     */
    static _keys = ['MessageGuid'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageProcessingLogs = MessageProcessingLogs;
//# sourceMappingURL=MessageProcessingLogs.js.map