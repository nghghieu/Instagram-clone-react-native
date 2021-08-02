import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  isLogedIn: false,
  currentUser: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      state.isLogin = true;
      state.isLogedIn = true;
    },
    logout: (state) => {
      state.isLogin = false;
      state.isLogedIn = false;
      state.currentUser = {};
    },
    checkLogin: (state) => {
      state.isLogin = true;
    },
    register: (state, action) => {
      console.log("action.payload", action.payload);
      state.currentUser = action.payload;
      state.isLogin = true;
      state.isLogedIn = true;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
