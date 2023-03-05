import axiosClient from "./axiosClient";

class TypeApi {
  getAllType = async () => {
    const url = "/type";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  createType = async (data) => {
    const url = "/type/create";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  updateType = async (data) => {
    const url = "/type/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  deleteType = async (id) => {
    const url = `/type/delete/${id}`;
    return axiosClient.delete(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const typeApi = new TypeApi();
export default typeApi;
