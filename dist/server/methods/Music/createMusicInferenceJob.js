"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMusicInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const createMusicInferenceJobService = async ({ apiKey, input, }) => {
    const { createMusicInferenceJob } = endpoints_1.LeapEndpoints;
    const body = {
        prompt: input.prompt,
        duration: input.duration,
    };
    try {
        const response = await createMusicInferenceJob.fetch({
            apiKey,
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
exports.createMusicInferenceJobService = createMusicInferenceJobService;
