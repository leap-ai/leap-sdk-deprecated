import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapSampleSchema } from "../../../types/schemas/Sample";

interface IBody {}

export interface IArchiveImageSampleInput extends IBody {
  sampleId: string;
  modelId: string;
}

export const archiveImageSampleService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IArchiveImageSampleInput;
}) => {
  const { archiveSample } = LeapEndpoints;

  try {
    const response = await archiveSample.fetch({
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
