// Equivalent to the Leap Training Job
export type LeapVersionSchema = {
  id: string;
  createdAt: string;
  status: "queued" | "failed" | "finished" | "processing";
  model: {
    id: string;
    title: string;
    subjectKeyword: string;
    subjectIdentifier: string;
  };
  weights: {
    uri: string;
    id: string;
  };
};
