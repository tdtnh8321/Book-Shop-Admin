import axiosClient from "./axiosClient";

class TokenApi {
  getToken = async (token) => {
    const url = "/user/refresh_token";
    return axiosClient.get(url, {
      params: { refreshtoken: token },
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const tokenApi = new TokenApi();
export default tokenApi;
