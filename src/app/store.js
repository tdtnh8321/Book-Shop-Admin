import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "../features/Auth/authSlice";
import tokenReducer from "../features/Auth/tokenSlice";
import importReducer from "../features/Import/importSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    token: tokenReducer,
    import: importReducer,
  },
});
