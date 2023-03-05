import typeApi from "../api/typeApi";
import { useQuery, useMutation } from "react-query";
const fetchApiAllType = async () => {
  try {
    const res = await typeApi.getAllType();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCreateType = async (data) => {
  try {
    const res = await typeApi.createType(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiCreateType ", error);
  }
};
const fetchApiUpdateType = async (data) => {
  try {
    const res = await typeApi.updateType(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiUpdateType ", error);
  }
};
const fetchApiDeleteType = async (id) => {
  try {
    const res = await typeApi.deleteType(id);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiDeleteType ", error);
  }
};
class TypeQuery {
  getAllType = () => {
    return useQuery("getAllType", fetchApiAllType);
  };
  createType = (isMutation) => {
    return useMutation(["createType"], fetchApiCreateType, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("createType success");
      },
      onError: () => {
        console.log("createType error");
      },
    });
  };
  updateType = (isMutation) => {
    return useMutation(["updateType"], fetchApiUpdateType, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("updateType success");
      },
      onError: () => {
        console.log("updateType error");
      },
    });
  };
  deleteType = (isMutation) => {
    return useMutation(["deleteType"], fetchApiDeleteType, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("deleteType success");
      },
      onError: () => {
        console.log("deleteType error");
      },
    });
  };
}
const typeQuery = new TypeQuery();
export default typeQuery;
