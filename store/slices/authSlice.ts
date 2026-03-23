import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
  user: Record<string, any>;
}

interface AuthState {
  admin: UserState;
  user: UserState;
}

const initialState: AuthState = {
  admin: {
    token: null,
    user: {},
  },
  user: {
    token: null,
    user: {},
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    adminLoginSuccess: (state, action: PayloadAction<any>) => {
      state.admin.token = action.payload.token;
      state.admin.user = action.payload.user;
    },
    adminLogout: (state) => {
      state.admin = { token: null, user: {} };
    },
    userLoginSuccess: (state, action: PayloadAction<any>) => {
      state.user.token = action.payload?.token;
      state.user.user = action.payload?.user;
    },
    userLogout: (state) => {
      state.user = { token: null, user: {} };
    },
    updateUser: (state, action: PayloadAction<any>) => {
      state.user.user = { ...state.user.user, ...action.payload };
    },
  },
});

export const {
  adminLoginSuccess,
  adminLogout,
  userLoginSuccess,
  userLogout,
  updateUser,
} = authSlice.actions;

export default authSlice.reducer;