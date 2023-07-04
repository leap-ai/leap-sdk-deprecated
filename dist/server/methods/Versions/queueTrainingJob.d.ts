import { LeapVersionSchema } from "../../../types/schemas/Version";
interface IBody {
    webhookUrl?: string;
}
export interface IQueueModelVersionTrainingInput extends IBody {
    modelId: string;
}
export declare const queueModelVersionTrainingService: ({ apiKey, modelId, input, }: {
    apiKey: string;
    modelId: string;
    input: IQueueModelVersionTrainingInput;
}) => Promise<{
    data: Promise<LeapVersionSchema>;
    error: null;
} | {
    data: null;
    error: any;
}>;
export {};
