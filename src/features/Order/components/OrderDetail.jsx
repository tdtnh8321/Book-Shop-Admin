import { useState } from "react";
import orderQuery from "../../../queries/OrderQuery";
import { useSelector } from "react-redux";

function OrderDetail(props) {
  const { detail, handleCloseForm } = props;
  const { data: id } = detail; //idOrder

  const getOrderQuery = orderQuery.getOrder(id);
  const order = getOrderQuery.data;

  const getListOrderDetailQuery = orderQuery.getListOrderDetail(id);
  const orderDetails = getListOrderDetailQuery.data;

  const [isMutationEnabled, setIsMutationEnabled] = useState(false); //bật tắt mutation
  const { mutateAsync: updateStatus } =
    orderQuery.changeStatus(isMutationEnabled);

  const auth = useSelector((slice) => slice.auth).user;
  const changeStatus = async (status) => {
    const params = {
      idOrder: id,
      status,
      idAdmin: auth._id,
    };
    setIsMutationEnabled((prev) => true);
    const res = await updateStatus(params);
    setIsMutationEnabled((prev) => false);
  };
  return (
    <>
      {order && orderDetails && (
        <div
          className={`fixed top-0 left-0 right-0 flex flex-col w-full min-h-[100vh] items-center bg-[rgb(49,46,126,0.2)]  `}
        >
          <div className="w-[700px] h-auto bg-blue-200 m-auto p-3 rounded-lg">
            <div className="w-full flex flex-row justify-between">
              <p>Chi tiết hóa đơn</p>
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
            <div className="w-full flex flex-col font-mono">
              <div className="flex flex-row justify-between">
                <div className="basis-1/2 flex flex-col mx-5">
                  <div className="flex flex-row justify-between">
                    <p>Tên người mua</p>
                    <p>{order.idUser.name}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Phone</p>
                    <p>{order.idUser.phone}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Address</p>
                    <p>{order.idUser.address}</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <p>Ghi chú</p>
                    <p>{order.note}</p>
                  </div>
                </div>
                {order.status !== 1 && order.status !== 0 && (
                  <div className="basis-1/2 flex flex-col mx-5">
                    <div className="flex flex-row justify-between">
                      <p>Admin duyệt</p>
                      <p>{order.idAdmin.name}</p>
                    </div>
                  </div>
                )}
              </div>
              <table className="w-full border-b border-gray-200">
                <thead>
                  <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
                    <th className="py-4 px-4 text-center">No</th>
                    <th className="py-4 px-4 text-center">Tên sách</th>
                    <th className="py-4 px-4 text-center">Giá bán</th>
                    <th className="py-4 px-4 text-center">Số lượng</th>
                    <th className="py-4 px-4 text-center">Số tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {orderDetails.map((detail, index) => (
                    <tr key={index}>
                      <th className="text-center">{index + 1}</th>
                      <th className="text-center">{detail.idBook.name}</th>
                      <th className="text-center">{detail.price}</th>
                      <th className="text-center">{detail.amount}</th>
                      <th className="text-center">{detail.total}</th>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={4}>Tổng tiền</th>
                    <th>{order.total}</th>
                  </tr>
                </tfoot>
              </table>
              <div className="flex flex-row justify-center my-5">
                {order.status == 1 && (
                  <button
                    className="px-5 py-2 bg-blue-700 rounded-lg text-white"
                    onClick={() => changeStatus(2)}
                  >
                    Duyệt
                  </button>
                )}
                {order.status == 2 && (
                  <button
                    className="px-5 py-2 bg-yellow-400 rounded-lg text-white"
                    onClick={() => changeStatus(3)}
                  >
                    Chuyển đến đơn vị vận chuyển
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderDetail;
