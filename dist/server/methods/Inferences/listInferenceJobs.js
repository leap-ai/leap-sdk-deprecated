"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const listInferenceJobService = async ({ apiKey, modelId, }) => {
    const { listInferenceJobs } = endpoints_1.LeapEndpoints;
    try {
        const response = await listInferenceJobs.fetch({
            apiKey,
            pathParams: {
                modelId,
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
exports.listInferenceJobService = listInferenceJobService;
