import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searched: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchField(state, { payload: { value } }) {
      return {
        ...state,
        searched: value,
      };
    },
  },
});

export const {
  changeSearchField,
} = searchSlice.actions;

export default searchSlice.reducer;
