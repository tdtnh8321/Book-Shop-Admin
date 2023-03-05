import { Route, Routes } from "react-router-dom";
import ManageOrder from "./pages/ManageOrder";
function Order(props) {
  return (
    <Routes>
      <Route path="" element={<ManageOrder />}></Route>
    </Routes>
  );
}

export default Order;
