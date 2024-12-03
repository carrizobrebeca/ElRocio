import { createSlice } from '@reduxjs/toolkit';
//value: new Date().getTime(),
export const startSlice = createSlice({
   name: 'start',
   initialState:{
    value: new Date(),
   },
   reducers:{
    setStart: (state, action) =>{
        state.value = action.payload;
    },
   },
});

export const {setStart} = startSlice.actions;
export const selectStart = state => state.start.value;
export default startSlice.reducer;