import { LeapVersionSchema } from "../../../types/schemas/Version";
interface IBody {
}
export interface IGetModelVersionInput extends IBody {
    modelId: string;
    versionId: string;
}
export declare const getModelVersionService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IGetModelVersionInput;
}) => Promise<{
    data: Promise<LeapVersionSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};
