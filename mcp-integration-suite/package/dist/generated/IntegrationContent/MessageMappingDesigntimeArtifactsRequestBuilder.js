"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageMappingDesigntimeArtifactsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageMappingDesigntimeArtifacts_1 = require("./MessageMappingDesigntimeArtifacts");
/**
 * Request builder class for operations supported on the {@link MessageMappingDesigntimeArtifacts} entity.
 */
class MessageMappingDesigntimeArtifactsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageMappingDesigntimeArtifacts` entities.
     * @returns A request builder for creating requests to retrieve all `MessageMappingDesigntimeArtifacts` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageMappingDesigntimeArtifacts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageMappingDesigntimeArtifacts`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageMappingDesigntimeArtifacts` entity based on its keys.
     * @param id Key property. See {@link MessageMappingDesigntimeArtifacts.id}.
     * @param version Key property. See {@link MessageMappingDesigntimeArtifacts.version}.
     * @returns A request builder for creating requests to retrieve one `MessageMappingDesigntimeArtifacts` entity based on its keys.
     */
    getByKey(id, version) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Id: id,
            Version: version
        });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageMappingDesigntimeArtifacts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageMappingDesigntimeArtifacts`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity, version) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof MessageMappingDesigntimeArtifacts_1.MessageMappingDesigntimeArtifacts
            ? idOrEntity
            : {
                Id: idOrEntity,
                Version: version
            });
    }
}
exports.MessageMappingDesigntimeArtifactsRequestBuilder = MessageMappingDesigntimeArtifactsRequestBuilder;
//# sourceMappingURL=MessageMappingDesigntimeArtifactsRequestBuilder.js.map