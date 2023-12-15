// import { createSlice } from '@reduxjs/toolkit';
// import { logIn } from 'components/toGetApi/toGetApi';
// import { loginInitialState } from 'reduxfolder/initialState';

// export const loginSlice = createSlice({
//   name: 'user/login',
//   initialState: loginInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(logIn.pending, (state, action) => {
//         state.pending = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.userlog = action.payload;
//         console.log(action.payload);
//         state.pending = false;
//       })
//       .addCase(logIn.rejected, (state, action) => {
//         console.log(action.payload);
//         state.pending = false;
//       });
//   },
// });
// export const loginReducer = loginSlice.reducer;
