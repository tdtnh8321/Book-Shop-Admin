import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function Auth(props) {
  return (
    <Routes>
      <Route path="" element={<LoginPage />}></Route>
    </Routes>
  );
}

export default Auth;
