import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskMan/slice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});
export default store;
