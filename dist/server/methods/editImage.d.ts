import { LeapEditSchema } from "../../types/schemas/Edit";
import { IApiConfig } from "../Leap";
export declare const editImageService: ({ apiConfig, image, params: { prompt, seed, imageGuidanceScale, textGuidanceScale, steps }, }: {
    apiConfig: IApiConfig;
    image: File;
    params: {
        prompt: string;
        seed?: number | undefined;
        imageGuidanceScale?: number | undefined;
        textGuidanceScale?: number | undefined;
        steps?: number | undefined;
    };
}) => Promise<{
    data: import("axios").AxiosResponse<LeapEditSchema, any>;
    error: null;
} | {
    data: null;
    error: unknown;
}>;
