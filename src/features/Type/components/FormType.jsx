import { useState } from "react";
import typeQuery from "../../../queries/TypeQuery";

function FormType(props) {
  const { form, setForm } = props;
  const { open, type, data } = form; //data là bản gốc
  const [isMutationEnabled, setIsMutationEnabled] = useState(false); //bật tắt mutation

  const [typeBook, setTypeBook] = useState(
    type === "update"
      ? {
          _id: data._id,
          name: data.name,
        }
      : type === "create" && {
          name: "",
        }
  );

  const handleCloseForm = () => {
    setForm((prev) => ({ ...prev, open: false, type: "", data: "" }));
  };
  const { mutateAsync: createType } = typeQuery.createType(isMutationEnabled);
  const { mutateAsync: updateType } = typeQuery.updateType(isMutationEnabled);
  const handleCreateType = async () => {
    setIsMutationEnabled((prev) => true);
    const res = await createType(typeBook);
    console.log(res.msg);
    setIsMutationEnabled((prev) => false);
  };
  const handleUpdateType = async () => {
    setIsMutationEnabled((prev) => true);
    const res = await updateType(typeBook);
    console.log(res.msg);
    setIsMutationEnabled((prev) => false);
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 flex flex-col w-full min-h-[100vh] items-center bg-[rgb(49,46,126,0.2)]  `}
    >
      <div className="w-[500px] h-auto bg-blue-200 m-auto p-3 rounded-lg">
        <div className="w-full flex flex-row justify-between">
          {type === "detail" ? (
            <p>Thông tin chi tiết của loại</p>
          ) : type === "create" ? (
            <p>Thêm loại mới</p>
          ) : (
            type === "update" && <p>Cập nhật thông tin loại</p>
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
            <p className="basis-1/3">Tên loại</p>
            {type === "detail" ? (
              <p className="basis-2/3">{data.name}</p>
            ) : type === "update" ? (
              <input
                className="basis-2/3"
                type="text"
                value={typeBook.name}
                onChange={(e) =>
                  setTypeBook({ ...typeBook, name: e.target.value })
                }
              />
            ) : (
              type === "create" && (
                <input
                  className="basis-2/3"
                  type="text"
                  value={typeBook.name}
                  onChange={(e) =>
                    setTypeBook({ ...typeBook, name: e.target.value })
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
              onClick={handleUpdateType}
            >
              Lưu
            </button>
          ) : (
            type === "create" && (
              <button
                className="bg-green-500 py-1 px-2 rounded-lg"
                onClick={handleCreateType}
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

export default FormType;
