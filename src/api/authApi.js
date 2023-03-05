import axiosClient from "./axiosClient";
class AuthApi {
  login = async (data) => {
    console.log("login: ", data);
    const url = "/user/login_admin";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  logout = async () => {
    const url = "/user/logout";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getProfile = async (token) => {
    const url = "/user/profile";
    return axiosClient.get(url, {
      headers: { Authorization: token },
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const authApi = new AuthApi();
export default authApi;
