"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImageService = void 0;
const endpoints_1 = require("../../constants/endpoints");
const generateImageService = async ({ apiConfig, modelId, params, }) => {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiConfig.apiKey}`,
    };
    try {
        const endpoint = `${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("createInferenceJob", {
            modelId,
        })}`;
        // Submit Job
        const submitJobResponse = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify(params),
        });
        // Await Data
        const data = (await submitJobResponse.json());
        const inferenceId = data.id;
        // Poll Status
        while (data.state !== "finished" && data.state !== "failed") {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            const retrieveJobResponse = await fetch(`${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("getInferenceJob", {
                modelId,
                inferenceId,
            })}`, { headers });
            data.state = (await retrieveJobResponse.json()).state;
        }
        return { data, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.generateImageService = generateImageService;
