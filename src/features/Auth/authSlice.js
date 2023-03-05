const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: [],
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
    },
    setAccount: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.isLogged = false;
      state.user = [];
    },
  },
});
const { actions, reducer } = authSlice;
export const { login, setAccount, logout } = actions;
export default reducer;
