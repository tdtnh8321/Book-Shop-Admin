import { useSelector } from "react-redux";

function ListAcount(props) {
  const { type, listAccount } = props;
  const authSlice = useSelector((slice) => slice.auth);
  return (
    <>
      {listAccount && (
        <div className="w-full p-5 flex flex-col">
          <div className="w-full text-center my-5 font-bold">
            {type == "employee"
              ? "Danh sách nhân viên"
              : "Danh sách khách hàng"}
          </div>
          <table className="w-full border-b border-gray-200">
            <thead>
              <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                <th className="py-4 px-4 text-center">No</th>
                <th className="py-4 px-4 text-center">Tên</th>
                <th className="py-4 px-4 text-center">Email</th>
                <th className="py-4 px-4 text-center">Giới tính</th>
                <th className="py-4 px-4 text-center">Ngày sinh</th>
                <th className="py-4 px-4 text-center">Số điện thoại</th>
                <th className="py-4 px-4 text-center">Địa chỉ</th>
                <th className="py-4 px-4 text-center">
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
              {listAccount.map((account, index) => (
                <tr key={index}>
                  <th className="text-center">{index + 1}</th>
                  <th className="text-center">{account.name}</th>
                  <th className="text-center">
                    {type == "employee" && account.email}
                  </th>
                  <th className="text-center">
                    {type == "employee" && account.gender == 1
                      ? "Nam"
                      : account.gender == 2
                      ? "Nữ"
                      : "Khác"}
                  </th>
                  <th className="text-center">
                    {type == "employee" && account.date}
                  </th>
                  <th className="text-center">
                    {type == "employee" && account.phone}
                  </th>
                  <th className="text-center">
                    {type == "employee" && account.address}
                  </th>
                  <th className="text-center">
                    {type == "employee" &&
                      account._id != authSlice.user._id && (
                        <div className="">
                          <button className="p-2 rounded-md bg-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                              />
                            </svg>
                          </button>
                          <button className="p-2 rounded-md bg-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                    {type == "customer" && (
                      <div className="">
                        <button className="p-2 rounded-md bg-gray-200">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default ListAcount;
