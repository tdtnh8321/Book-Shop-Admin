import React, { Suspense, useEffect } from "react";
import "./App.css";

import Loading from "./components/Loading";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { DefaultLayout, FullLayout } from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetToken } from "./queries/TokenQuery";
import { setToken } from "./features/Auth/tokenSlice";
import { login, setAccount } from "./features/Auth/authSlice";
import { fetchApiGetProfile } from "./queries/AuthQuery";
import { Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((slice) => slice.token);
  const auth = useSelector((slice) => slice.auth);
  //nếu đăng nhập thành công thì lấy token
  useEffect(() => {
    if (auth.isLogged === true) {
      const getToken = async () => {
        const res = await fetchGetToken();
        console.log(res);
        dispatch(setToken(res.access_token));
      };
      getToken();
    }
  }, [auth.isLogged]);
  // đã có access_token => lấy thông tin account
  useEffect(() => {
    if (token !== "") {
      const getProfile = async () => {
        dispatch(login());
        const res = await fetchApiGetProfile(token);
        console.log(res);
        dispatch(setAccount(res));
      };
      getProfile();
    }
  }, [token]);
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = FullLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {privateRoutes.map((route, index) => {
            const Layout = DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      <Toaster />
    </Suspense>
  );
}

export default App;
