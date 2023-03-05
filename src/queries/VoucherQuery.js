import voucherApi from "../api/voucherApi";
import { useMutation, useQuery } from "react-query";
const fetchApiAllVoucher = async () => {
  try {
    const res = await voucherApi.getAllVoucher();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCreateVoucher = async (data) => {
  try {
    const res = await voucherApi.createVoucher(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiCreateVoucher ", error);
  }
};
const fetchApiUpdateVoucher = async (data) => {
  try {
    const res = await voucherApi.updateVoucher(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiUpdateVoucher ", error);
  }
};
const fetchApiDeleteVoucher = async (id) => {
  try {
    const res = await voucherApi.deleteVoucher(id);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiDeleteVoucher ", error);
  }
};
class VoucherQuery {
  getAllVoucher = () => {
    return useQuery("getAllVoucher", fetchApiAllVoucher);
  };
  createVoucher = (isMutation) => {
    return useMutation(["createVoucher"], fetchApiCreateVoucher, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("createVoucher success");
      },
      onError: () => {
        console.log("createVoucher error");
      },
    });
  };
  updateVoucher = (isMutation) => {
    return useMutation(["updateVoucher"], fetchApiUpdateVoucher, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("updateVoucher success");
      },
      onError: () => {
        console.log("updateVoucher error");
      },
    });
  };
  deleteVoucher = (isMutation) => {
    return useMutation(["deleteVoucher"], fetchApiDeleteVoucher, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("deleteVoucher success");
      },
      onError: () => {
        console.log("deleteVoucher error");
      },
    });
  };
}
const voucherQuery = new VoucherQuery();
export default voucherQuery;
