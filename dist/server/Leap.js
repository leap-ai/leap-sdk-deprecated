"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Leap = void 0;
const createInferenceJob_1 = require("./methods/Inferences/createInferenceJob");
const deleteInference_1 = require("./methods/Inferences/deleteInference");
const generateImage_1 = require("./methods/Inferences/generateImage");
const getInferenceJob_1 = require("./methods/Inferences/getInferenceJob");
const listInferenceJobs_1 = require("./methods/Inferences/listInferenceJobs");
const deleteModel_1 = require("./methods/Models/deleteModel");
const getModel_1 = require("./methods/Models/getModel");
const listModels_1 = require("./methods/Models/listModels");
const trainModel_1 = require("./methods/Models/trainModel");
const createMusicInferenceJob_1 = require("./methods/Music/createMusicInferenceJob");
const getMusicInferenceJob_1 = require("./methods/Music/getMusicInferenceJob");
const listMusicInferenceJobs_1 = require("./methods/Music/listMusicInferenceJobs");
// // Throw an error if this is implemented client-side
if (typeof window !== "undefined") {
    throw new Error("Leap SDK is not intended to be used client-side. Please use the Leap SDK in a Node.js environment.");
}
const publicModels = {
    sdxl: "26a1a203-3a46-42cb-8cfa-f4de075907d8",
    "sd-1.5": "8b1b897c-d66d-45a6-b8d7-8e32421d02cf",
    "sd-2.1": "ee88d150-4259-4b77-9d0f-090abe29f650",
    "realistic-vision-v4.0": "37d42ae9-5f5f-4399-b60b-014d35e762a5",
    "realistic-vision-v2.0": "eab32df0-de26-4b83-a908-a83f3015e971",
    "openjourney-v4": "1e7737d7-545e-469f-857f-e4b46eaa151d",
    "openjourney-v2": "d66b1686-5e5d-43b2-a2e7-d295d679917c",
    "openjourney-v1": "7575ea52-3d4f-400f-9ded-09f7b1b1a5b8",
    "future-diffusion": "1285ded4-b11b-4993-a491-d87cdfe6310c",
    "modern-disney": "8ead1e66-5722-4ff6-a13f-b5212f575321",
};
class Leap {
    constructor(apiKey, modelId) {
        /**
         * INTERNAL STATE UTILS
         */
        this.useModel = (modelId) => {
            this.CURRENT_MODEL_ID = publicModels[modelId];
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
            /**
             * Creates a new model. This is the first step in the fine-tuning process.
             *
             * @param input - The input parameters used when creating the model.
             * @returns - The newly created model.
             */
            trainModel: async (input) => {
                return (0, trainModel_1.trainModelService)({
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
        };
        this.music = {
            submitMusicGenerationJob: async (input) => {
                return (0, createMusicInferenceJob_1.createMusicInferenceJobService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
            getMusicGenerationJob: async (input) => {
                return (0, getMusicInferenceJob_1.getMusicInferenceJobService)({
                    apiKey: this.API_KEY,
                    input,
                });
            },
            listMusicGenerationJobs: async () => {
                return (0, listMusicInferenceJobs_1.listMusicInferenceJobService)({
                    apiKey: this.API_KEY,
                });
            },
        };
        this.API_KEY = apiKey;
        this.CURRENT_MODEL_ID = modelId
            ? publicModels[modelId]
            : publicModels["sdxl"];
    }
}
exports.Leap = Leap;
