import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import otpReducer from "./slices/otpEmailSlice";
import profileReducer from "./slices/profileSlice";
import toasterReducer from "./slices/toasterSlice";
import forgotPasswordReducer from "./slices/forgotPasswordSlice";
import resetPasswordReducer from "./slices/resetPasswordSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    otp: otpReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    profile: profileReducer,
    toaster: toasterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// TypeScript Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
