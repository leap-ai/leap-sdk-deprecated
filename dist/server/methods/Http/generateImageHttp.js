"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImageService = void 0;
const endpoints_1 = require("../../../constants/endpoints");
const makeRequest_1 = require("../../makeRequest");
const generateImageService = async ({ apiConfig, modelId, prompt, }) => {
    const postData = JSON.stringify({
        prompt,
        steps: 50,
        width: 512,
        height: 512,
        numberOfImages: 1,
    });
    console.log("pre Submit");
    const submitJobResponse = await (0, makeRequest_1.makeRequest)({
        apiConfig,
        endpointUrl: (0, endpoints_1.getLeapEndpointPath)("createInferenceJob", {
            modelId,
        }),
        postData,
    });
    console.log({ submitJobResponse });
    const inferenceId = submitJobResponse.id;
    console.log("post Submit", inferenceId);
    let retrieveJobResponse = await (0, makeRequest_1.makeRequest)({
        apiConfig,
        endpointUrl: (0, endpoints_1.getLeapEndpointPath)("getInferenceJob", {
            modelId,
            inferenceId,
        }),
    });
    let status = retrieveJobResponse.state;
    return;
    // Poll Status
    while (status !== "finished" && status !== "failed") {
        console.log("Poll");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        retrieveJobResponse = await (0, makeRequest_1.makeRequest)({
            apiConfig,
            endpointUrl: (0, endpoints_1.getLeapEndpointPath)("getInferenceJob", {
                modelId,
                inferenceId,
            }),
        });
        status = retrieveJobResponse.state;
    }
    return retrieveJobResponse;
};
exports.generateImageService = generateImageService;
