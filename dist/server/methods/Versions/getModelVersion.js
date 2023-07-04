"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModelVersionService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const getModelVersionService = async ({ apiKey, modelId, input, }) => {
    const { getModelVersion } = endpoints_1.LeapEndpoints;
    try {
        const response = await getModelVersion.fetch({
            apiKey,
            pathParams: {
                modelId,
                versionId: input.versionId,
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
exports.getModelVersionService = getModelVersionService;
