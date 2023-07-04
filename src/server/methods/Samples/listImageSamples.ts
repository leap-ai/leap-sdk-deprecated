import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapSampleSchema } from "../../../types/schemas/Sample";

interface IBody {}

export interface IListImageSamplesInput extends IBody {
  modelId: string;
}

export const listImageSamplesService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IListImageSamplesInput;
}) => {
  const { listModelSamples } = LeapEndpoints;

  try {
    const response = await listModelSamples.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
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
