"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueModelVersionTrainingService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const queueModelVersionTrainingService = async ({ apiKey, modelId, input, }) => {
    const { queueModelVersionTraining } = endpoints_1.LeapEndpoints;
    const body = {
        webhookUrl: input.webhookUrl,
    };
    try {
        const response = await queueModelVersionTraining.fetch({
            apiKey,
            pathParams: {
                modelId,
            },
            body: JSON.stringify(body),
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
exports.queueModelVersionTrainingService = queueModelVersionTrainingService;
