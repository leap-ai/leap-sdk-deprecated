import { LeapImageSchema } from "./Image";
export type LeapInferenceSchema = {
    id: string;
    createdAt: string;
    prompt: string;
    seed: number;
    width: number;
    height: number;
    numberOfImages: number;
    state: "queued" | "failed" | "finished" | "processing";
    steps: number;
    images: LeapImageSchema[];
    modelId: string[];
};
