"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogRunSteps = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "MessageProcessingLogRunSteps" of service "com.sap.hci.api".
 */
class MessageProcessingLogRunSteps extends odata_v2_1.Entity {
    /**
     * Technical entity name for MessageProcessingLogRunSteps.
     */
    static _entityName = 'MessageProcessingLogRunSteps';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the MessageProcessingLogRunSteps entity.
     */
    static _keys = ['RunId', 'ChildCount'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.MessageProcessingLogRunSteps = MessageProcessingLogRunSteps;
//# sourceMappingURL=MessageProcessingLogRunSteps.js.map