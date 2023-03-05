import accountQuery from "../../../queries/AccountQuery";
import ListAcount from "../components/ListAccount";

function ManageEmployee(props) {
  const listAccountQuery = accountQuery.getListAccount(0);

  return <ListAcount type="employee" listAccount={listAccountQuery.data} />;
}

export default ManageEmployee;
