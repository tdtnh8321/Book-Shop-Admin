import authorApi from "../api/authorApi";
import { useMutation, useQuery } from "react-query";
const fetchApiAllAuthor = async () => {
  try {
    const res = await authorApi.getAllAuthor();
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCreateAuthor = async (data) => {
  try {
    const res = await authorApi.createAuthor(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiCreateAuthor ", error);
  }
};
const fetchApiUpdateAuthor = async (data) => {
  try {
    const res = await authorApi.updateAuthor(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiUpdateAuthor ", error);
  }
};
const fetchApiDeleteAuthor = async (id) => {
  try {
    const res = await authorApi.deleteAuthor(id);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiDeleteAuthor ", error);
  }
};
class AuthorQuery {
  getAllAuthor = () => {
    return useQuery("getAllAuthor", fetchApiAllAuthor);
  };
  createAuthor = (isMutation) => {
    return useMutation(["createAuthor"], fetchApiCreateAuthor, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("createAuthor success");
      },
      onError: () => {
        console.log("createAuthor error");
      },
    });
  };
  updateAuthor = (isMutation) => {
    return useMutation(["updateAuthor"], fetchApiUpdateAuthor, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("updateAuthor success");
      },
      onError: () => {
        console.log("updateAuthor error");
      },
    });
  };
  deleteAuthor = (isMutation) => {
    return useMutation(["deleteAuthor"], fetchApiDeleteAuthor, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("deleteAuthor success");
      },
      onError: () => {
        console.log("deleteAuthor error");
      },
    });
  };
}
const authorQuery = new AuthorQuery();
export default authorQuery;
