"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageProcessingLogErrorInformationsRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const MessageProcessingLogErrorInformations_1 = require("./MessageProcessingLogErrorInformations");
/**
 * Request builder class for operations supported on the {@link MessageProcessingLogErrorInformations} entity.
 */
class MessageProcessingLogErrorInformationsRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `MessageProcessingLogErrorInformations` entities.
     * @returns A request builder for creating requests to retrieve all `MessageProcessingLogErrorInformations` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `MessageProcessingLogErrorInformations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageProcessingLogErrorInformations`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `MessageProcessingLogErrorInformations` entity based on its keys.
     * @param messageGuid Key property. See {@link MessageProcessingLogErrorInformations.messageGuid}.
     * @returns A request builder for creating requests to retrieve one `MessageProcessingLogErrorInformations` entity based on its keys.
     */
    getByKey(messageGuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { MessageGuid: messageGuid });
    }
    /**
     * Returns a request builder for updating an entity of type `MessageProcessingLogErrorInformations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageProcessingLogErrorInformations`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(messageGuidOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, messageGuidOrEntity instanceof MessageProcessingLogErrorInformations_1.MessageProcessingLogErrorInformations
            ? messageGuidOrEntity
            : { MessageGuid: messageGuidOrEntity });
    }
}
exports.MessageProcessingLogErrorInformationsRequestBuilder = MessageProcessingLogErrorInformationsRequestBuilder;
//# sourceMappingURL=MessageProcessingLogErrorInformationsRequestBuilder.js.map