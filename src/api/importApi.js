import axiosClient from "./axiosClient";
class ImportApi {
  getListImport = async (status) => {
    const url = `/import/getall/${status}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getImportDetail = async (id) => {
    const url = `/import/detail/${id}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  create = async (data) => {
    const url = `/import/create`;
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  update = async (data) => {
    const url = `/import/update`;
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const importApi = new ImportApi();
export default importApi;
