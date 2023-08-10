import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import projectReducer from "../reducers/projectsSlice";

export default configureStore({
  reducer: {
    projects: projectReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
