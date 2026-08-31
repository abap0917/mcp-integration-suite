"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPointsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const EntryPoints_1 = require("./EntryPoints");
/**
 * Request builder class for operations supported on the {@link EntryPoints} entity.
 */
class EntryPointsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `EntryPoints` entities.
     * @returns A request builder for creating requests to retrieve all `EntryPoints` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `EntryPoints` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EntryPoints`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `EntryPoints` entity based on its keys.
     * @param url Key property. See {@link EntryPoints.url}.
     * @returns A request builder for creating requests to retrieve one `EntryPoints` entity based on its keys.
     */
    getByKey(url) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Url: url
        });
    }
    /**
     * Returns a request builder for updating an entity of type `EntryPoints`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EntryPoints`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(urlOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, urlOrEntity instanceof EntryPoints_1.EntryPoints ? urlOrEntity : { Url: urlOrEntity });
    }
}
exports.EntryPointsRequestBuilder = EntryPointsRequestBuilder;
//# sourceMappingURL=EntryPointsRequestBuilder.js.map