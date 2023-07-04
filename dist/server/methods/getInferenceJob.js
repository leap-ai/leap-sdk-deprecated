"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInferenceJobService = void 0;
const endpoints_1 = require("../../constants/endpoints");
const getInferenceJobService = async ({ apiConfig, modelId, inferenceId, }) => {
    try {
        const endpoint = `${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("getInferenceJob", {
            modelId,
            inferenceId,
        })}`;
        const response = await fetch(endpoint, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiConfig.apiKey}`,
            },
        });
        const data = (await response.json());
        if (!response.ok) {
            return { data: null, error: response.statusText };
        }
        return { data, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.getInferenceJobService = getInferenceJobService;
