import FormData from "form-data";
import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapEditSchema } from "../../../types/schemas/Edit";

export interface ICreateEditJobInput {
  file: Express.Multer.File;
  prompt: string;
  imageGuidanceScale?: number;
  textGuidanceScale?: number;
  steps?: number;
  seed?: number;
  webhookUrl?: string;
}

export interface ICreateEditJobServiceInput {
  apiKey: string;
  input: ICreateEditJobInput;
}

export interface ICreateEditJobServiceResponse {
  data: LeapEditSchema | null;
  error: LeapAPIError | string | null;
}

const { createEditJob } = LeapEndpoints;

export const createEditJobService = async ({
  apiKey,
  input: {
    file,
    prompt,
    imageGuidanceScale,
    textGuidanceScale,
    steps,
    seed,
    webhookUrl,
  },
}: ICreateEditJobServiceInput): Promise<ICreateEditJobServiceResponse> => {
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
    const data = (await response.json()) as LeapEditSchema;

    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }

    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
