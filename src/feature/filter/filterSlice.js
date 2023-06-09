import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  searchText: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addProjectsName: (state, action) => {
      if (!state.projects.includes(action.payload)) {
        state.projects.push(action.payload);
      }
    },
    removeProjectsName: (state, action) => {
        state.projects = state.projects.filter(project => project !== action.payload)
    },
    filterSearchBox: (state, action) => {
        state.searchText = action.payload
    },
  },
});

export const { addProjectsName, removeProjectsName, filterSearchBox } =
  filterSlice.actions;
export default filterSlice.reducer;
