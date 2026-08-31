"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildAndDeployStatus = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
/**
 * This class represents the entity "BuildAndDeployStatus" of service "com.sap.hci.api".
 */
class BuildAndDeployStatus extends odata_v2_1.Entity {
    /**
     * Technical entity name for BuildAndDeployStatus.
     */
    static _entityName = 'BuildAndDeployStatus';
    /**
     * Default url path for the according service.
     */
    static _defaultBasePath = '/';
    /**
     * All key fields of the BuildAndDeployStatus entity.
     */
    static _keys = ['TaskId'];
    constructor(_entityApi) {
        super(_entityApi);
    }
}
exports.BuildAndDeployStatus = BuildAndDeployStatus;
//# sourceMappingURL=BuildAndDeployStatus.js.map