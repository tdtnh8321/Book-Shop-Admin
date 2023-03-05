import { Route, Routes } from "react-router-dom";
import ManageEmployee from "./pages/ManageEmployee";
import ManageCustomer from "./pages/ManageCustomer";

function Account(props) {
  return (
    <Routes>
      <Route path="/employee" element={<ManageEmployee />}></Route>
      <Route path="/customer" element={<ManageCustomer />}></Route>
    </Routes>
  );
}

export default Account;
