"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariablesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Variables_1 = require("./Variables");
/**
 * Request builder class for operations supported on the {@link Variables} entity.
 */
class VariablesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Variables` entities.
     * @returns A request builder for creating requests to retrieve all `Variables` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Variables` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Variables`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Variables` entity based on its keys.
     * @param variableName Key property. See {@link Variables.variableName}.
     * @param integrationFlow Key property. See {@link Variables.integrationFlow}.
     * @returns A request builder for creating requests to retrieve one `Variables` entity based on its keys.
     */
    getByKey(variableName, integrationFlow) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            VariableName: variableName,
            IntegrationFlow: integrationFlow
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Variables`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Variables`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(variableNameOrEntity, integrationFlow) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, variableNameOrEntity instanceof Variables_1.Variables
            ? variableNameOrEntity
            : {
                VariableName: variableNameOrEntity,
                IntegrationFlow: integrationFlow
            });
    }
}
exports.VariablesRequestBuilder = VariablesRequestBuilder;
//# sourceMappingURL=VariablesRequestBuilder.js.map