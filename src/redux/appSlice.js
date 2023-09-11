import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { toggleSidebar } = appSlice.actions;
export default appSlice.reducer;
