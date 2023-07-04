"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModelService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const deleteModelService = async ({ apiKey, modelId, }) => {
    const { deleteModel } = endpoints_1.LeapEndpoints;
    try {
        const response = await deleteModel.fetch({
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
exports.deleteModelService = deleteModelService;
