import { LeapSampleSchema } from "../../../types/schemas/Sample";
interface IBody {
}
export interface IArchiveImageSampleInput extends IBody {
    sampleId: string;
    modelId: string;
}
export declare const archiveImageSampleService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IArchiveImageSampleInput;
}) => Promise<{
    data: Promise<LeapSampleSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};
