"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoresRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DataStores_1 = require("./DataStores");
/**
 * Request builder class for operations supported on the {@link DataStores} entity.
 */
class DataStoresRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `DataStores` entities.
     * @returns A request builder for creating requests to retrieve all `DataStores` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DataStores` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DataStores`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `DataStores` entity based on its keys.
     * @param dataStoreName Key property. See {@link DataStores.dataStoreName}.
     * @param integrationFlow Key property. See {@link DataStores.integrationFlow}.
     * @param type Key property. See {@link DataStores.type}.
     * @returns A request builder for creating requests to retrieve one `DataStores` entity based on its keys.
     */
    getByKey(dataStoreName, integrationFlow, type) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            DataStoreName: dataStoreName,
            IntegrationFlow: integrationFlow,
            Type: type
        });
    }
    /**
     * Returns a request builder for updating an entity of type `DataStores`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DataStores`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(dataStoreNameOrEntity, integrationFlow, type) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, dataStoreNameOrEntity instanceof DataStores_1.DataStores
            ? dataStoreNameOrEntity
            : {
                DataStoreName: dataStoreNameOrEntity,
                IntegrationFlow: integrationFlow,
                Type: type
            });
    }
}
exports.DataStoresRequestBuilder = DataStoresRequestBuilder;
//# sourceMappingURL=DataStoresRequestBuilder.js.map