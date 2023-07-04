"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageSampleService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const getImageSampleService = async ({ apiKey, modelId, input, }) => {
    const { getSingleSample } = endpoints_1.LeapEndpoints;
    console.log({
        modelId: input.modelId,
        sampleId: input.sampleId,
    });
    try {
        const response = await getSingleSample.fetch({
            apiKey,
            pathParams: {
                modelId,
                sampleId: input.sampleId,
            },
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
exports.getImageSampleService = getImageSampleService;
