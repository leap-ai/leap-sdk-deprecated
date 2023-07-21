import {
  createEditJobService,
  ICreateEditJobInput,
} from "./methods/Edits/createEditJob";
import { editImageService, IEditImageInput } from "./methods/Edits/editImage";
import {
  getEditJobService,
  IGetEditJobInput,
} from "./methods/Edits/getEditJob";
import {
  createInferenceJobService,
  ICreateInferenceJobInput,
} from "./methods/Inferences/createInferenceJob";
import {
  deleteInferenceService,
  IDeleteInferenceInput,
} from "./methods/Inferences/deleteInference";
import {
  generateImageService,
  IGenerateImageInput,
} from "./methods/Inferences/generateImage";
import {
  getInferenceJobService,
  IGetInferenceJobInput,
} from "./methods/Inferences/getInferenceJob";
import {
  IListInferenceJobsInput,
  listInferenceJobService,
} from "./methods/Inferences/listInferenceJobs";
import {
  createModelService,
  ICreateModelInput,
} from "./methods/Models/createModel";
import {
  deleteModelService,
  IDeleteModelInput,
} from "./methods/Models/deleteModel";
import { getModelService, IGetModelInput } from "./methods/Models/getModel";
import { listModelService } from "./methods/Models/listModels";
import {
  createMusicInferenceJobService,
  ICreateMusicInferenceJobInput,
} from "./methods/Music/createMusicInferenceJob";
import {
  getMusicInferenceJobService,
  IGetMusicInferenceJobInput,
} from "./methods/Music/getMusicInferenceJob";
import { listMusicInferenceJobService } from "./methods/Music/listMusicInferenceJobs";
import {
  archiveImageSampleService,
  IArchiveImageSampleInput,
} from "./methods/Samples/archiveImageSample";
import {
  getImageSampleService,
  IGetImageSampleInput,
} from "./methods/Samples/getImageSample";
import {
  IListImageSamplesInput,
  listImageSamplesService,
} from "./methods/Samples/listImageSamples";
import {
  IUploadImageSamplesInput,
  uploadImageSamplesService,
} from "./methods/Samples/uploadImageSamples";
import {
  getModelVersionService,
  IGetModelVersionInput,
} from "./methods/Versions/getModelVersion";
import {
  IListModelVersionsInput,
  listModelVersionsService,
} from "./methods/Versions/listModelVersions";
import {
  IQueueModelVersionTrainingInput,
  queueModelVersionTrainingService,
} from "./methods/Versions/queueTrainingJob";

// // Throw an error if this is implemented client-side
if (typeof window !== "undefined") {
  throw new Error(
    "Leap SDK is not intended to be used client-side. Please use the Leap SDK in a Node.js environment."
  );
}

export class Leap {
  private CURRENT_MODEL_ID: string;
  private API_KEY: string;

  constructor(apiKey: string, modelId?: string) {
    this.API_KEY = apiKey;
    this.CURRENT_MODEL_ID = modelId || "8b1b897c-d66d-45a6-b8d7-8e32421d02cf";
  }

  /**
   * INTERNAL STATE UTILS
   */

  public useModel = (modelId: string) => {
    this.CURRENT_MODEL_ID = modelId;
  };

  public usePublicModel = (modelKey: "sd-1.5" | "future-diffusion") => {
    const publicModels = {
      "sd-1.5": "8b1b897c-d66d-45a6-b8d7-8e32421d02cf",
      "future-diffusion": "1285ded4-b11b-4993-a491-d87cdfe6310c",
    };

    this.CURRENT_MODEL_ID = publicModels[modelKey];
  };

  /**
   * GENERATE
   */

  // Inferences
  public generate = {
    generateImage: async (input: IGenerateImageInput) => {
      return generateImageService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    createInferenceJob: async (input: ICreateInferenceJobInput) => {
      return createInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    getInferenceJob: async (input: IGetInferenceJobInput) => {
      return getInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    listInferenceJobs: async (input?: IListInferenceJobsInput) => {
      return listInferenceJobService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
    deleteInference: async (input: IDeleteInferenceInput) => {
      return deleteInferenceService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
  };

  /**
   * FINE-TUNE
   */
  public fineTune = {
    // Models
    /**
     * Creates a new model. This is the first step in the fine-tuning process.
     *
     * @param input - The input parameters used when creating the model.
     * @returns - The newly created model.
     */
    createModel: async (input: ICreateModelInput) => {
      return createModelService({
        apiKey: this.API_KEY,
        input,
      });
    },
    listModels: async () => {
      return listModelService({
        apiKey: this.API_KEY,
      });
    },
    getModel: async (input: IGetModelInput) => {
      return getModelService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
    deleteModel: async (input: IDeleteModelInput) => {
      return deleteModelService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },

    // Samples
    uploadImageSamples: async (input: IUploadImageSamplesInput) => {
      return uploadImageSamplesService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    listImageSamples: async (input: IListImageSamplesInput) => {
      return listImageSamplesService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    getImageSample: async (input: IGetImageSampleInput) => {
      return getImageSampleService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    archiveImageSample: async (input: IArchiveImageSampleInput) => {
      return archiveImageSampleService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },

    // Versions
    queueTrainingJob: async (input: IQueueModelVersionTrainingInput) => {
      return queueModelVersionTrainingService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    getModelVersion: async (input: IGetModelVersionInput) => {
      return getModelVersionService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
        input,
      });
    },
    listModelVersions: async (input: IListModelVersionsInput) => {
      return listModelVersionsService({
        apiKey: this.API_KEY,
        modelId: input?.modelId || this.CURRENT_MODEL_ID,
      });
    },
  };

  /**
   * EDIT
   */
  public edit = {
    editImage: async (input: IEditImageInput) => {
      return editImageService({
        apiKey: this.API_KEY,
        input,
      });
    },
    createEditJob: async (input: ICreateEditJobInput) => {
      return createEditJobService({
        apiKey: this.API_KEY,
        input,
      });
    },
    getEditJob: async (input: IGetEditJobInput) => {
      return getEditJobService({
        apiKey: this.API_KEY,
        input,
      });
    },
  };

  public music = {
    submitMusicGenerationJob: async (input: ICreateMusicInferenceJobInput) => {
      return createMusicInferenceJobService({
        apiKey: this.API_KEY,
        input,
      });
    },

    getMusicGenerationJob: async (input: IGetMusicInferenceJobInput) => {
      return getMusicInferenceJobService({
        apiKey: this.API_KEY,
        input,
      });
    },

    listMusicGenerationJobs: async () => {
      return listMusicInferenceJobService({
        apiKey: this.API_KEY,
      });
    },
  };
}
