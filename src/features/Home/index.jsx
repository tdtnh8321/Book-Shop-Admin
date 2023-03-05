import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages";
function Home() {
  return (
    <Routes>
      <Route path="" element={<HomePage />}></Route>
    </Routes>
  );
}

export default Home;
