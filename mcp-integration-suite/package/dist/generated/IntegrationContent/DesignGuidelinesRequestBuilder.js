"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignGuidelinesRequestBuilder = void 0;
/*
 * Copyright (c) 2026 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const DesignGuidelines_1 = require("./DesignGuidelines");
/**
 * Request builder class for operations supported on the {@link DesignGuidelines} entity.
 */
class DesignGuidelinesRequestBuilder extends odata_v2_1.RequestBuilder {
    /**
     * Returns a request builder for querying all `DesignGuidelines` entities.
     * @returns A request builder for creating requests to retrieve all `DesignGuidelines` entities.
     */
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    /**
     * Returns a request builder for creating a `DesignGuidelines` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DesignGuidelines`.
     */
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    /**
     * Returns a request builder for retrieving one `DesignGuidelines` entity based on its keys.
     * @param guidelineId Key property. See {@link DesignGuidelines.guidelineId}.
     * @returns A request builder for creating requests to retrieve one `DesignGuidelines` entity based on its keys.
     */
    getByKey(guidelineId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            GuidelineId: guidelineId
        });
    }
    /**
     * Returns a request builder for updating an entity of type `DesignGuidelines`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DesignGuidelines`.
     */
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(guidelineIdOrEntity) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, guidelineIdOrEntity instanceof DesignGuidelines_1.DesignGuidelines
            ? guidelineIdOrEntity
            : { GuidelineId: guidelineIdOrEntity });
    }
}
exports.DesignGuidelinesRequestBuilder = DesignGuidelinesRequestBuilder;
//# sourceMappingURL=DesignGuidelinesRequestBuilder.js.map