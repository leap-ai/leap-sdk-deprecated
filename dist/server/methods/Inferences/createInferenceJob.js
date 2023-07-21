"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const createInferenceJobService = async ({ apiKey, modelId, input, }) => {
    const { createInferenceJob } = endpoints_1.LeapEndpoints;
    const body = {
        prompt: input.prompt,
        negativePrompt: input.negativePrompt,
        version: input.version,
        steps: input.steps,
        width: input.width,
        height: input.height,
        numberOfImages: input.numberOfImages,
        promptStrength: input.promptStrength,
        seed: input.seed,
        webhookUrl: input.webhookUrl,
        restoreFaces: input.restoreFaces || false,
        enhancePrompt: input.enhancePrompt || false,
        upscaleBy: input.upscaleBy || "x1",
    };
    try {
        const response = await createInferenceJob.fetch({
            apiKey,
            pathParams: {
                modelId,
            },
            body: JSON.stringify(body),
        });
        let responseJson = await response.json();
        const data = responseJson;
        if (!response.ok) {
            return { data: null, error: response.statusText };
        }
        return { data, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.createInferenceJobService = createInferenceJobService;
