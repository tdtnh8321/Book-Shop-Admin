const { createSlice } = require("@reduxjs/toolkit");

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    setToken: (state, action) => {
      return action.payload;
    },
    clearToken: (state, action) => {
      return "";
    },
  },
});
const { actions, reducer } = tokenSlice;
export const { setToken, clearToken } = actions;
export default reducer;
