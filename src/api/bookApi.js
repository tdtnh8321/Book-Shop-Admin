import axiosClient from "./axiosClient";

class BookApi {
  getListSelling = async () => {
    const url = "/book/selling";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getAllBook = async (params) => {
    const url = "/book";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getCountPages = async (params) => {
    const url = "/book/countpages";
    return axiosClient.get(url, {
      params,
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  getDetail = async (slug) => {
    const url = `/book/${slug}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  createBook = async (data) => {
    const url = "/book/create";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  updateBook = async (data) => {
    const url = "/book/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  deleteBook = async (id) => {
    const url = `/book/delete/${id}`;
    return axiosClient.delete(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getListAllBook = async () => {
    const url = "/book/getlistallbook";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const bookApi = new BookApi();
export default bookApi;
