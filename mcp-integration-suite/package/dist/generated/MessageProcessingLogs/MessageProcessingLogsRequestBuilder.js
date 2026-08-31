"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogs_1 = require("./MessageProcessingLogs");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogs} entity.
 */
class MessageProcessingLogsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogs` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogs` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogs` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogs`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogs` entity based on its keys.
     * @param messageGuid Key property. See {@link MessageProcessingLogs.messageGuid}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogs` entity based on its keys.
     */
    getByKey(messageGuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { MessageGuid: messageGuid });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogs`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogs`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(messageGuidOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, messageGuidOrEntity instanceof MessageProcessingLogs_1.MessageProcessingLogs
            ? messageGuidOrEntity
            : { MessageGuid: messageGuidOrEntity });
    }
}
exports.MessageProcessingLogsRequestBuilder = MessageProcessingLogsRequestBuilder;
//# sourceMappingURL=MessageProcessingLogsRequestBuilder.js.map