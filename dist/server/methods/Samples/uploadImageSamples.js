"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageSamplesService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const uploadImageSamplesService = async ({ apiKey, modelId, input, }) => {
    const { uploadSamplesViaUrl } = endpoints_1.LeapEndpoints;
    const body = {
        images: input.images,
    };
    try {
        const response = await uploadSamplesViaUrl.fetch({
            apiKey,
            pathParams: {
                modelId,
            },
            body: JSON.stringify(body),
        });
        const data = (await response.json());
        if (!response.ok) {
            const errorData = data;
            return { data: null, error: errorData };
        }
        return { data, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.uploadImageSamplesService = uploadImageSamplesService;
