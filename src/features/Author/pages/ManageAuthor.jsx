import { useState } from "react";
import authorQuery from "../../../queries/AuthorQuery";
import FormAuthor from "../components/FormAuthor";
import ListAuthor from "../components/ListAuthor";

function ManageAuthor(props) {
  const [form, setForm] = useState({ open: false, type: "", data: "" });

  const listAuthorQuery = authorQuery.getAllAuthor();
  //console.log(listAuthorQuery.data);
  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <ListAuthor listAuthor={listAuthorQuery.data} setForm={setForm} />
        {form.open === true && <FormAuthor form={form} setForm={setForm} />}
      </div>
    </div>
  );
}

export default ManageAuthor;
