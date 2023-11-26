import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    show: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = !state.show;
    },
  },
});
export const { toggleShow } = gptSlice.actions;
export default gptSlice.reducer;
