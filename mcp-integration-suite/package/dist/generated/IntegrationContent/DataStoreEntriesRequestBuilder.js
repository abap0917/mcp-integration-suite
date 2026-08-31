"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStoreEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DataStoreEntries_1 = require("./DataStoreEntries");
/**
 * Request builder class for operations supported on the {@link DataStoreEntries} entity.
 */
class DataStoreEntriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `DataStoreEntries` entities.
     * @returns A request builder for creating requests to retrieve all `DataStoreEntries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DataStoreEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DataStoreEntries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `DataStoreEntries` entity based on its keys.
     * @param id Key property. See {@link DataStoreEntries.id}.
     * @param dataStoreName Key property. See {@link DataStoreEntries.dataStoreName}.
     * @param integrationFlow Key property. See {@link DataStoreEntries.integrationFlow}.
     * @param type Key property. See {@link DataStoreEntries.type}.
     * @returns A request builder for creating requests to retrieve one `DataStoreEntries` entity based on its keys.
     */
    getByKey(id, dataStoreName, integrationFlow, type) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id,
            DataStoreName: dataStoreName,
            IntegrationFlow: integrationFlow,
            Type: type
        });
    }
    /**
     * Returns a request builder for updating an entity of type `DataStoreEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DataStoreEntries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity, dataStoreName, integrationFlow, type) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof DataStoreEntries_1.DataStoreEntries
            ? idOrEntity
            : {
                Id: idOrEntity,
                DataStoreName: dataStoreName,
                IntegrationFlow: integrationFlow,
                Type: type
            });
    }
}
exports.DataStoreEntriesRequestBuilder = DataStoreEntriesRequestBuilder;
//# sourceMappingURL=DataStoreEntriesRequestBuilder.js.map