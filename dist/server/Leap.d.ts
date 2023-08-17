import { ICreateInferenceJobInput } from "./methods/Inferences/createInferenceJob";
import { IDeleteInferenceInput } from "./methods/Inferences/deleteInference";
import { IGenerateImageInput } from "./methods/Inferences/generateImage";
import { IGetInferenceJobInput } from "./methods/Inferences/getInferenceJob";
import { IListInferenceJobsInput } from "./methods/Inferences/listInferenceJobs";
import { IDeleteModelInput } from "./methods/Models/deleteModel";
import { IGetModelInput } from "./methods/Models/getModel";
import { ITrainModelInput } from "./methods/Models/trainModel";
import { ICreateMusicInferenceJobInput } from "./methods/Music/createMusicInferenceJob";
import { IGetMusicInferenceJobInput } from "./methods/Music/getMusicInferenceJob";
declare const publicModels: {
    sdxl: string;
    "sd-1.5": string;
    "sd-2.1": string;
    "realistic-vision-v4.0": string;
    "realistic-vision-v2.0": string;
    "openjourney-v4": string;
    "openjourney-v2": string;
    "openjourney-v1": string;
    "future-diffusion": string;
    "modern-disney": string;
};
export declare class Leap {
    private API_KEY;
    private CURRENT_MODEL_ID;
    constructor(apiKey: string, modelId?: keyof typeof publicModels);
    /**
     * INTERNAL STATE UTILS
     */
    useModel: (modelId: keyof typeof publicModels) => void;
    /**
     * GENERATE
     */
    generate: {
        generateImage: (input: IGenerateImageInput) => Promise<{
            data: import("../types/schemas/Inference").LeapInferenceSchema | null;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        createInferenceJob: (input: ICreateInferenceJobInput) => Promise<{
            data: import("../types/schemas/Inference").LeapInferenceSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getInferenceJob: (input: IGetInferenceJobInput) => Promise<{
            data: import("../types/schemas/Inference").LeapInferenceSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listInferenceJobs: (input?: IListInferenceJobsInput) => Promise<{
            data: import("../types/schemas/Inference").LeapInferenceSchema[];
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        deleteInference: (input: IDeleteInferenceInput) => Promise<{
            data: import("../types/schemas/Inference").LeapInferenceSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
    };
    /**
     * FINE-TUNE
     */
    fineTune: {
        /**
         * Creates a new model. This is the first step in the fine-tuning process.
         *
         * @param input - The input parameters used when creating the model.
         * @returns - The newly created model.
         */
        trainModel: (input: ITrainModelInput) => Promise<{
            data: import("../types/schemas/Model").LeapModelSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listModels: () => Promise<{
            data: import("../types/schemas/Model").LeapModelSchema[];
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getModel: (input: IGetModelInput) => Promise<{
            data: import("../types/schemas/Model").LeapModelSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        deleteModel: (input: IDeleteModelInput) => Promise<{
            data: import("../types/schemas/Model").LeapModelSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
    };
    music: {
        submitMusicGenerationJob: (input: ICreateMusicInferenceJobInput) => Promise<{
            data: import("../types/schemas/Music").LeapMusicSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getMusicGenerationJob: (input: IGetMusicInferenceJobInput) => Promise<{
            data: import("../types/schemas/Music").LeapMusicSchema;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listMusicGenerationJobs: () => Promise<{
            data: import("../types/schemas/Music").LeapMusicSchema[];
            error: null;
        } | {
            data: null;
            error: any;
        }>;
    };
}
export {};
