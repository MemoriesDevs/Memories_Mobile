import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MemoriesReducer from "./modules/Memories";

const rootReducer = combineReducers({
  facts: MemoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
