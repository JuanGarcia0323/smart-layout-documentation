import { createSlice } from '@reduxjs/toolkit';

const Landing = createSlice({
  name: 'Landing',
  initialState: {
    counter: 0,
  },
  reducers: {
    addCounter: (state) => {
      state.counter = state.counter + 1;
    },
  },
});
export const { addCounter } = Landing.actions;
export default Landing.reducer;
