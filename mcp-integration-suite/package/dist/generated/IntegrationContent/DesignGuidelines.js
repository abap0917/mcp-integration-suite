"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignGuidelines = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "DesignGuidelines" of service "com.sap.hci.api".
 */
class DesignGuidelines extends odata_v2_1.Entity {
    /**
     * Technical entity name for DesignGuidelines.
     */
    static _entityName = 'DesignGuidelines';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the DesignGuidelines entity.
     */
    static _keys = ['GuidelineId'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.DesignGuidelines = DesignGuidelines;
//# sourceMappingURL=DesignGuidelines.js.map