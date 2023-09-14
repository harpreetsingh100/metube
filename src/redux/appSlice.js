import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    videoData: [],
  },
  reducers: {
    toggleSidebar: (state, action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    addVideoData: (state, action) => {
      state.videoData = action.payload;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { toggleSidebar, addVideoData, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
