"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogAdapterAttributesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogAdapterAttributes_1 = require("./MessageProcessingLogAdapterAttributes");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogAdapterAttributes} entity.
 */
class MessageProcessingLogAdapterAttributesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogAdapterAttributes` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogAdapterAttributes` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogAdapterAttributes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogAdapterAttributes`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogAdapterAttributes` entity based on its keys.
     * @param id Key property. See {@link MessageProcessingLogAdapterAttributes.id}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogAdapterAttributes` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogAdapterAttributes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogAdapterAttributes`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof MessageProcessingLogAdapterAttributes_1.MessageProcessingLogAdapterAttributes
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.MessageProcessingLogAdapterAttributesRequestBuilder = MessageProcessingLogAdapterAttributesRequestBuilder;
//# sourceMappingURL=MessageProcessingLogAdapterAttributesRequestBuilder.js.map