import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapSampleSchema } from "../../../types/schemas/Sample";

interface IBody {
  images: string[];
}

export interface IUploadImageSamplesInput extends IBody {
  modelId: string;
}

export const uploadImageSamplesService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IUploadImageSamplesInput;
}) => {
  const { uploadSamplesViaUrl } = LeapEndpoints;

  const body: IBody = {
    images: input.images,
  };

  try {
    const response = await uploadSamplesViaUrl.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
      body: JSON.stringify(body),
    });

    const data = (await response.json()) as Promise<LeapSampleSchema[]>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
