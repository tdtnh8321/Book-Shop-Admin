import accountApi from "../api/accountApi";
import { useMutation, useQuery } from "react-query";
const fetchApiGetListAccount = async (role) => {
  try {
    const res = await accountApi.getListAccount(role);
    return res;
  } catch (error) {
    console.log("fetchApiGetListAccount ", error);
  }
};
class AccountQuery {
  getListAccount = (role) => {
    return useQuery(
      ["getListAccount", role],
      () => fetchApiGetListAccount(role),
      {
        keepPreviousData: true,
      }
    );
  };
}
const accountQuery = new AccountQuery();
export default accountQuery;
