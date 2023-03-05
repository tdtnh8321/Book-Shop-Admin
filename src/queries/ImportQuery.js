import importApi from "../api/importApi";
import { useMutation, useQuery } from "react-query";
const fetchApiGetListImport = async (status) => {
  try {
    const res = await importApi.getListImport(status);
    return res;
  } catch (error) {
    console.log("Failed fetchApiGetListImport ", error);
  }
};
const fetchApiGetImportDetail = async (id) => {
  try {
    const res = await importApi.getImportDetail(id);
    return res;
  } catch (error) {
    console.log("Failed fetchApiGetImportDetail ", error);
  }
};
const fetchApiCreateImport = async (data) => {
  try {
    const res = await importApi.create(data);
    return res;
  } catch (error) {
    console.log("Failed fetchApiCreateImport ", error);
  }
};
const fetchApiUpdateStatus = async (data) => {
  try {
    const res = await importApi.update(data);
    return res;
  } catch (error) {
    console.log("Failed fetchApiUpdateStatus ", error);
  }
};
class ImportQuery {
  getListImport = (status) => {
    return useQuery(["getListImport", status], () =>
      fetchApiGetListImport(status)
    );
  };
  getImportDetail = (id) => {
    return useQuery(["getImportDetail", id], () => fetchApiGetImportDetail(id));
  };
  createImport = (isMutation) => {
    return useMutation(["createImport"], fetchApiCreateImport, {
      enable: !!isMutation,
    });
  };
  updateStatus = (isMutation) => {
    return useMutation(["updateStatus"], fetchApiUpdateStatus, {
      enable: !!isMutation,
    });
  };
}
const importQuery = new ImportQuery();
export default importQuery;
