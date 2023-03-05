import { Route, Routes } from "react-router-dom";
import ManageVoucher from "./pages/ManageVoucher";
function Voucher(props) {
  return (
    <Routes>
      <Route path="" element={<ManageVoucher />}></Route>
    </Routes>
  );
}

export default Voucher;
