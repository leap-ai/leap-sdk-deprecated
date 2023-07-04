import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapModelSchema } from "../../../types/schemas/Model";

interface IBody {}

export interface IDeleteModelInput extends IBody {
  modelId: string;
}

export const deleteModelService = async ({
  apiKey,
  modelId,
}: {
  apiKey: string;
  modelId: string;
}) => {
  const { deleteModel } = LeapEndpoints;

  try {
    const response = await deleteModel.fetch({
      apiKey,
      pathParams: {
        modelId,
      },
    });

    const data = (await response.json()) as Promise<LeapModelSchema>;
    if (!response.ok) {
      const errorData = data as unknown as LeapAPIError;
      return { data: null, error: errorData };
    }
    return { data, error: null };
  } catch (error: any) {
    return { data: null, error: error.message };
  }
};
