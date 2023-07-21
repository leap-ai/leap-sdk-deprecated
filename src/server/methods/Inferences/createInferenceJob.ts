import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapInferenceSchema } from "../../../types/schemas/Inference";

export interface ICreateInferenceJobBody {
  prompt: string;
  negativePrompt?: string;
  version?: string;
  steps?: number;
  width?: number;
  height?: number;
  numberOfImages?: number;
  promptStrength?: number;
  seed?: number;
  webhookUrl?: string;
  restoreFaces?: boolean;
  enhancePrompt?: boolean;
  upscaleBy?: "x1" | "x2" | "x4";
}

export interface ICreateInferenceJobInput extends ICreateInferenceJobBody {
  modelId?: string;
}

export const createInferenceJobService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: ICreateInferenceJobInput;
}) => {
  const { createInferenceJob } = LeapEndpoints;

  const body: ICreateInferenceJobBody = {
    prompt: input.prompt,
    negativePrompt: input.negativePrompt,
    version: input.version,
    steps: input.steps,
    width: input.width,
    height: input.height,
    numberOfImages: input.numberOfImages,
    promptStrength: input.promptStrength,
    seed: input.seed,
    webhookUrl: input.webhookUrl,
    restoreFaces: input.restoreFaces || false,
    enhancePrompt: input.enhancePrompt || false,
    upscaleBy: input.upscaleBy || "x1",
  };

  try {
    const response = await createInferenceJob.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
      body: JSON.stringify(body),
    });

    let responseJson = await response.json();
    const data = responseJson as LeapInferenceSchema;

    if (!response.ok) {
      return { data: null, error: response.statusText };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
