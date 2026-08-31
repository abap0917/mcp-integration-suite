"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TraceMessagesRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const TraceMessages_1 = require("./TraceMessages");
/**
 * Request builder class for operations supported on the {@link TraceMessages} entity.
 */
class TraceMessagesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `TraceMessages` entities.
     * @returns A request builder for creating requests to retrieve all `TraceMessages` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `TraceMessages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TraceMessages`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `TraceMessages` entity based on its keys.
     * @param traceId Key property. See {@link TraceMessages.traceId}.
     * @returns A request builder for creating requests to retrieve one `TraceMessages` entity based on its keys.
     */
    getByKey(traceId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            TraceId: traceId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `TraceMessages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TraceMessages`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(traceIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, traceIdOrEntity instanceof TraceMessages_1.TraceMessages
            ? traceIdOrEntity
            : { TraceId: traceIdOrEntity });
    }
}
exports.TraceMessagesRequestBuilder = TraceMessagesRequestBuilder;
//# sourceMappingURL=TraceMessagesRequestBuilder.js.map