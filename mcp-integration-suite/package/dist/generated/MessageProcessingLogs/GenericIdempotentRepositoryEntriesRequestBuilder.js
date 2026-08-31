"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericIdempotentRepositoryEntriesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const GenericIdempotentRepositoryEntries_1 = require("./GenericIdempotentRepositoryEntries");
/**
 * Request builder class for operations supported on the {@link GenericIdempotentRepositoryEntries} entity.
 */
class GenericIdempotentRepositoryEntriesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `GenericIdempotentRepositoryEntries` entities.
     * @returns A request builder for creating requests to retrieve all `GenericIdempotentRepositoryEntries` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `GenericIdempotentRepositoryEntries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `GenericIdempotentRepositoryEntries`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `GenericIdempotentRepositoryEntries` entity based on its keys.
     * @param hexVendor Key property. See {@link GenericIdempotentRepositoryEntries.hexVendor}.
     * @param hexSource Key property. See {@link GenericIdempotentRepositoryEntries.hexSource}.
     * @param hexEntry Key property. See {@link GenericIdempotentRepositoryEntries.hexEntry}.
     * @param hexComponent Key property. See {@link GenericIdempotentRepositoryEntries.hexComponent}.
     * @returns A request builder for creating requests to retrieve one `GenericIdempotentRepositoryEntries` entity based on its keys.
     */
    getByKey(hexVendor, hexSource, hexEntry, hexComponent) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            HexVendor: hexVendor,
            HexSource: hexSource,
            HexEntry: hexEntry,
            HexComponent: hexComponent
        });
    }
    /**
     * Returns a request builder for updating an entity of type `GenericIdempotentRepositoryEntries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `GenericIdempotentRepositoryEntries`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(hexVendorOrEntity, hexSource, hexEntry, hexComponent) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, hexVendorOrEntity instanceof GenericIdempotentRepositoryEntries_1.GenericIdempotentRepositoryEntries
            ? hexVendorOrEntity
            : {
                HexVendor: hexVendorOrEntity,
                HexSource: hexSource,
                HexEntry: hexEntry,
                HexComponent: hexComponent
            });
    }
}
exports.GenericIdempotentRepositoryEntriesRequestBuilder = GenericIdempotentRepositoryEntriesRequestBuilder;
//# sourceMappingURL=GenericIdempotentRepositoryEntriesRequestBuilder.js.map