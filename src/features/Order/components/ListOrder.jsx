function ListOrder(props) {
  const { listOrder, status, setDetail, handleChangeStatsus } = props;

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-row justify-evenly pr-5">
        <button
          className="bg-blue-400 p-2 rounded-md font-bold text-white"
          onClick={() => handleChangeStatsus(1)}
        >
          Đã đặt
        </button>
        <button
          className="bg-blue-700 p-2 rounded-md font-bold text-white"
          onClick={() => handleChangeStatsus(2)}
        >
          Đã duyệt
        </button>
        <button
          className="bg-yellow-400 p-2 rounded-md font-bold text-white"
          onClick={() => handleChangeStatsus(3)}
        >
          Đang vận chuyển
        </button>
        <button
          className="bg-green-500 p-2 rounded-md font-bold text-white"
          onClick={() => handleChangeStatsus(4)}
        >
          Đã hoàn thành
        </button>
        <button
          className="bg-red-500 p-2 rounded-md font-bold text-white"
          onClick={() => handleChangeStatsus(0)}
        >
          Đã hủy
        </button>
      </div>
      <table className="w-full border-b border-gray-200">
        <thead>
          <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
            <th className="py-4 px-4 text-center">No</th>
            <th className="py-4 px-4 text-center">
              {status == 1
                ? "Ngày đặt"
                : status == 2
                ? "Ngày duyệt"
                : status == 3
                ? "Ngày vận chuyển"
                : status == 4
                ? "Ngày nhận"
                : status == 0 && "Ngày hủy"}
            </th>
            <th className="py-4 px-4 text-center">Khách hàng</th>
            <th className="py-4 px-4 text-center">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {listOrder &&
            listOrder.map((order, index) => {
              //console.log(order);
              return (
                <tr
                  key={index}
                  onClick={() =>
                    setDetail((prev) => ({
                      ...prev,
                      open: true,
                      data: order._id,
                    }))
                  }
                >
                  <th className="text-center">{index + 1}</th>
                  <th className="text-center">{order.date}</th>
                  <th className="text-center">
                    {order.idUser && order.idUser.name}
                  </th>
                  <th className="text-center">{order.total}</th>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ListOrder;
