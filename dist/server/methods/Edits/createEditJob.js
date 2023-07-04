"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEditJobService = void 0;
const form_data_1 = __importDefault(require("form-data"));
const endpoints_1 = require("../../../constants/endpoints");
const { createEditJob } = endpoints_1.LeapEndpoints;
const createEditJobService = async ({ apiKey, input: { file, prompt, imageGuidanceScale, textGuidanceScale, steps, seed, webhookUrl, }, }) => {
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
exports.createEditJobService = createEditJobService;
