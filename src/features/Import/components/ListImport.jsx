function ListImport(props) {
  const { listImport, handleSetOpen } = props;

  return (
    <table className="w-full border-b border-gray-200">
      <thead>
        <tr className="text-sm font-medium text-gray-700 border-b border-gray-200">
          <th className="py-4 px-4 text-center">No</th>
          <th className="py-4 px-4 text-center">Date</th>
          <th className="py-4 px-4 text-center">Total</th>
          <th className="py-4 px-4 text-center">Admin</th>
        </tr>
      </thead>
      <tbody>
        {listImport &&
          listImport.map((item, index) => (
            <tr key={index} onClick={() => handleSetOpen(item._id)}>
              <th className="text-center">{index + 1}</th>
              <th className="text-center">{item.date}</th>
              <th className="text-center">{item.total}</th>
              <th className="text-center">{item.idAdmin.name}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ListImport;
