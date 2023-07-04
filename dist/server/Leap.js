"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leap = void 0;
const createEditJob_1 = require("./methods/Edits/createEditJob");
const editImage_1 = require("./methods/Edits/editImage");
const getEditJob_1 = require("./methods/Edits/getEditJob");
const createInferenceJob_1 = require("./methods/Inferences/createInferenceJob");
const deleteInference_1 = require("./methods/Inferences/deleteInference");
const generateImage_1 = require("./methods/Inferences/generateImage");
const getInferenceJob_1 = require("./methods/Inferences/getInferenceJob");
const listInferenceJobs_1 = require("./methods/Inferences/listInferenceJobs");
const createModel_1 = require("./methods/Models/createModel");
const deleteModel_1 = require("./methods/Models/deleteModel");
const getModel_1 = require("./methods/Models/getModel");
const listModels_1 = require("./methods/Models/listModels");
const archiveImageSample_1 = require("./methods/Samples/archiveImageSample");
const getImageSample_1 = require("./methods/Samples/getImageSample");
const listImageSamples_1 = require("./methods/Samples/listImageSamples");
const uploadImageSamples_1 = require("./methods/Samples/uploadImageSamples");
const getModelVersion_1 = require("./methods/Versions/getModelVersion");
const listModelVersions_1 = require("./methods/Versions/listModelVersions");
const queueTrainingJob_1 = require("./methods/Versions/queueTrainingJob");
// // Throw an error if this is implemented client-side
if (typeof window !== "undefined") {
    throw new Error("Leap SDK is not intended to be used client-side. Please use the Leap SDK in a Node.js environment.");
}
class Leap {
    constructor(apiKey, modelId) {
        /**
         * INTERNAL STATE UTILS
         */
        this.useModel = (modelId) => {
            this.CURRENT_MODEL_ID = modelId;
        };
        this.usePublicModel = (modelKey) => {
            const publicModels = {
                "sd-1.5": "8b1b897c-d66d-45a6-b8d7-8e32421d02cf",
                "future-diffusion": "1285ded4-b11b-4993-a491-d87cdfe6310c",
            };
            this.CURRENT_MODEL_ID = publicModels[modelKey];
        };
        /**
         * GENERATE
         */
        // Inferences
        this.generate = {
            generateImage: async (input) => {
                return (0, generateImage_1.generateImageService)({
                    apiKey: this.API_KEY,
                    modelId: input.modelId || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            createInferenceJob: async (input) => {
                return (0, createInferenceJob_1.createInferenceJobService)({
                    apiKey: this.API_KEY,
                    modelId: input.modelId || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            getInferenceJob: async (input) => {
                return (0, getInferenceJob_1.getInferenceJobService)({
                    apiKey: this.API_KEY,
                    modelId: input.modelId || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            listInferenceJobs: async (input) => {
                return (0, listInferenceJobs_1.listInferenceJobService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                });
            },
            deleteInference: async (input) => {
                return (0, deleteInference_1.deleteInferenceService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
        };
        /**
         * FINE-TUNE
         */
        this.fineTune = {
            // Models
            createModel: async (input) => {
                return (0, createModel_1.createModelService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
            listModels: async () => {
                return (0, listModels_1.listModelService)({
                    apiKey: this.API_KEY,
                });
            },
            getModel: async (input) => {
                return (0, getModel_1.getModelService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                });
            },
            deleteModel: async (input) => {
                return (0, deleteModel_1.deleteModelService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                });
            },
            // Samples
            uploadImageSamples: async (input) => {
                return (0, uploadImageSamples_1.uploadImageSamplesService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            listImageSamples: async (input) => {
                return (0, listImageSamples_1.listImageSamplesService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            getImageSample: async (input) => {
                return (0, getImageSample_1.getImageSampleService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            archiveImageSample: async (input) => {
                return (0, archiveImageSample_1.archiveImageSampleService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            // Versions
            queueTrainingJob: async (input) => {
                return (0, queueTrainingJob_1.queueModelVersionTrainingService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            getModelVersion: async (input) => {
                return (0, getModelVersion_1.getModelVersionService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                    input,
                });
            },
            listModelVersions: async (input) => {
                return (0, listModelVersions_1.listModelVersionsService)({
                    apiKey: this.API_KEY,
                    modelId: (input === null || input === void 0 ? void 0 : input.modelId) || this.CURRENT_MODEL_ID,
                });
            },
        };
        /**
         * EDIT
         */
        this.edit = {
            editImage: async (input) => {
                return (0, editImage_1.editImageService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
            createEditJob: async (input) => {
                return (0, createEditJob_1.createEditJobService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
            getEditJob: async (input) => {
                return (0, getEditJob_1.getEditJobService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
        };
        this.API_KEY = apiKey;
        this.CURRENT_MODEL_ID = modelId || "8b1b897c-d66d-45a6-b8d7-8e32421d02cf";
    }
}
exports.Leap = Leap;
