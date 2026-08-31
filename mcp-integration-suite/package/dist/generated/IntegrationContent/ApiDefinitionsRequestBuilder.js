"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDefinitionsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ApiDefinitions_1 = require("./ApiDefinitions");
/**
 * Request builder class for operations supported on the {@link ApiDefinitions} entity.
 */
class ApiDefinitionsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ApiDefinitions` entities.
     * @returns A request builder for creating requests to retrieve all `ApiDefinitions` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ApiDefinitions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApiDefinitions`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ApiDefinitions` entity based on its keys.
     * @param url Key property. See {@link ApiDefinitions.url}.
     * @returns A request builder for creating requests to retrieve one `ApiDefinitions` entity based on its keys.
     */
    getByKey(url) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Url: url
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ApiDefinitions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApiDefinitions`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(urlOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, urlOrEntity instanceof ApiDefinitions_1.ApiDefinitions
            ? urlOrEntity
            : { Url: urlOrEntity });
    }
}
exports.ApiDefinitionsRequestBuilder = ApiDefinitionsRequestBuilder;
//# sourceMappingURL=ApiDefinitionsRequestBuilder.js.map