"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listMusicInferenceJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const listMusicInferenceJobService = async ({ apiKey, }) => {
    const { getMusicInferenceJobs } = endpoints_1.LeapEndpoints;
    try {
        const response = await getMusicInferenceJobs.fetch({
            apiKey,
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
exports.listMusicInferenceJobService = listMusicInferenceJobService;
