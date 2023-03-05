import { Route, Routes } from "react-router-dom";
import ManageBook from "./pages/ManageBook";

function Book() {
  return (
    <Routes>
      <Route path="" element={<ManageBook />}></Route>
    </Routes>
  );
}

export default Book;
