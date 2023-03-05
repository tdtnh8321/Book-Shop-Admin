import axiosClient from "./axiosClient";
class AccountApi {
  getListAccount = async (role) => {
    const url = `/user/list_user/${role}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const accountApi = new AccountApi();
export default accountApi;
