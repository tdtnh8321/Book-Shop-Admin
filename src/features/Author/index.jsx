import { Route, Routes } from "react-router-dom";
import ManageAuthor from "./pages/ManageAuthor";
function Author(props) {
  return (
    <Routes>
      <Route path="" element={<ManageAuthor />}></Route>
    </Routes>
  );
}

export default Author;
