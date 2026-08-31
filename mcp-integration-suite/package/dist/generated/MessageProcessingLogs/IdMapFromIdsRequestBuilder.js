"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapFromIdsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IdMapFromIds_1 = require("./IdMapFromIds");
/**
 * Request builder class for operations supported on the {@link IdMapFromIds} entity.
 */
class IdMapFromIdsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IdMapFromIds` entities.
     * @returns A request builder for creating requests to retrieve all `IdMapFromIds` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IdMapFromIds` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IdMapFromIds`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IdMapFromIds` entity based on its keys.
     * @param fromId Key property. See {@link IdMapFromIds.fromId}.
     * @returns A request builder for creating requests to retrieve one `IdMapFromIds` entity based on its keys.
     */
    getByKey(fromId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            FromId: fromId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IdMapFromIds`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IdMapFromIds`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(fromIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, fromIdOrEntity instanceof IdMapFromIds_1.IdMapFromIds
            ? fromIdOrEntity
            : { FromId: fromIdOrEntity });
    }
}
exports.IdMapFromIdsRequestBuilder = IdMapFromIdsRequestBuilder;
//# sourceMappingURL=IdMapFromIdsRequestBuilder.js.map