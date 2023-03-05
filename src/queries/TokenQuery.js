import { useQuery } from "react-query";
import tokenApi from "../api/tokenApi";

const fetchGetToken = async () => {
  try {
    const res = await tokenApi.getToken();

    return res;
  } catch (error) {
    console.log("Failed to fetchGetToken ", error);
  }
};

class TokenQuery {
  getToken = (isLogged) => {
    return useQuery("fetchGetToken", fetchGetToken, {
      enabled: !!isLogged,
      onSuccess: () => {
        console.log("getToken success");
      },
      onError: () => {
        console.log("getToken error");
      },
    });
  };
}
const tokenQuery = new TokenQuery();
export { fetchGetToken };
export default tokenQuery;
