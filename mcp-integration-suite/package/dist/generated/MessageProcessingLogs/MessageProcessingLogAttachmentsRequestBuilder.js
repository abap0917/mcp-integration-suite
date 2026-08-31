"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogAttachmentsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogAttachments_1 = require("./MessageProcessingLogAttachments");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogAttachments} entity.
 */
class MessageProcessingLogAttachmentsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogAttachments` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogAttachments` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogAttachments` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogAttachments`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogAttachments` entity based on its keys.
     * @param id Key property. See {@link MessageProcessingLogAttachments.id}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogAttachments` entity based on its keys.
     */
    getByKey(id) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { Id: id });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogAttachments`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogAttachments`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(idOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, idOrEntity instanceof MessageProcessingLogAttachments_1.MessageProcessingLogAttachments
            ? idOrEntity
            : { Id: idOrEntity });
    }
}
exports.MessageProcessingLogAttachmentsRequestBuilder = MessageProcessingLogAttachmentsRequestBuilder;
//# sourceMappingURL=MessageProcessingLogAttachmentsRequestBuilder.js.map