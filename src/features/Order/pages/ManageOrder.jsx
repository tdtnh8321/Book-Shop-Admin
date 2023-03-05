import { useState } from "react";
import orderQuery from "../../../queries/OrderQuery";
import ListOrder from "../components/ListOrder";
import OrderDetail from "../components/OrderDetail";
function ManageOrder(props) {
  const [detail, setDetail] = useState({ open: false, data: "" });
  const [status, setStatus] = useState({ status: 1 });
  const listOrderQuery = orderQuery.getListOrderByStatus(status);
  const handleChangeStatsus = (status) => {
    setStatus((prev) => ({ ...prev, status: status }));
  };
  const handleCloseForm = () => {
    setDetail((prev) => ({ ...prev, open: false, data: "" }));
  };
  return (
    <div className="w-full p-5 items-center">
      <div className="w-full flex flex-col">
        <ListOrder
          listOrder={listOrderQuery.data}
          status={status.status}
          setDetail={setDetail}
          handleChangeStatsus={handleChangeStatsus}
        />
        {detail.open === true && (
          <OrderDetail detail={detail} handleCloseForm={handleCloseForm} />
        )}
      </div>
    </div>
  );
}

export default ManageOrder;
