import { useState } from "react";
import voucherQuery from "../../../queries/VoucherQuery";
import FormVoucher from "../components/FormVoucher";
import ListVoucher from "../components/ListVoucher";

function ManageVoucher(props) {
  const [form, setForm] = useState({ open: false, type: "", data: "" });

  const listVoucherQuery = voucherQuery.getAllVoucher();
  //console.log(listVoucherQuery.data);
  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <ListVoucher listVoucher={listVoucherQuery.data} setForm={setForm} />
        {form.open === true && <FormVoucher form={form} setForm={setForm} />}
      </div>
    </div>
  );
}

export default ManageVoucher;
