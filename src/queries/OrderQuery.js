import orderApi from "../api/orderApi";
import { useMutation, useQuery } from "react-query";

const fetchApiOrderByStatus = async (status) => {
  try {
    const res = await orderApi.getListOrderByStatus(status);
    return res;
  } catch (error) {
    console.log("Failed fetchApiOrderByStatus ", error);
  }
};
const fetchApiGetOrder = async (id) => {
  try {
    const res = await orderApi.getOrder(id);
    return res;
  } catch (error) {
    console.log("Failed fetchApiGetOrder ", error);
  }
};
const fetchApiGetListOrderDetail = async (id) => {
  try {
    const res = await orderApi.getListOrderDetail(id);
    return res;
  } catch (error) {
    console.log("Failed fetchApiGetListOrderDetail ", error);
  }
};
const fetchApiChangeStatus = async (params) => {
  try {
    const res = await orderApi.changeStatus(params);
    return res;
  } catch (error) {
    console.log("Failed fetchApiChangeStatus ", error);
  }
};

class OrderQuery {
  getListOrderByStatus = (status) => {
    return useQuery(
      ["getListOrderByStatus", status],
      () => fetchApiOrderByStatus(status),
      {
        keepPreviousData: true,
        onSuccess: () => {
          console.log("getListOrderByStatus success");
        },
        onError: () => {
          console.log("getListOrderByStatus error");
        },
      }
    );
  };
  getOrder = (id) => {
    return useQuery(["getOrder", id], () => fetchApiGetOrder(id), {
      onSuccess: () => {
        console.log("getOrder success");
      },
      onError: () => {
        console.log("getOrder error");
      },
    });
  };
  getListOrderDetail = (id) => {
    return useQuery(
      ["getListOrderDetail", id],
      () => fetchApiGetListOrderDetail(id),
      {
        onSuccess: () => {
          console.log("getListOrderDetail success");
        },
        onError: () => {
          console.log("getListOrderDetail error");
        },
      }
    );
  };
  changeStatus = (isMutation) => {
    return useMutation(["changeStatus"], fetchApiChangeStatus, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("updateBook success");
      },
      onError: () => {
        console.log("updateBook error");
      },
    });
  };
}

const orderQuery = new OrderQuery();
export default orderQuery;
