"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const getInferenceJobService = async ({ apiKey, modelId, input, }) => {
    const { getInferenceJob } = endpoints_1.LeapEndpoints;
    try {
        const response = await getInferenceJob.fetch({
            apiKey,
            pathParams: {
                modelId,
                inferenceId: input.inferenceId,
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
exports.getInferenceJobService = getInferenceJobService;
