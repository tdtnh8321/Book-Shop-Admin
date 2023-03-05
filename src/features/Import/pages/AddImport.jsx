import { useState } from "react";
import FormImport from "../components/FormImport";
import ListImportItem from "../components/ListImportItem";

function AddImport(props) {
  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <FormImport />
        {<ListImportItem />}
      </div>
    </div>
  );
}

export default AddImport;
