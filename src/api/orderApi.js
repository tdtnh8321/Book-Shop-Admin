import axiosClient from "./axiosClient";
class OrderApi {
  getListOrderByStatus = async (status) => {
    const url = "/order/get_order_by_status";
    return axiosClient.get(url, {
      params: status,
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getOrder = async (id) => {
    const url = `/order/${id}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  getListOrderDetail = async (id) => {
    const url = `/order/detail/${id}`;
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  changeStatus = async (body) => {
    const url = "/order/admin_update_status";
    return axiosClient.put(url, body, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const orderApi = new OrderApi();
export default orderApi;
