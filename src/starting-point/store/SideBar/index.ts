import { createSlice } from '@reduxjs/toolkit';

const SideBar = createSlice({
  name: 'SideBar',
  initialState: {
    open: false,
    advancedSettings: {
      show: false,
    },
  },
  reducers: {
    setOpenSideBar: (state) => {
      state.open = !state.open;
    },
    setAdvancedSettings: (state) => {
      state.advancedSettings.show = !state.advancedSettings.show;
    },
  },
});
export const { setOpenSideBar, setAdvancedSettings } = SideBar.actions;
export default SideBar.reducer;
