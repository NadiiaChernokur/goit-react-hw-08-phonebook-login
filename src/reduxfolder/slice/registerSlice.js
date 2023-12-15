import { createSlice } from '@reduxjs/toolkit';
import { userInitialState } from '../initialState';
import {
  logIn,
  logOut,
  refreshUser,
  toCreateUser,
} from 'components/toGetApi/toGetApi';

export const registerSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  extraReducers: builder => {
    builder
      .addCase(toCreateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        console.log(action.payload);
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = '';
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});
export const registerReducer = registerSlice.reducer;
