"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdempotentRepositoryEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IdempotentRepositoryEntries_1 = require("./IdempotentRepositoryEntries");
/**
 * Request builder class for operations supported on the {@link IdempotentRepositoryEntries} entity.
 */
class IdempotentRepositoryEntriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IdempotentRepositoryEntries` entities.
     * @returns A request builder for creating requests to retrieve all `IdempotentRepositoryEntries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IdempotentRepositoryEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IdempotentRepositoryEntries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IdempotentRepositoryEntries` entity based on its keys.
     * @param hexSource Key property. See {@link IdempotentRepositoryEntries.hexSource}.
     * @param hexEntry Key property. See {@link IdempotentRepositoryEntries.hexEntry}.
     * @returns A request builder for creating requests to retrieve one `IdempotentRepositoryEntries` entity based on its keys.
     */
    getByKey(hexSource, hexEntry) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            HexSource: hexSource,
            HexEntry: hexEntry
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IdempotentRepositoryEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IdempotentRepositoryEntries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(hexSourceOrEntity, hexEntry) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, hexSourceOrEntity instanceof IdempotentRepositoryEntries_1.IdempotentRepositoryEntries
            ? hexSourceOrEntity
            : {
                HexSource: hexSourceOrEntity,
                HexEntry: hexEntry
            });
    }
}
exports.IdempotentRepositoryEntriesRequestBuilder = IdempotentRepositoryEntriesRequestBuilder;
//# sourceMappingURL=IdempotentRepositoryEntriesRequestBuilder.js.map