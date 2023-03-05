import { Route, Routes } from "react-router-dom";
import HistoryImport from "./pages/HistoryImport";
import AddImport from "./pages/AddImport";

function Import(props) {
  return (
    <Routes>
      <Route path="" element={<HistoryImport />}></Route>
      <Route path="/add" element={<AddImport />}></Route>
    </Routes>
  );
}

export default Import;
