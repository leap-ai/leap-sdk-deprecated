"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.archiveImageSampleService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const archiveImageSampleService = async ({ apiKey, modelId, input, }) => {
    const { archiveSample } = endpoints_1.LeapEndpoints;
    try {
        const response = await archiveSample.fetch({
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
exports.archiveImageSampleService = archiveImageSampleService;
