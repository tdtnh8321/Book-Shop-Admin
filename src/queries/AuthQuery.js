import { useMutation, useQuery } from "react-query";
import authApi from "../api/authApi";
const fetchApiLogin = async (data) => {
  try {
    console.log("fetchApiLogin:", data);
    const res = await authApi.login(data);
    return res;
  } catch (error) {
    console.log("Failed fetchApiLogin: ", error);
  }
};
const fetchApiGetProfile = async (token) => {
  try {
    const res = await authApi.getProfile(token);

    return res;
  } catch (error) {
    console.log("Failed fetchApiGetProfile", error);
  }
};
const fetchApiLogout = async () => {
  try {
    const res = await authApi.logout();
    return res;
  } catch (error) {
    console.log("Failed fetchApiLogout", error);
  }
};
class AuthQuery {
  login = (data) => {
    return useMutation(["login"], fetchApiLogin, {
      onSuccess: () => {
        console.log("login success");
      },
      onError: () => {
        console.log("login error");
      },
    });
  };
  getProfile = (token, isLogged) => {
    return useQuery(["getProfile", token], () => fetchApiGetProfile(token), {
      enabled: !!isLogged,
      onSuccess: () => {
        console.log("getProfile success ");
      },
      onError: () => {
        console.log("getProfile error");
      },
    });
  };
  logout = (isLogout) => {
    return useQuery("logout", fetchApiLogout, {
      enabled: !!isLogout,
      onSuccess: () => {
        console.log("logout success ");
      },
      onError: () => {
        console.log("logout error");
      },
    });
  };
}
const authQuery = new AuthQuery();
export { fetchApiLogin, fetchApiGetProfile, fetchApiLogout };
export default authQuery;
