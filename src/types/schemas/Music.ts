export type LeapMusicSchema = {
  id: string;
  createdAt: string;
  state: "queued" | "failed" | "finished" | "processing";
  prompt: string;
  media_uri: string | null;
  logs: string | null;
  error: string | null;
};
