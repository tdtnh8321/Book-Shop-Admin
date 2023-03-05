import { useState } from "react";

import bookQuery from "../../../queries/BookQuery";
import authorQuery from "../../../queries/AuthorQuery";
import typeQuery from "../../../queries/TypeQuery";
import FormBook from "../components/FormBook";
import FilterBook from "../components/FilterBook";
import ListBook from "../components/ListBook";
function ManageBook() {
  const [form, setForm] = useState({ open: false, type: "", data: "" });
  const [params, setParams] = useState({
    page: 1,
    search: "",
    type: "",
    author: "",
  });
  const listAuthorQuery = authorQuery.getAllAuthor();
  const listTypeQuery = typeQuery.getAllType();
  const listBookQuery = bookQuery.getAllBook(params);
  const countPage = bookQuery.getCountPages(params);

  const handleChangePage = (num) => {
    setParams((prev) => {
      return { ...prev, page: num };
    });
  };
  const handleChangeSearch = (value) => {
    setParams((prev) => {
      return { ...prev, page: 1, search: value };
    });
  };
  const handleChangeType = (type) => {
    setParams((prev) => {
      return { ...prev, page: 1, type: type };
    });
  };
  const handleChangeAuthor = (author) => {
    setParams((prev) => {
      return { ...prev, page: 1, author };
    });
  };

  if (listBookQuery.isLoading) return <h1>.....Loading...</h1>;
  if (listBookQuery.isError) return <h1>...Error....</h1>;

  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <FilterBook
          params={params}
          onChangeForm={setForm}
          handleChangeSearch={handleChangeSearch}
          handleChangeAuthor={handleChangeAuthor}
          handleChangeType={handleChangeType}
          listAuthor={listAuthorQuery.data}
          listType={listTypeQuery.data}
        />
        <ListBook
          listBook={listBookQuery.data}
          setForm={setForm}
          countPage={countPage.data}
          currentPage={params.page}
          handleChangePage={handleChangePage}
        />
        {form.open === true && <FormBook form={form} setForm={setForm} />}
      </div>
    </div>
  );
}

export default ManageBook;
