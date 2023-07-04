"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImageService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const generateImageService = async ({ apiKey, modelId, input, }) => {
    const { createInferenceJob, getInferenceJob } = endpoints_1.LeapEndpoints;
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
        // Submit Job
        const submitJobResponse = await createInferenceJob.fetch({
            apiKey,
            pathParams: {
                modelId,
            },
            body: JSON.stringify(body),
        });
        // Await Data
        const submitJobData = (await submitJobResponse.json());
        if (!submitJobResponse.ok) {
            const errorData = submitJobData;
            return { data: null, error: errorData };
        }
        const inferenceId = submitJobData.id;
        // Poll Status
        let state = "queued";
        let data = null;
        while (state !== "finished" && state !== "failed") {
            await new Promise((resolve) => setTimeout(resolve, input.pollingInterval || 1000));
            const retrieveJobResponse = await getInferenceJob.fetch({
                apiKey,
                pathParams: {
                    modelId,
                    inferenceId,
                },
            });
            const json = await retrieveJobResponse.json();
            if (!retrieveJobResponse.ok) {
                const errorData = json;
                return { data: null, error: errorData };
            }
            state = json.state;
            data = json;
        }
        return { data, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.generateImageService = generateImageService;
