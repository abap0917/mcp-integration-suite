"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const Configurations_1 = require("./Configurations");
/**
 * Request builder class for operations supported on the {@link Configurations} entity.
 */
class ConfigurationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `Configurations` entities.
     * @returns A request builder for creating requests to retrieve all `Configurations` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `Configurations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Configurations`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `Configurations` entity based on its keys.
     * @param parameterKey Key property. See {@link Configurations.parameterKey}.
     * @returns A request builder for creating requests to retrieve one `Configurations` entity based on its keys.
     */
    getByKey(parameterKey) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ParameterKey: parameterKey
        });
    }
    /**
     * Returns a request builder for updating an entity of type `Configurations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Configurations`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(parameterKeyOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, parameterKeyOrEntity instanceof Configurations_1.Configurations
            ? parameterKeyOrEntity
            : { ParameterKey: parameterKeyOrEntity });
    }
}
exports.ConfigurationsRequestBuilder = ConfigurationsRequestBuilder;
//# sourceMappingURL=ConfigurationsRequestBuilder.js.map