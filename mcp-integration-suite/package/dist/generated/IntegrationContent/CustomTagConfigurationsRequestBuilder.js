"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTagConfigurationsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomTagConfigurations_1 = require("./CustomTagConfigurations");
/**
 * Request builder class for operations supported on the {@link CustomTagConfigurations} entity.
 */
class CustomTagConfigurationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `CustomTagConfigurations` entities.
     * @returns A request builder for creating requests to retrieve all `CustomTagConfigurations` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `CustomTagConfigurations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomTagConfigurations`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `CustomTagConfigurations` entity based on its keys.
     * @param id Key property. See {@link CustomTagConfigurations.id}.
     * @returns A request builder for creating requests to retrieve one `CustomTagConfigurations` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `CustomTagConfigurations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomTagConfigurations`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof CustomTagConfigurations_1.CustomTagConfigurations
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.CustomTagConfigurationsRequestBuilder = CustomTagConfigurationsRequestBuilder;
//# sourceMappingURL=CustomTagConfigurationsRequestBuilder.js.map