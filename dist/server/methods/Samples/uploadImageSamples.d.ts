import { LeapSampleSchema } from "../../../types/schemas/Sample";
interface IBody {
    images: string[];
}
export interface IUploadImageSamplesInput extends IBody {
    modelId: string;
}
export declare const uploadImageSamplesService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IUploadImageSamplesInput;
}) => Promise<{
    data: Promise<LeapSampleSchema[]>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};
