"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationDesigntimeArtifactsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const IntegrationDesigntimeArtifacts_1 = require("./IntegrationDesigntimeArtifacts");
/**
 * Request builder class for operations supported on the {@link IntegrationDesigntimeArtifacts} entity.
 */
class IntegrationDesigntimeArtifactsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `IntegrationDesigntimeArtifacts` entities.
     * @returns A request builder for creating requests to retrieve all `IntegrationDesigntimeArtifacts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `IntegrationDesigntimeArtifacts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IntegrationDesigntimeArtifacts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `IntegrationDesigntimeArtifacts` entity based on its keys.
     * @param id Key property. See {@link IntegrationDesigntimeArtifacts.id}.
     * @param version Key property. See {@link IntegrationDesigntimeArtifacts.version}.
     * @returns A request builder for creating requests to retrieve one `IntegrationDesigntimeArtifacts` entity based on its keys.
     */
    getByKey(id, version) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id,
            Version: version
        });
    }
    /**
     * Returns a request builder for updating an entity of type `IntegrationDesigntimeArtifacts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IntegrationDesigntimeArtifacts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity, version) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof IntegrationDesigntimeArtifacts_1.IntegrationDesigntimeArtifacts
            ? idOrEntity
            : {
                Id: idOrEntity,
                Version: version
            });
    }
}
exports.IntegrationDesigntimeArtifactsRequestBuilder = IntegrationDesigntimeArtifactsRequestBuilder;
//# sourceMappingURL=IntegrationDesigntimeArtifactsRequestBuilder.js.map