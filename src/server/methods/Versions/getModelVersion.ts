import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";
import { LeapVersionSchema } from "../../../types/schemas/Version";

interface IBody {}

export interface IGetModelVersionInput extends IBody {
  modelId: string;
  versionId: string;
}

export const getModelVersionService = async ({
  apiKey,
  modelId,
  input,
}: {
  apiKey: string;
  modelId: string;
  input: IGetModelVersionInput;
}) => {
  const { getModelVersion } = LeapEndpoints;

  try {
    const response = await getModelVersion.fetch({
      apiKey,
      pathParams: {
        modelId,
        versionId: input.versionId,
      },
    });

    const data = (await response.json()) as Promise<LeapVersionSchema>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
