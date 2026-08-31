"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTagsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomTags_1 = require("./CustomTags");
/**
 * Request builder class for operations supported on the {@link CustomTags} entity.
 */
class CustomTagsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `CustomTags` entities.
     * @returns A request builder for creating requests to retrieve all `CustomTags` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomTags` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomTags`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `CustomTags` entity based on its keys.
     * @param name Key property. See {@link CustomTags.name}.
     * @returns A request builder for creating requests to retrieve one `CustomTags` entity based on its keys.
     */
    getByKey(name) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Name: name
        });
    }
    /**
     * Returns a request builder for updating an entity of type `CustomTags`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomTags`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(nameOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, nameOrEntity instanceof CustomTags_1.CustomTags
            ? nameOrEntity
            : { Name: nameOrEntity });
    }
}
exports.CustomTagsRequestBuilder = CustomTagsRequestBuilder;
//# sourceMappingURL=CustomTagsRequestBuilder.js.map