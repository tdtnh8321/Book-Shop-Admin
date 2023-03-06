import { useState } from "react";
import { fetchApiUploadAvatar } from "../../../queries/UploadQuery";
import authorQuery from "../../../queries/AuthorQuery";
import typeQuery from "../../../queries/TypeQuery";
import bookQuery from "../../../queries/BookQuery";
import { toast } from "react-hot-toast";

function FormBook(props) {
  const { form, setForm } = props;
  const { open, type, data } = form; //data là bản gốc

  const [isMutationEnabled, setIsMutationEnabled] = useState(false); //bật tắt mutation
  //copy data gốc sang 1 bản mới dùng cho việc sửa, backup, thêm

  const [book, setBook] = useState(
    type === "update"
      ? {
          _id: data._id || "",
          name: data.name || "",
          image: data.image || "",
          price: data.price || 0,
          idAuthor: data.idAuthor._id || "",
          idType: data.idType._id || "",
          description: data.description || "",
          status: data.status,
        }
      : type === "add" && {
          //_id: "",
          name: "",
          image: "",
          price: 0,
          idAuthor: "",
          idType: "",
          description: "",
          status: 0,
        }
  );

  const handleCloseForm = () => {
    setForm((prev) => ({ ...prev, open: false, type: "", data: "" }));
  };

  const listAuthor = authorQuery.getAllAuthor().data;

  const listType = typeQuery.getAllType().data;

  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      if (!file) {
        // return setData({
        //   ...data,
        //   err: "No files were uploaded.",
        //   success: "",
        // });
        return toast.error("No files were uploaded.", {
          position: "top-right",
        });
      }

      if (file.size > 1024 * 1024) {
        //return setData({ ...data, err: "Size too large.", success: "" });
        return toast.error("Size too large", { position: "top-right" });
      }

      if (file.type !== "image/jpeg" && file.type !== "image/png") {
        // return setData({
        //   ...data,
        //   err: "File format is incorrect.",
        //   success: "",
        // });
        return toast.error("File format is incorrect", {
          position: "top-right",
        });
      }

      let formData = new FormData();
      formData.append("file", file);

      // const res = await axios.post("/api/upload_avatar", formData, {
      //   headers: {
      //     "content-type": "multipart/form-data",
      //     Authorization: token,
      //   },
      // });
      const res = await fetchApiUploadAvatar(formData);
      console.log(res);

      setBook({ ...book, image: res.url });
    } catch (err) {
      //setData({ ...data, err: err.response.data.msg, success: "" });
      console.log(err);
    }
  };
  const { mutateAsync: updateBook } = bookQuery.updateBook(isMutationEnabled);
  const { mutateAsync: createBook } = bookQuery.createBook(isMutationEnabled);
  const handleUpdate = async () => {
    //console.log({ book });
    setIsMutationEnabled((prev) => true);
    const res = await updateBook(book);
    console.log(res.msg);
    toast.success(res.msg, { position: "top-right" });
    setIsMutationEnabled((prev) => false);
  };
  const handleAdd = async () => {
    setIsMutationEnabled((prev) => true);
    const res = await createBook(book);
    console.log(res.msg);
    toast.success(res.msg, { position: "top-right" });
    setIsMutationEnabled((prev) => false);
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex flex-col w-full min-h-[100vh] items-center bg-[rgb(49,46,126,0.2)] ${
          open ? "" : "hidden"
        } `}
      >
        <div className="w-[500px] h-[500px] bg-blue-200 m-auto p-3 rounded-lg">
          <div className="w-full flex flex-row justify-between">
            {type === "detail" ? (
              <p>Thông tin chi tiết của sách</p>
            ) : type === "add" ? (
              <p>Thêm sách mới</p>
            ) : (
              type === "update" && <p>Cập nhật thông tin sách</p>
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
              <p className="basis-1/3">Tên sách</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.name}</p>
              ) : type === "update" ? (
                <input
                  className="basis-2/3"
                  type="text"
                  value={book.name}
                  onChange={(e) => setBook({ ...book, name: e.target.value })}
                />
              ) : (
                type === "add" && (
                  <input
                    className="basis-2/3"
                    type="text"
                    value={book.name}
                    onChange={(e) => setBook({ ...book, name: e.target.value })}
                  />
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Ảnh</p>
              {type === "detail" ? (
                <img src={`${data.image}`} alt="" className="h-32" />
              ) : type === "update" ? (
                <div className="">
                  <img src={`${book.image}`} alt="" className="h-32" />
                  <input
                    type="file"
                    name=""
                    id=""
                    onChange={handleChangeAvatar}
                  />
                </div>
              ) : (
                type === "add" && (
                  <div className="">
                    <img src={`${book.image}`} alt="" className="h-32" />
                    <input
                      type="file"
                      name=""
                      id=""
                      onChange={handleChangeAvatar}
                    />
                  </div>
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Giá bán</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.price}</p>
              ) : type === "update" ? (
                <input
                  className="basis-2/3"
                  type="number"
                  value={book.price}
                  onChange={(e) => setBook({ ...book, price: e.target.value })}
                />
              ) : (
                type === "add" && (
                  <input
                    className="basis-2/3"
                    type="number"
                    value={book.price}
                    onChange={(e) =>
                      setBook({ ...book, price: e.target.value })
                    }
                  />
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Số lượng trong kho</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.qty}</p>
              ) : type === "update" ? (
                <p className="basis-2/3">{data.qty}</p>
              ) : (
                type === "add" && <p className="basis-2/3">0</p>
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Tác giả</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.idAuthor.name}</p>
              ) : type === "update" ? (
                //<input className="basis-2/3" type="text" value={data.qty} />
                <select
                  value={`${book.idAuthor}`}
                  onChange={(e) =>
                    setBook({ ...book, idAuthor: e.target.value })
                  }
                >
                  <option value="">null</option>
                  {listAuthor &&
                    listAuthor.map((author, index) => (
                      <option value={`${author._id}`}>{author.name}</option>
                    ))}
                </select>
              ) : (
                type === "add" && (
                  <select
                    value={`${book.idAuthor}`}
                    onChange={(e) =>
                      setBook({ ...book, idAuthor: e.target.value })
                    }
                  >
                    <option value="">null</option>
                    {listAuthor &&
                      listAuthor.map((author, index) => (
                        <option value={`${author._id}`}>{author.name}</option>
                      ))}
                  </select>
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Thể loại</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.idType.name}</p>
              ) : type === "update" ? (
                <select
                  value={`${book.idType}`}
                  onChange={(e) => setBook({ ...book, idType: e.target.value })}
                >
                  <option value="">null</option>
                  {listType &&
                    listType.map((type, index) => (
                      <option value={`${type._id}`}>{type.name}</option>
                    ))}
                </select>
              ) : (
                type === "add" && (
                  <select
                    value={`${book.idType}`}
                    onChange={(e) =>
                      setBook({ ...book, idType: e.target.value })
                    }
                  >
                    <option value="">null</option>
                    {listType &&
                      listType.map((type, index) => (
                        <option value={`${type._id}`}>{type.name}</option>
                      ))}
                  </select>
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              <p className="basis-1/3">Mô tả</p>
              {type === "detail" ? (
                <p className="basis-2/3">{data.description}</p>
              ) : type === "update" ? (
                <input
                  className="basis-2/3"
                  type="text"
                  value={book.description}
                  onChange={(e) =>
                    setBook({ ...book, description: e.target.value })
                  }
                />
              ) : (
                type === "add" && (
                  <input
                    className="basis-2/3"
                    type="text"
                    value={book.description}
                    onChange={(e) =>
                      setBook({ ...book, description: e.target.value })
                    }
                  />
                )
              )}
            </div>
            <div className="flex flex-row p-1">
              {type === "detail" ||
                (type === "update" && <p className="basis-1/3">Trạng thái</p>)}

              {type === "detail" ? (
                <p className="basis-2/3">
                  {data.status === 0 ? (
                    <p>Khóa</p>
                  ) : data.status === 1 ? (
                    <p>Còn hàng</p>
                  ) : (
                    <p>Hết hàng</p>
                  )}
                </p>
              ) : (
                type === "update" && (
                  <select
                    value={`${book.status}`}
                    onChange={(e) =>
                      setBook({ ...book, status: e.target.value })
                    }
                  >
                    <option value="0">Khóa</option>
                    <option value="1">Còn hàng</option>
                    <option value="2">Hết hàng</option>
                  </select>
                )
              )}
            </div>
            <div className="flex flex-row p-1 justify-around">
              {type === "update" ? (
                <>
                  <button
                    className="bg-green-500 py-1 px-2 rounded-lg"
                    onClick={handleUpdate}
                  >
                    Lưu
                  </button>
                </>
              ) : (
                type === "add" && (
                  <>
                    <button
                      className="bg-green-500 py-1 px-2 rounded-lg"
                      onClick={handleAdd}
                    >
                      Thêm sản phẩm
                    </button>
                  </>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormBook;
