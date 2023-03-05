const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  import: {
    total: 0,
    idAdmin: "",
    idSupplier: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  items: [],
};
const importSlice = createSlice({
  name: "import",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.items = action.payload;
    },
    addImport: (state, action) => {
      state.import = action.payload;
    },
    clear: (state, action) => {
      return initialState;
    },
  },
});
const { actions, reducer } = importSlice;
export const { addItems, addImport, clear } = actions;
export default reducer;
