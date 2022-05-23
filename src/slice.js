import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  searched: "",
};

const reducers = {
  changeSearchField(state, {payload: {value}}) {
    return {
      ...state,
      searched: value,
    }
  }
}


const {actions, reducer} = createSlice({
  name: 'application',
  initialState,
  reducers,
});

export const {
  changeSearchField
} = actions


export default reducer;

