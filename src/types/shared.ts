export interface SliceState {
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

export const defaultInitialState: SliceState = {
  status: "idle",
  error: null,
};
