"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapToIdsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IdMapToIds_1 = require("./IdMapToIds");
/**
 * Request builder class for operations supported on the {@link IdMapToIds} entity.
 */
class IdMapToIdsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IdMapToIds` entities.
     * @returns A request builder for creating requests to retrieve all `IdMapToIds` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IdMapToIds` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IdMapToIds`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IdMapToIds` entity based on its keys.
     * @param toId Key property. See {@link IdMapToIds.toId}.
     * @returns A request builder for creating requests to retrieve one `IdMapToIds` entity based on its keys.
     */
    getByKey(toId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            ToId: toId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IdMapToIds`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IdMapToIds`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(toIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, toIdOrEntity instanceof IdMapToIds_1.IdMapToIds
            ? toIdOrEntity
            : { ToId: toIdOrEntity });
    }
}
exports.IdMapToIdsRequestBuilder = IdMapToIdsRequestBuilder;
//# sourceMappingURL=IdMapToIdsRequestBuilder.js.map