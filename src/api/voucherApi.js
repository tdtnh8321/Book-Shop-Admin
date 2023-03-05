import axiosClient from "./axiosClient";
class VoucherApi {
  getAllVoucher = async () => {
    const url = "/voucher";
    return axiosClient.get(url, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  createVoucher = async (data) => {
    const url = "/voucher/create";
    return axiosClient.post(url, data, {
      paramsSerializer: {
        indexes: false, // empty brackets like `arrayOfUserIds[]`
      },
    });
  };
  updateVoucher = async (data) => {
    const url = "/voucher/update";
    return axiosClient.put(url, data, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
  deleteVoucher = async (id) => {
    const url = `/voucher/delete/${id}`;
    return axiosClient.delete(url, {
      paramsSerializer: {
        indexes: false,
      },
    });
  };
}
const voucherApi = new VoucherApi();
export default voucherApi;
