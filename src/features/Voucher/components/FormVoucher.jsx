import { useState } from "react";
import voucherQuery from "../../../queries/VoucherQuery";
import { toast } from "react-hot-toast";

function FormVoucher(props) {
  const { form, setForm } = props;
  const { open, type, data } = form; //data là bản gốc
  const [isMutationEnabled, setIsMutationEnabled] = useState(false); //bật tắt mutation

  const [voucher, setVoucher] = useState(
    type === "update"
      ? {
          _id: data._id,
          name: data.name,
          reduce: data.reduce,
          qty: data.qty,
        }
      : type === "create" && {
          name: "",
          reduce: 0,
          qty: 0,
        }
  );

  const handleCloseForm = () => {
    setForm((prev) => ({ ...prev, open: false, type: "", data: "" }));
  };
  const { mutateAsync: createVoucher } =
    voucherQuery.createVoucher(isMutationEnabled);
  const { mutateAsync: updateVoucher } =
    voucherQuery.updateVoucher(isMutationEnabled);
  const handleCreateVoucher = async () => {
    setIsMutationEnabled((prev) => true);
    const res = await createVoucher(voucher);
    console.log(res.msg);
    toast.success(res.msg, { position: "top-right" });
    setIsMutationEnabled((prev) => false);
  };
  const handleUpdateVoucher = async () => {
    setIsMutationEnabled((prev) => true);
    const res = await updateVoucher(voucher);
    console.log(res.msg);
    toast.success(res.msg, { position: "top-right" });
    setIsMutationEnabled((prev) => false);
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 flex flex-col w-full min-h-[100vh] items-center bg-[rgb(49,46,126,0.2)]  `}
    >
      <div className="w-[500px] h-auto bg-blue-200 m-auto p-3 rounded-lg">
        <div className="w-full flex flex-row justify-between">
          {type === "detail" ? (
            <p>Thông tin chi tiết Voucher</p>
          ) : type === "create" ? (
            <p>Thêm Voucher mới</p>
          ) : (
            type === "update" && <p>Cập nhật thông Voucher</p>
          )}
          <button onClick={handleCloseForm}>
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
        <div className="flex flex-col">
          <div className="flex flex-row p-1">
            <p className="basis-1/3">Tên Voucher</p>
            {type === "detail" ? (
              <p className="basis-2/3">{data.name}</p>
            ) : type === "update" ? (
              <input
                className="basis-2/3"
                type="text"
                value={voucher.name}
                onChange={(e) =>
                  setVoucher({ ...voucher, name: e.target.value })
                }
              />
            ) : (
              type === "create" && (
                <input
                  className="basis-2/3"
                  type="text"
                  value={voucher.name}
                  onChange={(e) =>
                    setVoucher({ ...voucher, name: e.target.value })
                  }
                />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row p-1">
            <p className="basis-1/3">Giá giảm</p>
            {type === "detail" ? (
              <p className="basis-2/3">{data.reduce}</p>
            ) : type === "update" ? (
              <input
                className="basis-2/3"
                type="number"
                value={voucher.reduce}
                onChange={(e) =>
                  setVoucher({ ...voucher, reduce: e.target.value })
                }
              />
            ) : (
              type === "create" && (
                <input
                  className="basis-2/3"
                  type="number"
                  value={voucher.reduce}
                  onChange={(e) =>
                    setVoucher({ ...voucher, reduce: e.target.value })
                  }
                />
              )
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row p-1">
            <p className="basis-1/3">Số lượng</p>
            {type === "detail" ? (
              <p className="basis-2/3">{data.qty}</p>
            ) : type === "update" ? (
              <input
                className="basis-2/3"
                type="number"
                value={voucher.qty}
                onChange={(e) =>
                  setVoucher({ ...voucher, qty: e.target.value })
                }
              />
            ) : (
              type === "create" && (
                <input
                  className="basis-2/3"
                  type="number"
                  value={voucher.qty}
                  onChange={(e) =>
                    setVoucher({ ...voucher, qty: e.target.value })
                  }
                />
              )
            )}
          </div>
        </div>
        <div className="flex flex-row p-1 justify-around">
          {type === "update" ? (
            <button
              className="bg-green-500 py-1 px-2 rounded-lg"
              onClick={handleUpdateVoucher}
            >
              Lưu
            </button>
          ) : (
            type === "create" && (
              <button
                className="bg-green-500 py-1 px-2 rounded-lg"
                onClick={handleCreateVoucher}
              >
                Thêm
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default FormVoucher;
