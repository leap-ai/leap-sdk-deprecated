"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editImageService = void 0;
const form_data_1 = __importDefault(require("form-data"));
const endpoints_1 = require("../../../constants/endpoints");
const { createEditJob, getEditJob } = endpoints_1.LeapEndpoints;
const DEFAULT_POLLING_INTERVAL = 1000;
const editImageService = async ({ apiKey, input: { file, prompt, imageGuidanceScale, textGuidanceScale, steps, seed, webhookUrl, pollingInterval = DEFAULT_POLLING_INTERVAL, }, }) => {
    try {
        const formData = new form_data_1.default();
        formData.append("files", file.buffer, file.originalname);
        formData.append("prompt", prompt);
        if (imageGuidanceScale !== undefined) {
            formData.append("imageGuidanceScale", String(imageGuidanceScale));
        }
        if (textGuidanceScale !== undefined) {
            formData.append("textGuidanceScale", String(textGuidanceScale));
        }
        if (steps !== undefined) {
            formData.append("steps", String(steps));
        }
        if (seed !== undefined) {
            formData.append("seed", String(seed));
        }
        if (webhookUrl) {
            formData.append("webhookUrl", webhookUrl);
        }
        const response = await createEditJob.fetch({
            apiKey,
            body: formData,
            isMultiPart: true,
        });
        const editData = (await response.json());
        if (!response.ok) {
            const errorData = editData;
            return { data: null, error: errorData };
        }
        const editId = editData.id;
        let state = "queued";
        let getResponseData = null;
        while (state !== "finished" && state !== "failed") {
            await new Promise((resolve) => setTimeout(resolve, pollingInterval));
            const retrieveJobResponse = await getEditJob.fetch({
                apiKey,
                pathParams: { editId },
            });
            const retrieveJobData = (await retrieveJobResponse.json());
            if (!retrieveJobResponse.ok) {
                const errorData = retrieveJobData;
                return { data: null, error: errorData };
            }
            state = retrieveJobData.status;
            getResponseData = retrieveJobData;
        }
        return { data: getResponseData, error: null };
    }
    catch (error) {
        return { data: null, error: error.message };
    }
};
exports.editImageService = editImageService;
