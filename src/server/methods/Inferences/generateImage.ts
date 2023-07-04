import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapInferenceSchema } from "../../../types/schemas/Inference";

interface IGenerateImageBody {
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

export interface IGenerateImageInput extends IGenerateImageBody {
  modelId?: string;
  pollingInterval?: number;
}

export const generateImageService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IGenerateImageInput;
}) => {
  const { createInferenceJob, getInferenceJob } = LeapEndpoints;

  const body: IGenerateImageBody = {
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
    // Submit Job
    const submitJobResponse = await createInferenceJob.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
      body: JSON.stringify(body),
    });

    // Await Data
    const submitJobData =
      (await submitJobResponse.json()) as LeapInferenceSchema;

    if (!submitJobResponse.ok) {
      const errorData = submitJobData as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }

    const inferenceId = submitJobData.id;

    // Poll Status
    let state = "queued";
    let data: null | LeapInferenceSchema = null;

    while (state !== "finished" && state !== "failed") {
      await new Promise((resolve) =>
        setTimeout(resolve, input.pollingInterval || 1000)
      );
      const retrieveJobResponse = await getInferenceJob.fetch({
        apiKey,
        pathParams: {
          modelId,
          inferenceId,
        },
      });

      const json = await retrieveJobResponse.json();
      if (!retrieveJobResponse.ok) {
        const errorData = json as unknown as LeapAPIError;
        return { data: null, error: errorData };
      }

      state = json.state;
      data = json;
    }

    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
