import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapSampleSchema } from "../../../types/schemas/Sample";

interface IBody {}

export interface IGetImageSampleInput extends IBody {
  modelId: string;
  sampleId: string;
}

export const getImageSampleService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IGetImageSampleInput;
}) => {
  const { getSingleSample } = LeapEndpoints;

  console.log({
    modelId: input.modelId,
    sampleId: input.sampleId,
  });

  try {
    const response = await getSingleSample.fetch({
      apiKey,
      pathParams: {
        modelId,
        sampleId: input.sampleId,
      },
    });

    const data = (await response.json()) as Promise<LeapSampleSchema>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
