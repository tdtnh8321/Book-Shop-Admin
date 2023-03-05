import axiosClient from "./axiosClient";
class AuthorApi {
  getAllAuthor = async () => {
    const url = "/author";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  createAuthor = async (data) => {
    const url = "/author/create";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  updateAuthor = async (data) => {
    const url = "/author/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  deleteAuthor = async (id) => {
    const url = `/author/delete/${id}`;
    return axiosClient.delete(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const authorApi = new AuthorApi();
export default authorApi;
