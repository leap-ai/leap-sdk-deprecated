export type LeapEditSchema = {
    projectId: string;
    sourceImageUri: string;
    editedImageUri: string;
    id: string;
    prompt: string;
    status: string;
    createdAt: string;
    imageGuidanceScale: number;
    textGuidanceScale: number;
    steps: number;
};
