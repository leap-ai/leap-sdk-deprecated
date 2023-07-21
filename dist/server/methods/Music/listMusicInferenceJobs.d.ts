import { LeapMusicSchema } from "../../../types/schemas/Music";
export declare const listMusicInferenceJobService: ({ apiKey, }: {
    apiKey: string;
}) => Promise<{
    data: LeapMusicSchema[];
    error: null;
} | {
    data: null;
    error: any;
}>;
