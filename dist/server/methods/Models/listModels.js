"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModelService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const listModelService = async ({ apiKey }) => {
    const { listModels } = endpoints_1.LeapEndpoints;
    try {
        const response = await listModels.fetch({
            apiKey,
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
exports.listModelService = listModelService;
