"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditJobService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const getEditJobService = async ({ apiKey, input, }) => {
    const { getEditJob } = endpoints_1.LeapEndpoints;
    try {
        const response = await getEditJob.fetch({
            apiKey,
            pathParams: {
                editId: input.editId,
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
exports.getEditJobService = getEditJobService;
