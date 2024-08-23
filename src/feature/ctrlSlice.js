import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ctrls: localStorage.getItem('ctrls')
    ? JSON.parse(localStorage.getItem('ctrls'))
    : [],
};
const ctrlSlice = createSlice({
  name: 'ctrls',
  initialState,
  reducers: {
    addCtrl(state, action) {
      state.ctrls.push(action.payload);
      localStorage.setItem('ctrls', JSON.stringify(state.ctrls));
    },
    updateContent(state, action) {
      const { id } = action.payload;
      const ctrls = state.ctrls.filter((ctrl) => ctrl.id !== id);
      state.ctrls = [...ctrls, action.payload];
      localStorage.setItem('ctrls', JSON.stringify(state.ctrls));
    },
    updateIsSelect(state, action) {
      const { id } = action.payload;
      const ctrls = state.ctrls.filter((ctrl) => ctrl.id !== id);
      const newCtrls = ctrls.map((ctrl) => ({ ...ctrl, isSelected: false }));
      state.ctrls = [...newCtrls, action.payload];
      localStorage.setItem('ctrls', JSON.stringify(state.ctrls));
    },

    deleteContent(state, action) {
      const { id } = action.payload;
      const ctrls = state.ctrls.filter((ctrl) => ctrl.id !== id);
      state.ctrls = [...ctrls];
      localStorage.setItem('ctrls', JSON.stringify(state.ctrls));
    },
    setPosition(state, action) {
      const { id } = action.payload;
      const ctrls = state.ctrls.filter((ctrl) => ctrl.id !== id);
      state.ctrls = [...ctrls, action.payload];
      localStorage.setItem('ctrls', JSON.stringify(state.ctrls));
    },
  },
});

export const {
  addCtrl,
  deleteContent,
  updateContent,
  updateIsSelect,
  setPosition,
} = ctrlSlice.actions;
export const selectAllCtrls = (state) => state.ctrls.ctrls;
export const selectCtrlById = (state, id) =>
  state.ctrls.ctrls.find((ctrl) => ctrl.id === id);
export const selectNoOfCtrls = (state) => state.ctrls.ctrls.length;
export const selectCtrlByIsSelected = (state) =>
  state.ctrls.ctrls.find((ctrl) => ctrl.isSelected === true);
export default ctrlSlice.reducer;
