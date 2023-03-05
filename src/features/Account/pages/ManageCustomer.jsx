import accountQuery from "../../../queries/AccountQuery";
import ListAcount from "../components/ListAccount";
function ManageCustomer(props) {
  const listAccountQuery = accountQuery.getListAccount(1);

  return <ListAcount type="customer" listAccount={listAccountQuery.data} />;
}

export default ManageCustomer;
