import { LeapMusicSchema } from "../../../types/schemas/Music";
export interface IGetMusicInferenceJobInput {
    inferenceId: string;
}
export declare const getMusicInferenceJobService: ({ apiKey, input, }: {
    apiKey: string;
    input: IGetMusicInferenceJobInput;
}) => Promise<{
    data: LeapMusicSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;
