const KeyWord = ({ children, type = "stage" }) => {
  let classStyle = "px-2 py-1 bg-black text-white rounded mx-1";
  if (type === "button") {
    classStyle =
      "px-2 py-1 bg-green-600 text-white rounded mx-1 uppercase tx-lg ";
  }

  if (type === "word") {
    classStyle = "px-2 py-1 text-indigo-700 font-bold rounded  uppercase tx-lg";
  }

  if (type === "code") {
    return (
      <span className="bg-indigo-100 px-1 rounded py-1">
        <code>{children}</code>
      </span>
    );
  }

  return <span className={`${classStyle}`}>{children}</span>;
};

export default KeyWord;
