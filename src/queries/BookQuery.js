import bookApi from "../api/bookApi";
import { useMutation, useQuery } from "react-query";

const fetchApiAllBook = async (params) => {
  try {
    const res = await bookApi.getAllBook(params);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCountPages = async (params) => {
  try {
    const res = await bookApi.getCountPages(params);
    return res;
  } catch (error) {
    console.log("count pages:- ", error);
  }
};
const fetchApiDetailBook = async (slug) => {
  try {
    const res = await bookApi.getDetail(slug);
    return res;
  } catch (error) {
    console.log("Failed to fetch ", error);
  }
};
const fetchApiCreateBook = async (data) => {
  try {
    const res = await bookApi.createBook(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiCreateBook ", error);
  }
};
const fetchApiUpdateBook = async (data) => {
  try {
    const res = await bookApi.updateBook(data);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiUpdateBook ", error);
  }
};
const fetchApiDeleteBook = async (id) => {
  try {
    const res = await bookApi.deleteBook(id);
    return res;
  } catch (error) {
    console.log("Failed to fetchApiDeleteBook ", error);
  }
};
const fetchApiGetListAllBook = async () => {
  try {
    const res = await bookApi.getListAllBook();
    return res;
  } catch (error) {
    console.log("Failed to fetchApiGetListAllBook ", error);
  }
};
class BookQuery {
  getAllBook = (params) => {
    return useQuery(["getAllBook", params], () => fetchApiAllBook(params), {
      keepPreviousData: true,
    });
  };
  getCountPages = (params) => {
    return useQuery(
      ["getCountPages", params],
      () => fetchApiCountPages(params),
      { keepPreviousData: true }
    );
  };
  getBookDetail = (params) => {
    return useQuery(["getBookDetail", params], () =>
      fetchApiDetailBook(params)
    );
  };
  createBook = (isMutation) => {
    return useMutation(["createBook"], fetchApiCreateBook, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("createBook success");
      },
      onError: () => {
        console.log("createBook error");
      },
    });
  };
  updateBook = (isMutation) => {
    return useMutation(["updateBook"], fetchApiUpdateBook, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("updateBook success");
      },
      onError: () => {
        console.log("updateBook error");
      },
    });
  };
  deleteBook = (isMutation) => {
    return useMutation(["deleteBook"], fetchApiDeleteBook, {
      enable: !!isMutation,
      onSuccess: () => {
        console.log("deleteBook success");
      },
      onError: () => {
        console.log("deleteBook error");
      },
    });
  };
  getListAllBook = () => {
    return useQuery(["getListAllBook"], fetchApiGetListAllBook);
  };
}
const bookQuery = new BookQuery();
export default bookQuery;
