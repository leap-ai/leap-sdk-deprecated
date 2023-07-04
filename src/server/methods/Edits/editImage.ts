import FormData from "form-data";
import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapEditSchema } from "../../../types/schemas/Edit";

export interface IEditImageInput {
  file: Express.Multer.File;
  prompt: string;
  imageGuidanceScale?: number;
  textGuidanceScale?: number;
  steps?: number;
  seed?: number;
  webhookUrl?: string;
  pollingInterval?: number;
}

export interface IEditImageServiceInput {
  apiKey: string;
  input: IEditImageInput;
}

export interface IEditImageServiceResponse {
  data: LeapEditSchema | null;
  error: LeapAPIError | string | null;
}

const { createEditJob, getEditJob } = LeapEndpoints;
const DEFAULT_POLLING_INTERVAL = 1000;

export const editImageService = async ({
  apiKey,
  input: {
    file,
    prompt,
    imageGuidanceScale,
    textGuidanceScale,
    steps,
    seed,
    webhookUrl,
    pollingInterval = DEFAULT_POLLING_INTERVAL,
  },
}: IEditImageServiceInput): Promise<IEditImageServiceResponse> => {
  try {
    const formData = new FormData();
    formData.append("files", file.buffer, file.originalname);
    formData.append("prompt", prompt);

    if (imageGuidanceScale !== undefined) {
      formData.append("imageGuidanceScale", String(imageGuidanceScale));
    }
    if (textGuidanceScale !== undefined) {
      formData.append("textGuidanceScale", String(textGuidanceScale));
    }
    if (steps !== undefined) {
      formData.append("steps", String(steps));
    }
    if (seed !== undefined) {
      formData.append("seed", String(seed));
    }
    if (webhookUrl) {
      formData.append("webhookUrl", webhookUrl);
    }

    const response = await createEditJob.fetch({
      apiKey,
      body: formData,
      isMultiPart: true,
    });

    const editData = (await response.json()) as LeapEditSchema;

    if (!response.ok) {
      const errorData = editData as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }

    const editId = editData.id;

    let state = "queued";
    let getResponseData: LeapEditSchema | null = null;

    while (state !== "finished" && state !== "failed") {
      await new Promise((resolve) => setTimeout(resolve, pollingInterval));
      const retrieveJobResponse = await getEditJob.fetch({
        apiKey,
        pathParams: { editId },
      });

      const retrieveJobData =
        (await retrieveJobResponse.json()) as LeapEditSchema;

      if (!retrieveJobResponse.ok) {
        const errorData = retrieveJobData as unknown as LeapAPIError;
        return { data: null, error: errorData };
      }

      state = retrieveJobData.status;
      getResponseData = retrieveJobData;
    }

    return { data: getResponseData, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
