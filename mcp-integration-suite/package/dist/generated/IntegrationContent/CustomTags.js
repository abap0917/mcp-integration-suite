"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTags = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "CustomTags" of service "com.sap.hci.api".
 */
class CustomTags extends odata_v2_1.Entity {
    /**
     * Technical entity name for CustomTags.
     */
    static _entityName = 'CustomTags';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the CustomTags entity.
     */
    static _keys = ['Name'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.CustomTags = CustomTags;
//# sourceMappingURL=CustomTags.js.map