import {createSlice} from '@reduxjs/toolkit';
// interface UpdateState {
//   data: {};
// }
const initialState = {
  data: [],
};

export const updateSlice = createSlice({
  name: 'update',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateData: (state, action) => {
      console.log('test data recieved...', action.payload);
      state.data = [...state.data, action.payload];
    },
  },
});

export const {updateData} = updateSlice.actions;
export default updateSlice.reducer;
