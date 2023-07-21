"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMusicInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const getMusicInferenceJobService = async ({ apiKey, input, }) => {
    const { getSingleMusicInferenceJob } = endpoints_1.LeapEndpoints;
    try {
        const response = await getSingleMusicInferenceJob.fetch({
            apiKey,
            pathParams: {
                inferenceId: input.inferenceId,
            },
        });
        let responseJson = await response.json();
        const data = responseJson;
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
exports.getMusicInferenceJobService = getMusicInferenceJobService;
