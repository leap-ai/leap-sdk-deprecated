"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editImageService = void 0;
const axios_1 = __importDefault(require("axios"));
const endpoints_1 = require("../../constants/endpoints");
const editImageService = async ({ apiConfig, image, params: { prompt, seed, imageGuidanceScale, textGuidanceScale, steps }, }) => {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiConfig.apiKey}`,
    };
    const options = { headers };
    try {
        const formData = new FormData();
        formData.append("files", image);
        formData.append("body", JSON.stringify({ prompt }));
        const editJobResponse = await axios_1.default.post(`${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("editImage", {})}`, formData, options);
        const editId = editJobResponse.data.id;
        //   //TODO: handle error case
        let retrieveJobResponse = await axios_1.default.get(`${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("getEditImage", {
            editId,
        })}`, options);
        let status = retrieveJobResponse.data.status;
        // Poll Status
        while (status !== "finished" && status !== "failed") {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            retrieveJobResponse = await axios_1.default.get(`${apiConfig.hostname + apiConfig.basePath}${(0, endpoints_1.getLeapEndpointPath)("getEditImage", {
                editId,
            })}`, options);
            status = retrieveJobResponse.data.status;
        }
        return { data: retrieveJobResponse, error: null };
    }
    catch (error) {
        return { data: null, error };
    }
};
exports.editImageService = editImageService;
