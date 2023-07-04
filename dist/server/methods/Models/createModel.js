"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const createModelService = async ({ apiKey, input, }) => {
    const { createModel } = endpoints_1.LeapEndpoints;
    const body = {
        title: input.title,
        subjectKeyword: input.subjectKeyword,
        subjectIdentifier: input.subjectIdentifier,
    };
    try {
        const response = await createModel.fetch({
            apiKey,
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
exports.createModelService = createModelService;
