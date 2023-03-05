import { useState } from "react";
import typeQuery from "../../../queries/TypeQuery";
import ListType from "../components/ListType";
import FormType from "../components/FormType";
function ManageType(props) {
  const [form, setForm] = useState({ open: false, type: "", data: "" });
  const listTypeQuery = typeQuery.getAllType();

  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <ListType listType={listTypeQuery.data} setForm={setForm} />
        {form.open === true && <FormType form={form} setForm={setForm} />}
      </div>
    </div>
  );
}

export default ManageType;
