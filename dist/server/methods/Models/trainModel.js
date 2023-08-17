"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trainModelService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const trainModelService = async ({ apiKey, input, }) => {
    const { trainModel } = endpoints_1.LeapEndpoints;
    const body = {
        name: input.name,
        subjectKeyword: input.subjectKeyword,
        subjectType: input.subjectType,
        webhookUrl: input.webhookUrl,
        ...(input.imageSampleUrls && {
            imageSampleUrls: input.imageSampleUrls,
        }),
        ...(input.imageSampleFiles && {
            imageSampleFiles: input.imageSampleFiles,
        }),
    };
    try {
        const formData = new FormData();
        if (body.name !== undefined) {
            formData.append("name", String(body.name));
        }
        if (body.subjectKeyword !== undefined) {
            formData.append("subjectKeyword", String(body.subjectKeyword));
        }
        if (body.subjectType !== undefined) {
            formData.append("subjectType", String(body.subjectType));
        }
        if (body.webhookUrl !== undefined) {
            formData.append("webhookUrl", String(body.webhookUrl));
        }
        if (body.imageSampleUrls !== undefined) {
            // Loop and append each url to the form data
            for (const url of body.imageSampleUrls) {
                formData.append("imageSampleUrls", String(url));
            }
        }
        if (body.imageSampleFiles !== undefined) {
            // Loop and append each file to the form data
            for (const file of body.imageSampleFiles) {
                formData.append("imageSampleFiles", file.buffer, file.originalname);
            }
        }
        const response = await trainModel.fetch({
            apiKey,
            body: formData,
            isMultiPart: true,
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
exports.trainModelService = trainModelService;
