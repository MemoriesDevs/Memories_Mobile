import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  Dictionary,
  EntityId,
} from "@reduxjs/toolkit";
import { Memories } from "../../types/memories";

interface MemoriesState {
  status: "loaded" | "loading" | "errored";
  error: Error | null;
  pendingMemorie?: Memories;
  ids: EntityId[];
  entities: Dictionary<Memories>;
}

const MemoriesAdapter = createEntityAdapter<Memories>({
  selectId: (memorie) => memorie.title,
});

export const getNewFact = createAsyncThunk<Memories, number>(
  "memories/getNew",
  async () => {
    throw Error("Not implemented yet");
  }
);

const initialState: MemoriesState = {
  status: "loaded",
  error: null,
  pendingMemorie: undefined,
  ...MemoriesAdapter.getInitialState(),
};

const MemoriesSlice = createSlice({
  name: "memories",
  initialState,
  reducers: {
    addMemorie: MemoriesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder.addCase(getNewFact.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(getNewFact.fulfilled, (state, action) => {
      state.status = "loaded";
      state.pendingMemorie = action.payload;
    });
    builder.addCase(getNewFact.rejected, (state, action) => {
      state.status = "errored";
      state.error = action.error as Error;
    });
  },
});

export const { addMemorie } = MemoriesSlice.actions;

export default MemoriesSlice.reducer;
