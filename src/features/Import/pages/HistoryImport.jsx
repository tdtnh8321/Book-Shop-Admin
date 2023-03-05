import ListImport from "../components/ListImport";
import ImportDetail from "../components/ImportDetail";
import { useState } from "react";
import importQuery from "../../../queries/ImportQuery";
function HistoryImport(props) {
  const [open, setOpen] = useState({ open: false, data: "" });
  const [status, setStatus] = useState(1);
  const listImportQuery = importQuery.getListImport(status);

  const handleSetOpen = (id) => {
    setOpen((prev) => ({ ...prev, open: true, data: id }));
  };
  const handleClose = () => {
    setOpen((prev) => ({ ...prev, open: false, data: "" }));
  };
  return (
    <div className="w-full p-5 items-center flex flex-col">
      <div className="w-full flex flex-row justify-around">
        <button
          className="px-2 py-1 rounded-lg bg-green-400 text-white"
          onClick={() => setStatus(1)}
        >
          Đã duyệt
        </button>
        <button
          className="px-2 py-1 rounded-lg bg-blue-400 text-white"
          onClick={() => setStatus(0)}
        >
          Chưa duyệt
        </button>
      </div>
      <div className="w-full flex flex-col">
        <ListImport
          listImport={listImportQuery.data}
          handleSetOpen={handleSetOpen}
        />
        {open.open === true && (
          <ImportDetail
            id={open.data}
            handleClose={handleClose}
            status={status}
          />
        )}
      </div>
    </div>
  );
}

export default HistoryImport;
