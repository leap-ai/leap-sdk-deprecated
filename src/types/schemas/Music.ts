export type LeapMusicSchema = {
  id: string;
  createdAt: string;
  status: "queued" | "failed" | "finished" | "processing";
  prompt: string;
  media_uri: string | null;
};
