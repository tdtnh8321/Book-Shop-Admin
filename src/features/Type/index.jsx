import { Route, Routes } from "react-router-dom";
import ManageType from "./pages/ManageType";

function Type(props) {
  return (
    <Routes>
      <Route path="" element={<ManageType />}></Route>
    </Routes>
  );
}

export default Type;
