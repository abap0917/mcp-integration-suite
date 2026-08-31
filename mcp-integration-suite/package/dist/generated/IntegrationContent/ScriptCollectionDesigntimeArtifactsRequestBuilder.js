"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptCollectionDesigntimeArtifactsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const ScriptCollectionDesigntimeArtifacts_1 = require("./ScriptCollectionDesigntimeArtifacts");
/**
 * Request builder class for operations supported on the {@link ScriptCollectionDesigntimeArtifacts} entity.
 */
class ScriptCollectionDesigntimeArtifactsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `ScriptCollectionDesigntimeArtifacts` entities.
     * @returns A request builder for creating requests to retrieve all `ScriptCollectionDesigntimeArtifacts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `ScriptCollectionDesigntimeArtifacts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ScriptCollectionDesigntimeArtifacts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `ScriptCollectionDesigntimeArtifacts` entity based on its keys.
     * @param id Key property. See {@link ScriptCollectionDesigntimeArtifacts.id}.
     * @param version Key property. See {@link ScriptCollectionDesigntimeArtifacts.version}.
     * @returns A request builder for creating requests to retrieve one `ScriptCollectionDesigntimeArtifacts` entity based on its keys.
     */
    getByKey(id, version) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id,
            Version: version
        });
    }
    /**
     * Returns a request builder for updating an entity of type `ScriptCollectionDesigntimeArtifacts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ScriptCollectionDesigntimeArtifacts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity, version) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof ScriptCollectionDesigntimeArtifacts_1.ScriptCollectionDesigntimeArtifacts
            ? idOrEntity
            : {
                Id: idOrEntity,
                Version: version
            });
    }
}
exports.ScriptCollectionDesigntimeArtifactsRequestBuilder = ScriptCollectionDesigntimeArtifactsRequestBuilder;
//# sourceMappingURL=ScriptCollectionDesigntimeArtifactsRequestBuilder.js.map