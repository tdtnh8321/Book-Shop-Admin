import { useState } from "react";
import voucherQuery from "../../../queries/VoucherQuery";
import { toast } from "react-hot-toast";

function ListVoucher(props) {
  const { listVoucher, setForm } = props;
  const [isMutationEnabled, setIsMutationEnabled] = useState(false); //bật tắt mutation

  const { mutateAsync: deleteVoucher } =
    voucherQuery.deleteVoucher(isMutationEnabled);

  const handleDeleteVoucher = async (id) => {
    setIsMutationEnabled((prev) => true);
    const res = await deleteVoucher(id);
    console.log(res.msg);
    toast.success(res.msg, { position: "top-right" });
    setIsMutationEnabled((prev) => false);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-end pr-5">
        <button
          className="bg-blue-500 p-2 rounded-md font-bold text-white"
          onClick={() =>
            setForm((prev) => ({
              ...prev,
              open: true,
              type: "create",
              data: "",
            }))
          }
        >
          + Create new Voucher
        </button>
      </div>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="py-4 px-4 text-center">No</th>
            <th className="py-4 px-4 text-center">Voucher</th>
            <th className="py-4 px-4">
              <div className="w-full flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {listVoucher &&
            listVoucher.map((voucher, index) => (
              <tr key={index}>
                <th className="text-center">{index + 1}</th>
                <th className="flex flex-col items-center py-4 pl-10 cursor-pointer">
                  <p
                    className="w-full text-center text-lg font-semibold text-gray-700"
                    onClick={() =>
                      setForm((prev) => ({
                        ...prev,
                        open: true,
                        type: "detail",
                        data: voucher,
                      }))
                    }
                  >
                    {voucher.name}
                  </p>
                </th>
                <th>
                  <div className="flex flex-row justify-around items-center text-gray-500 gap-x-2">
                    <button
                      className="p-2 rounded-md bg-gray-200"
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          open: true,
                          type: "update",
                          data: voucher,
                        }))
                      }
                    >
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
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </button>
                    <button
                      className="p-2 rounded-md bg-gray-200"
                      onClick={() => handleDeleteVoucher(voucher._id)}
                    >
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
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListVoucher;
