import { useDispatch, useSelector } from "react-redux";
import { clear } from "../importSlice";
import { useState } from "react";
import importQuery from "../../../queries/ImportQuery";
function ListImportItem(props) {
  const importSlice = useSelector((slice) => slice.import);
  const { items, import: importInfo } = importSlice;
  const [isMutation, setIsMutation] = useState(false);
  const dispatch = useDispatch();
  const { mutateAsync: createImport } = importQuery.createImport(isMutation);
  const handleSubmit = async () => {
    const res = await createImport({ items, importInfo });
    console.log(res);
  };
  return (
    <>
      {items.length > 0 && (
        <div className="flex flex-col">
          <div className="w-full flex flex-row justify-between">
            <div className="basis-1/3 mx-5 border-gray-400 rounded-lg flex flex-col">
              <div className="flex flex-col w-full">
                <p className="font-bold">Nhà cung cấp</p>
                <p>{importInfo.name}</p>
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Phone</p>
                <p>{importInfo.phone}</p>
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Email</p>
                <p>{importInfo.email}</p>
              </div>
              <div className="flex flex-col w-full">
                <p className="font-bold">Address</p>
                <p>{importInfo.address}</p>
              </div>
            </div>
            <table className=" basis-2/3 mx-5 border-b border-gray-200">
              <thead>
                <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                  <th className="py-4 px-4 text-center">No</th>
                  <th className="py-4 px-4 text-center">Tên sách</th>
                  <th className="py-4 px-4 text-center">Số lượng</th>
                  <th className="py-4 px-4 text-center">Giá nhập</th>
                  <th className="py-4 px-4 text-center">Thành tiền</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <th className="text-center">{index + 1}</th>
                    <th className="text-center">{item.name}</th>
                    <th className="text-center">{item.amount}</th>
                    <th className="text-center">{item.price}</th>
                    <th className="text-center">{item.total}</th>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={4}>Tổng tiền</th>
                  <th>{importInfo.total}</th>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="w-full flex flex-row justify-evenly mt-10">
            <button
              className="px-2 py-1 rounded-lg bg-blue-500 text-white"
              onClick={handleSubmit}
            >
              Them
            </button>
            <button
              className="px-2 py-1 rounded-lg bg-red-500 text-white"
              onClick={() => dispatch(clear())}
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ListImportItem;
