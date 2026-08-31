"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunStepProperties = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageProcessingLogRunStepProperties" of service "com.sap.hci.api".
 */
class MessageProcessingLogRunStepProperties extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageProcessingLogRunStepProperties.
     */
    static _entityName = 'MessageProcessingLogRunStepProperties';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageProcessingLogRunStepProperties entity.
     */
    static _keys = ['RunId', 'ChildCount', 'Name'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageProcessingLogRunStepProperties = MessageProcessingLogRunStepProperties;
//# sourceMappingURL=MessageProcessingLogRunStepProperties.js.map