"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operations = void 0;
exports.deployIntegrationDesigntimeArtifact = deployIntegrationDesigntimeArtifact;
exports.integrationDesigntimeArtifactSaveAsVersion = integrationDesigntimeArtifactSaveAsVersion;
exports.copyIntegrationPackage = copyIntegrationPackage;
exports.deployValueMappingDesigntimeArtifact = deployValueMappingDesigntimeArtifact;
exports.valueMappingDesigntimeArtifactSaveAsVersion = valueMappingDesigntimeArtifactSaveAsVersion;
exports.upsertValMaps = upsertValMaps;
exports.deleteValMaps = deleteValMaps;
exports.updateDefaultValMap = updateDefaultValMap;
exports.deployIntegrationAdapterDesigntimeArtifact = deployIntegrationAdapterDesigntimeArtifact;
exports.deployMessageMappingDesigntimeArtifact = deployMessageMappingDesigntimeArtifact;
exports.messageMappingDesigntimeArtifactSaveAsVersion = messageMappingDesigntimeArtifactSaveAsVersion;
exports.deployScriptCollectionDesigntimeArtifact = deployScriptCollectionDesigntimeArtifact;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const service_1 = require("./service");
/**
 * Deploy Integration Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deployIntegrationDesigntimeArtifact(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeployIntegrationDesigntimeArtifact', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).integrationDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Integration Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function integrationDesigntimeArtifactSaveAsVersion(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        saveAsVersion: new odata_v2_1.OperationParameter('SaveAsVersion', 'Edm.String', parameters.saveAsVersion)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'IntegrationDesigntimeArtifactSaveAsVersion', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).integrationDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Copy Integration Package.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function copyIntegrationPackage(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        importMode: new odata_v2_1.OperationParameter('ImportMode', 'Edm.String', parameters.importMode),
        suffix: new odata_v2_1.OperationParameter('Suffix', 'Edm.String', parameters.suffix)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'CopyIntegrationPackage', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).integrationPackagesApi), params, deSerializers);
}
/**
 * Deploy Value Mapping Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deployValueMappingDesigntimeArtifact(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeployValueMappingDesigntimeArtifact', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).valueMappingDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Value Mapping Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function valueMappingDesigntimeArtifactSaveAsVersion(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        saveAsVersion: new odata_v2_1.OperationParameter('SaveAsVersion', 'Edm.String', parameters.saveAsVersion)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'ValueMappingDesigntimeArtifactSaveAsVersion', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).valueMappingDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Upsert Val Maps.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function upsertValMaps(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version),
        srcAgency: new odata_v2_1.OperationParameter('SrcAgency', 'Edm.String', parameters.srcAgency),
        srcId: new odata_v2_1.OperationParameter('SrcId', 'Edm.String', parameters.srcId),
        tgtAgency: new odata_v2_1.OperationParameter('TgtAgency', 'Edm.String', parameters.tgtAgency),
        tgtId: new odata_v2_1.OperationParameter('TgtId', 'Edm.String', parameters.tgtId),
        valMapId: new odata_v2_1.OperationParameter('ValMapId', 'Edm.String', parameters.valMapId),
        srcValue: new odata_v2_1.OperationParameter('SrcValue', 'Edm.String', parameters.srcValue),
        tgtValue: new odata_v2_1.OperationParameter('TgtValue', 'Edm.String', parameters.tgtValue),
        isConfigured: new odata_v2_1.OperationParameter('IsConfigured', 'Edm.Boolean', parameters.isConfigured)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'UpsertValMaps', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).valMapsApi), params, deSerializers);
}
/**
 * Delete Val Maps.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deleteValMaps(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version),
        srcAgency: new odata_v2_1.OperationParameter('SrcAgency', 'Edm.String', parameters.srcAgency),
        srcId: new odata_v2_1.OperationParameter('SrcId', 'Edm.String', parameters.srcId),
        tgtAgency: new odata_v2_1.OperationParameter('TgtAgency', 'Edm.String', parameters.tgtAgency),
        tgtId: new odata_v2_1.OperationParameter('TgtId', 'Edm.String', parameters.tgtId)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeleteValMaps', data => (0, odata_v2_1.transformReturnValueForEdmType)(data, val => (0, odata_v2_1.edmToTs)(val.DeleteValMaps, 'Edm.String', deSerializers)), params, deSerializers);
}
/**
 * Update Default Val Map.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function updateDefaultValMap(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version),
        srcAgency: new odata_v2_1.OperationParameter('SrcAgency', 'Edm.String', parameters.srcAgency),
        srcId: new odata_v2_1.OperationParameter('SrcId', 'Edm.String', parameters.srcId),
        tgtAgency: new odata_v2_1.OperationParameter('TgtAgency', 'Edm.String', parameters.tgtAgency),
        tgtId: new odata_v2_1.OperationParameter('TgtId', 'Edm.String', parameters.tgtId),
        valMapId: new odata_v2_1.OperationParameter('ValMapId', 'Edm.String', parameters.valMapId),
        isConfigured: new odata_v2_1.OperationParameter('IsConfigured', 'Edm.Boolean', parameters.isConfigured)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'UpdateDefaultValMap', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).defaultValMapsApi), params, deSerializers);
}
/**
 * Deploy Integration Adapter Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deployIntegrationAdapterDesigntimeArtifact(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeployIntegrationAdapterDesigntimeArtifact', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers)
        .integrationAdapterDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Deploy Message Mapping Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deployMessageMappingDesigntimeArtifact(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeployMessageMappingDesigntimeArtifact', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).messageMappingDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Message Mapping Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function messageMappingDesigntimeArtifactSaveAsVersion(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        saveAsVersion: new odata_v2_1.OperationParameter('SaveAsVersion', 'Edm.String', parameters.saveAsVersion)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'MessageMappingDesigntimeArtifactSaveAsVersion', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).messageMappingDesigntimeArtifactsApi), params, deSerializers);
}
/**
 * Deploy Script Collection Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deployScriptCollectionDesigntimeArtifact(parameters, deSerializers = odata_v2_1.defaultDeSerializers) {
    const params = {
        id: new odata_v2_1.OperationParameter('Id', 'Edm.String', parameters.id),
        version: new odata_v2_1.OperationParameter('Version', 'Edm.String', parameters.version)
    };
    return new odata_v2_1.OperationRequestBuilder('post', '/', 'DeployScriptCollectionDesigntimeArtifact', data => (0, odata_v2_1.transformReturnValueForEntity)(data, (0, service_1.integrationContent)(deSerializers).scriptCollectionDesigntimeArtifactsApi), params, deSerializers);
}
exports.operations = {
    deployIntegrationDesigntimeArtifact,
    integrationDesigntimeArtifactSaveAsVersion,
    copyIntegrationPackage,
    deployValueMappingDesigntimeArtifact,
    valueMappingDesigntimeArtifactSaveAsVersion,
    upsertValMaps,
    deleteValMaps,
    updateDefaultValMap,
    deployIntegrationAdapterDesigntimeArtifact,
    deployMessageMappingDesigntimeArtifact,
    messageMappingDesigntimeArtifactSaveAsVersion,
    deployScriptCollectionDesigntimeArtifact
};
//# sourceMappingURL=operations.js.map