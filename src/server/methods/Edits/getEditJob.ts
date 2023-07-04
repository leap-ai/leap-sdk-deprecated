import { LeapEndpoints } from "../../../constants/endpoints";
import { LeapAPIError } from "../../../types/Error";
import { LeapVersionSchema } from "../../../types/schemas/Version";

export interface IGetEditJobInput {
  editId: string;
}

export const getEditJobService = async ({
  apiKey,
  input,
}: {
  apiKey: string;
  input: IGetEditJobInput;
}) => {
  const { getEditJob } = LeapEndpoints;

  try {
    const response = await getEditJob.fetch({
      apiKey,
      pathParams: {
        editId: input.editId,
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
