import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import attorneyReducer from "../features/attorneys/attorneySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    attorneys: attorneyReducer,
  },
});
