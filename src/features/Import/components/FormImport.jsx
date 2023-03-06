import { useState } from "react";
import * as XLSX from "xlsx";
import { addItems, addImport, clear } from "../importSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
function FormImport(props) {
  const dispatch = useDispatch();
  const authSlice = useSelector((slice) => slice.auth);
  const [excelFile, setExcelFile] = useState(null);
  const [excelFileError, setExcelFileError] = useState(null);

  const fileType = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  ];
  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      //console.log(selectedFile.type);
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          setExcelFileError(null);
          setExcelFile(e.target.result);
        };
      } else {
        console.log("Please select only excel file types");
        setExcelFileError("Please select only excel file types");
        setExcelFile(null);
      }
    } else {
      console.log("plz select your file");
    }
  };
  const handleSubmit = () => {
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      //console.log(workbook);
      const worksheetNameSupplier = workbook.SheetNames[0];
      const worksheetSupplier = workbook.Sheets[worksheetNameSupplier];
      const dataSupplier = XLSX.utils.sheet_to_json(worksheetSupplier);

      const worksheetNameImport = workbook.SheetNames[1];
      const worksheetImport = workbook.Sheets[worksheetNameImport];
      const dataImport = XLSX.utils.sheet_to_json(worksheetImport);

      dispatch(
        addImport({
          total: dataSupplier[0].total,
          idAdmin: authSlice.user._id,
          idSupplier: dataSupplier[0].idSupplier,
          name: dataSupplier[0].name,
          phone: dataSupplier[0].phone,
          email: dataSupplier[0].email,
          address: dataSupplier[0].address,
        })
      );
      dispatch(addItems(dataImport));
      toast.success("Điền phiếu nhập thành công", { position: "top-right" });
    } else {
      toast.error("Không thể điền phiếu nhập", { position: "top-right" });
    }
  };
  // console.log({ excelFile });
  // console.log({ excelSupplier });
  // console.log({ excelData });
  return (
    <div id="form" className="w-full bg-blue-100 rounded-lg">
      <p className="text-center font-bold text-lg">Thêm phiếu nhập</p>
      <div className="my-5 w-full flex flex-row justify-between px-5">
        <div className="flex flex-col">
          <input type="file" onChange={handleFile} />
          {excelFileError && (
            <div className="text-danger" style={{ marginTop: 5 + "px" }}>
              {excelFileError}
            </div>
          )}
        </div>
      </div>
      <div className="my-5 flex flex-row justify-center items-center">
        <button
          className="px-2 py-1 rounded-lg bg-blue-300 text-white"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default FormImport;
