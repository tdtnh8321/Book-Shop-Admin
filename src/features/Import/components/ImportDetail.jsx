import { useState } from "react";
import importQuery from "../../../queries/ImportQuery";

function ImportDetail(props) {
  const { id, handleClose, status } = props;
  const listImportDetailQuery = importQuery.getImportDetail(id);
  const listImportDetail = listImportDetailQuery.data;
  const [isMutation, setIsMutation] = useState(false);
  const { mutateAsync: updateStatus } = importQuery.updateStatus(isMutation);
  const handleSubmit = async () => {
    const res = await updateStatus({ idImport: id });
    console.log(res);
  };

  return (
    <>
      {listImportDetail && (
        <div className="fixed top-0 left-0 right-0 flex flex-col w-full min-h-[100vh] items-center bg-[rgb(49,46,126,0.2)] ">
          <div className="w-[500px] h-auto bg-blue-200 m-auto p-3 rounded-lg">
            <div className="w-full flex flex-row justify-between">
              <p>Chi tiết phiếu nhập</p>
              <button onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
            <table className="w-full border-b border-gray-200">
              <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                  <th className="py-4 px-4 text-center">No</th>
                  <th className="py-4 px-4 text-center">Tên sách</th>
                  <th className="py-4 px-4 text-center">Giá nhập</th>
                  <th className="py-4 px-4 text-center">Số lượng</th>
                  <th className="py-4 px-4 text-center">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {listImportDetail.map((item, index) => (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center">{item.idBook.name}</th>
                    <th className="text-center">{item.price}</th>
                    <th className="text-center">{item.amount}</th>
                    <th className="text-center">{item.total}</th>
                  </tr>
                ))}
              </tbody>
              {status === 0 && (
                <tfoot>
                  <tr>
                    <th colSpan={5}>
                      <button
                        onClick={handleSubmit}
                        className="px-2 py-1 rounded-lg bg-blue-400 text-white"
                      >
                        Duyet
                      </button>
                    </th>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ImportDetail;
