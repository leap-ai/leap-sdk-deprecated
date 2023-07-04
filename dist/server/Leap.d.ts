import { ICreateEditJobInput } from "./methods/Edits/createEditJob";
import { IEditImageInput } from "./methods/Edits/editImage";
import { IGetEditJobInput } from "./methods/Edits/getEditJob";
import { ICreateInferenceJobInput } from "./methods/Inferences/createInferenceJob";
import { IDeleteInferenceInput } from "./methods/Inferences/deleteInference";
import { IGenerateImageInput } from "./methods/Inferences/generateImage";
import { IGetInferenceJobInput } from "./methods/Inferences/getInferenceJob";
import { IListInferenceJobsInput } from "./methods/Inferences/listInferenceJobs";
import { ICreateModelInput } from "./methods/Models/createModel";
import { IDeleteModelInput } from "./methods/Models/deleteModel";
import { IGetModelInput } from "./methods/Models/getModel";
import { IArchiveImageSampleInput } from "./methods/Samples/archiveImageSample";
import { IGetImageSampleInput } from "./methods/Samples/getImageSample";
import { IListImageSamplesInput } from "./methods/Samples/listImageSamples";
import { IUploadImageSamplesInput } from "./methods/Samples/uploadImageSamples";
import { IGetModelVersionInput } from "./methods/Versions/getModelVersion";
import { IListModelVersionsInput } from "./methods/Versions/listModelVersions";
import { IQueueModelVersionTrainingInput } from "./methods/Versions/queueTrainingJob";
export declare class Leap {
    private CURRENT_MODEL_ID;
    private API_KEY;
    constructor(apiKey: string, modelId?: string);
    /**
     * INTERNAL STATE UTILS
     */
    useModel: (modelId: string) => void;
    usePublicModel: (modelKey: "sd-1.5" | "future-diffusion") => void;
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
            data: Promise<import("../types/schemas/Inference").LeapInferenceSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getInferenceJob: (input: IGetInferenceJobInput) => Promise<{
            data: Promise<import("../types/schemas/Inference").LeapInferenceSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listInferenceJobs: (input?: IListInferenceJobsInput) => Promise<{
            data: Promise<import("../types/schemas/Inference").LeapInferenceSchema[]>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        deleteInference: (input: IDeleteInferenceInput) => Promise<{
            data: Promise<import("../types/schemas/Inference").LeapInferenceSchema>;
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
        createModel: (input: ICreateModelInput) => Promise<{
            data: Promise<import("../types/schemas/Model").LeapModelSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listModels: () => Promise<{
            data: Promise<import("../types/schemas/Model").LeapModelSchema[]>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getModel: (input: IGetModelInput) => Promise<{
            data: Promise<import("../types/schemas/Model").LeapModelSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        deleteModel: (input: IDeleteModelInput) => Promise<{
            data: Promise<import("../types/schemas/Model").LeapModelSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        uploadImageSamples: (input: IUploadImageSamplesInput) => Promise<{
            data: Promise<import("../types/schemas/Sample").LeapSampleSchema[]>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listImageSamples: (input: IListImageSamplesInput) => Promise<{
            data: Promise<import("../types/schemas/Sample").LeapSampleSchema[]>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getImageSample: (input: IGetImageSampleInput) => Promise<{
            data: Promise<import("../types/schemas/Sample").LeapSampleSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        archiveImageSample: (input: IArchiveImageSampleInput) => Promise<{
            data: Promise<import("../types/schemas/Sample").LeapSampleSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        queueTrainingJob: (input: IQueueModelVersionTrainingInput) => Promise<{
            data: Promise<import("../types/schemas/Version").LeapVersionSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        getModelVersion: (input: IGetModelVersionInput) => Promise<{
            data: Promise<import("../types/schemas/Version").LeapVersionSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
        listModelVersions: (input: IListModelVersionsInput) => Promise<{
            data: Promise<import("../types/schemas/Version").LeapVersionSchema[]>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
    };
    /**
     * EDIT
     */
    edit: {
        editImage: (input: IEditImageInput) => Promise<import("./methods/Edits/editImage").IEditImageServiceResponse>;
        createEditJob: (input: ICreateEditJobInput) => Promise<import("./methods/Edits/createEditJob").ICreateEditJobServiceResponse>;
        getEditJob: (input: IGetEditJobInput) => Promise<{
            data: Promise<import("../types/schemas/Version").LeapVersionSchema>;
            error: null;
        } | {
            data: null;
            error: any;
        }>;
    };
}
