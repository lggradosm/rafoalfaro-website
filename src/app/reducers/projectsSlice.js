import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    value: null,
  },
  reducers: {
    init: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init } = projectsSlice.actions;

export default projectsSlice.reducer;

export const selectProjects = (state) => state.projects.value;
