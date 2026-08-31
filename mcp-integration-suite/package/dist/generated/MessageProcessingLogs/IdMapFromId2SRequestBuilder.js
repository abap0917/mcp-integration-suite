"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdMapFromId2SRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IdMapFromId2S_1 = require("./IdMapFromId2S");
/**
 * Request builder class for operations supported on the {@link IdMapFromId2S} entity.
 */
class IdMapFromId2SRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IdMapFromId2S` entities.
     * @returns A request builder for creating requests to retrieve all `IdMapFromId2S` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IdMapFromId2S` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IdMapFromId2S`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IdMapFromId2S` entity based on its keys.
     * @param fromId Key property. See {@link IdMapFromId2S.fromId}.
     * @returns A request builder for creating requests to retrieve one `IdMapFromId2S` entity based on its keys.
     */
    getByKey(fromId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            FromId: fromId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IdMapFromId2S`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IdMapFromId2S`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(fromIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, fromIdOrEntity instanceof IdMapFromId2S_1.IdMapFromId2S
            ? fromIdOrEntity
            : { FromId: fromIdOrEntity });
    }
}
exports.IdMapFromId2SRequestBuilder = IdMapFromId2SRequestBuilder;
//# sourceMappingURL=IdMapFromId2SRequestBuilder.js.map