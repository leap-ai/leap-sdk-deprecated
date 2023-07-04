import { LeapSampleSchema } from "../../../types/schemas/Sample";
interface IBody {
}
export interface IGetImageSampleInput extends IBody {
    modelId: string;
    sampleId: string;
}
export declare const getImageSampleService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IGetImageSampleInput;
}) => Promise<{
    data: Promise<LeapSampleSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};
