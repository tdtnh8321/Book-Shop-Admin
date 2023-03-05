function FilterBook(props) {
  const {
    params,
    handleChangeSearch,
    handleChangeAuthor,
    handleChangeType,
    listAuthor,
    listType,
    onChangeForm,
  } = props;

  return (
    <div className="flex flex-col mb-5">
      <div className="flex flex-row justify-around">
        <input
          type="text"
          className="basis-1/3 rounded border-2 border-double border-blue-300"
          value={params.search}
          onChange={(e) => handleChangeSearch(e.target.value)}
        />
        <div className="basis-1/3 flex flex-row justify-center">
          <p>Lọc theo tác giả: </p>
          <select
            className="border-2 border-double border-blue-300"
            value={params.author}
            onChange={(e) => {
              console.log(e.target.value);
              handleChangeAuthor(e.target.value);
            }}
          >
            <option value="">all</option>
            {listAuthor &&
              listAuthor.map((author, index) => (
                <option key={index} value={`${author.slug}`}>
                  {author.name}
                </option>
              ))}
          </select>
        </div>

        <div className="basis-1/3 flex flex-row justify-center">
          <p>Lọc theo loại: </p>
          <select
            className="border-2 border-double border-blue-300"
            value={params.type}
            onChange={(e) => {
              console.log(e.target.value);
              handleChangeType(e.target.value);
            }}
          >
            <option value="">all</option>
            {listType &&
              listType.map((type, index) => (
                <option key={index} value={`${type.slug}`}>
                  {type.name}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="w-full flex flex-row justify-end pr-20 mt-5">
        <button
          className="bg-blue-500 p-2 rounded-md font-bold text-white"
          onClick={() =>
            onChangeForm((prev) => ({
              ...prev,
              open: true,
              type: "add",
              data: "",
            }))
          }
        >
          + Create new Book
        </button>
      </div>
    </div>
  );
}

export default FilterBook;
