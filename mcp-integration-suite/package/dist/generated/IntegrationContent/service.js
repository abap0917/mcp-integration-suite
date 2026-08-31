"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integrationContent = integrationContent;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const IntegrationDesigntimeArtifactsApi_1 = require("./IntegrationDesigntimeArtifactsApi");
const RuntimeArtifactErrorInformationsApi_1 = require("./RuntimeArtifactErrorInformationsApi");
const ConfigurationsApi_1 = require("./ConfigurationsApi");
const ResourcesApi_1 = require("./ResourcesApi");
const IntegrationRuntimeArtifactsApi_1 = require("./IntegrationRuntimeArtifactsApi");
const IntegrationPackagesApi_1 = require("./IntegrationPackagesApi");
const ServiceEndpointsApi_1 = require("./ServiceEndpointsApi");
const EntryPointsApi_1 = require("./EntryPointsApi");
const ApiDefinitionsApi_1 = require("./ApiDefinitionsApi");
const ValueMappingDesigntimeArtifactsApi_1 = require("./ValueMappingDesigntimeArtifactsApi");
const ValMapSchemaApi_1 = require("./ValMapSchemaApi");
const ValMapsApi_1 = require("./ValMapsApi");
const IntegrationAdapterDesigntimeArtifactsApi_1 = require("./IntegrationAdapterDesigntimeArtifactsApi");
const CustomTagsApi_1 = require("./CustomTagsApi");
const CustomTagConfigurationsApi_1 = require("./CustomTagConfigurationsApi");
const DataStoresApi_1 = require("./DataStoresApi");
const DataStoreEntriesApi_1 = require("./DataStoreEntriesApi");
const VariablesApi_1 = require("./VariablesApi");
const MessageMappingDesigntimeArtifactsApi_1 = require("./MessageMappingDesigntimeArtifactsApi");
const IntegrationDesigntimeLocksApi_1 = require("./IntegrationDesigntimeLocksApi");
const BuildAndDeployStatusApi_1 = require("./BuildAndDeployStatusApi");
const MdiDeltaTokenApi_1 = require("./MdiDeltaTokenApi");
const ScriptCollectionDesigntimeArtifactsApi_1 = require("./ScriptCollectionDesigntimeArtifactsApi");
const DefaultValMapsApi_1 = require("./DefaultValMapsApi");
const DesignGuidelineExecutionResultsApi_1 = require("./DesignGuidelineExecutionResultsApi");
const DesignGuidelinesApi_1 = require("./DesignGuidelinesApi");
const operations_1 = require("./operations");
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BatchRequest_1 = require("./BatchRequest");
function integrationContent(deSerializers = odata_v2_1.defaultDeSerializers) {
    return new IntegrationContent((0, odata_v2_1.mergeDefaultDeSerializersWith)(deSerializers));
}
class IntegrationContent {
    apis = {};
    deSerializers;
    constructor(deSerializers) {
        this.deSerializers = deSerializers;
    }
    initApi(key, entityApi) {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }
    get integrationDesigntimeArtifactsApi() {
        const api = this.initApi('integrationDesigntimeArtifactsApi', IntegrationDesigntimeArtifactsApi_1.IntegrationDesigntimeArtifactsApi);
        const linkedApis = [
            this.initApi('configurationsApi', ConfigurationsApi_1.ConfigurationsApi),
            this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi),
            this.initApi('designGuidelineExecutionResultsApi', DesignGuidelineExecutionResultsApi_1.DesignGuidelineExecutionResultsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get runtimeArtifactErrorInformationsApi() {
        return this.initApi('runtimeArtifactErrorInformationsApi', RuntimeArtifactErrorInformationsApi_1.RuntimeArtifactErrorInformationsApi);
    }
    get configurationsApi() {
        return this.initApi('configurationsApi', ConfigurationsApi_1.ConfigurationsApi);
    }
    get resourcesApi() {
        return this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi);
    }
    get integrationRuntimeArtifactsApi() {
        const api = this.initApi('integrationRuntimeArtifactsApi', IntegrationRuntimeArtifactsApi_1.IntegrationRuntimeArtifactsApi);
        const linkedApis = [
            this.initApi('runtimeArtifactErrorInformationsApi', RuntimeArtifactErrorInformationsApi_1.RuntimeArtifactErrorInformationsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get integrationPackagesApi() {
        const api = this.initApi('integrationPackagesApi', IntegrationPackagesApi_1.IntegrationPackagesApi);
        const linkedApis = [
            this.initApi('integrationDesigntimeArtifactsApi', IntegrationDesigntimeArtifactsApi_1.IntegrationDesigntimeArtifactsApi),
            this.initApi('valueMappingDesigntimeArtifactsApi', ValueMappingDesigntimeArtifactsApi_1.ValueMappingDesigntimeArtifactsApi),
            this.initApi('messageMappingDesigntimeArtifactsApi', MessageMappingDesigntimeArtifactsApi_1.MessageMappingDesigntimeArtifactsApi),
            this.initApi('customTagsApi', CustomTagsApi_1.CustomTagsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get serviceEndpointsApi() {
        const api = this.initApi('serviceEndpointsApi', ServiceEndpointsApi_1.ServiceEndpointsApi);
        const linkedApis = [
            this.initApi('entryPointsApi', EntryPointsApi_1.EntryPointsApi),
            this.initApi('apiDefinitionsApi', ApiDefinitionsApi_1.ApiDefinitionsApi),
            this.initApi('customTagsApi', CustomTagsApi_1.CustomTagsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get entryPointsApi() {
        return this.initApi('entryPointsApi', EntryPointsApi_1.EntryPointsApi);
    }
    get apiDefinitionsApi() {
        return this.initApi('apiDefinitionsApi', ApiDefinitionsApi_1.ApiDefinitionsApi);
    }
    get valueMappingDesigntimeArtifactsApi() {
        const api = this.initApi('valueMappingDesigntimeArtifactsApi', ValueMappingDesigntimeArtifactsApi_1.ValueMappingDesigntimeArtifactsApi);
        const linkedApis = [this.initApi('valMapSchemaApi', ValMapSchemaApi_1.ValMapSchemaApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get valMapSchemaApi() {
        const api = this.initApi('valMapSchemaApi', ValMapSchemaApi_1.ValMapSchemaApi);
        const linkedApis = [
            this.initApi('valMapsApi', ValMapsApi_1.ValMapsApi),
            this.initApi('defaultValMapsApi', DefaultValMapsApi_1.DefaultValMapsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get valMapsApi() {
        return this.initApi('valMapsApi', ValMapsApi_1.ValMapsApi);
    }
    get integrationAdapterDesigntimeArtifactsApi() {
        return this.initApi('integrationAdapterDesigntimeArtifactsApi', IntegrationAdapterDesigntimeArtifactsApi_1.IntegrationAdapterDesigntimeArtifactsApi);
    }
    get customTagsApi() {
        return this.initApi('customTagsApi', CustomTagsApi_1.CustomTagsApi);
    }
    get customTagConfigurationsApi() {
        return this.initApi('customTagConfigurationsApi', CustomTagConfigurationsApi_1.CustomTagConfigurationsApi);
    }
    get dataStoresApi() {
        const api = this.initApi('dataStoresApi', DataStoresApi_1.DataStoresApi);
        const linkedApis = [
            this.initApi('dataStoreEntriesApi', DataStoreEntriesApi_1.DataStoreEntriesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get dataStoreEntriesApi() {
        return this.initApi('dataStoreEntriesApi', DataStoreEntriesApi_1.DataStoreEntriesApi);
    }
    get variablesApi() {
        return this.initApi('variablesApi', VariablesApi_1.VariablesApi);
    }
    get messageMappingDesigntimeArtifactsApi() {
        const api = this.initApi('messageMappingDesigntimeArtifactsApi', MessageMappingDesigntimeArtifactsApi_1.MessageMappingDesigntimeArtifactsApi);
        const linkedApis = [this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get integrationDesigntimeLocksApi() {
        return this.initApi('integrationDesigntimeLocksApi', IntegrationDesigntimeLocksApi_1.IntegrationDesigntimeLocksApi);
    }
    get buildAndDeployStatusApi() {
        return this.initApi('buildAndDeployStatusApi', BuildAndDeployStatusApi_1.BuildAndDeployStatusApi);
    }
    get mdiDeltaTokenApi() {
        return this.initApi('mdiDeltaTokenApi', MdiDeltaTokenApi_1.MdiDeltaTokenApi);
    }
    get scriptCollectionDesigntimeArtifactsApi() {
        const api = this.initApi('scriptCollectionDesigntimeArtifactsApi', ScriptCollectionDesigntimeArtifactsApi_1.ScriptCollectionDesigntimeArtifactsApi);
        const linkedApis = [this.initApi('resourcesApi', ResourcesApi_1.ResourcesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get defaultValMapsApi() {
        return this.initApi('defaultValMapsApi', DefaultValMapsApi_1.DefaultValMapsApi);
    }
    get designGuidelineExecutionResultsApi() {
        const api = this.initApi('designGuidelineExecutionResultsApi', DesignGuidelineExecutionResultsApi_1.DesignGuidelineExecutionResultsApi);
        const linkedApis = [
            this.initApi('designGuidelinesApi', DesignGuidelinesApi_1.DesignGuidelinesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }
    get designGuidelinesApi() {
        return this.initApi('designGuidelinesApi', DesignGuidelinesApi_1.DesignGuidelinesApi);
    }
    get operations() {
        return {
            deployIntegrationDesigntimeArtifact: (parameter) => (0, operations_1.deployIntegrationDesigntimeArtifact)(parameter, this.deSerializers),
            integrationDesigntimeArtifactSaveAsVersion: (parameter) => (0, operations_1.integrationDesigntimeArtifactSaveAsVersion)(parameter, this.deSerializers),
            copyIntegrationPackage: (parameter) => (0, operations_1.copyIntegrationPackage)(parameter, this.deSerializers),
            deployValueMappingDesigntimeArtifact: (parameter) => (0, operations_1.deployValueMappingDesigntimeArtifact)(parameter, this.deSerializers),
            valueMappingDesigntimeArtifactSaveAsVersion: (parameter) => (0, operations_1.valueMappingDesigntimeArtifactSaveAsVersion)(parameter, this.deSerializers),
            upsertValMaps: (parameter) => (0, operations_1.upsertValMaps)(parameter, this.deSerializers),
            deleteValMaps: (parameter) => (0, operations_1.deleteValMaps)(parameter, this.deSerializers),
            updateDefaultValMap: (parameter) => (0, operations_1.updateDefaultValMap)(parameter, this.deSerializers),
            deployIntegrationAdapterDesigntimeArtifact: (parameter) => (0, operations_1.deployIntegrationAdapterDesigntimeArtifact)(parameter, this.deSerializers),
            deployMessageMappingDesigntimeArtifact: (parameter) => (0, operations_1.deployMessageMappingDesigntimeArtifact)(parameter, this.deSerializers),
            messageMappingDesigntimeArtifactSaveAsVersion: (parameter) => (0, operations_1.messageMappingDesigntimeArtifactSaveAsVersion)(parameter, this.deSerializers),
            deployScriptCollectionDesigntimeArtifact: (parameter) => (0, operations_1.deployScriptCollectionDesigntimeArtifact)(parameter, this.deSerializers)
        };
    }
    get batch() {
        return BatchRequest_1.batch;
    }
    get changeset() {
        return BatchRequest_1.changeset;
    }
}
//# sourceMappingURL=service.js.map