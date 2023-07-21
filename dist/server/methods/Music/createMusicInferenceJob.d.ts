import { LeapMusicSchema } from "../../../types/schemas/Music";
export interface ICreateMusicInferenceJobBody {
    prompt: string;
    duration?: number;
}
export interface ICreateMusicInferenceJobInput extends ICreateMusicInferenceJobBody {
}
export declare const createMusicInferenceJobService: ({ apiKey, input, }: {
    apiKey: string;
    input: ICreateMusicInferenceJobInput;
}) => Promise<{
    data: LeapMusicSchema;
    error: null;
} | {
    data: null;
    error: any;
}>;
