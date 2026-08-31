"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValMapsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ValMaps_1 = require("./ValMaps");
/**
 * Request builder class for operations supported on the {@link ValMaps} entity.
 */
class ValMapsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ValMaps` entities.
     * @returns A request builder for creating requests to retrieve all `ValMaps` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ValMaps` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValMaps`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ValMaps` entity based on its keys.
     * @param id Key property. See {@link ValMaps.id}.
     * @returns A request builder for creating requests to retrieve one `ValMaps` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ValMaps`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValMaps`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ValMaps_1.ValMaps ? idOrEntity : { Id: idOrEntity });
    }
}
exports.ValMapsRequestBuilder = ValMapsRequestBuilder;
//# sourceMappingURL=ValMapsRequestBuilder.js.map