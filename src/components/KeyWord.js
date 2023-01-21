const KeyWord = ({ children, type = "stage" }) => {
  let classStyle = "px-2 py-1 bg-black text-white rounded mx-1";
  if (type === "button") {
    classStyle =
      "px-2 py-1 bg-green-600 text-white rounded mx-1 uppercase tx-lg shadow-sm shadow-green-900 whitespace-nowrap";
  }

  if (type === "operator") {
    classStyle = "px-2 py-1 bg-rhino text-white rounded mx-1 whitespace-nowrap";
  }

  if (type === "line") {
    classStyle =
      "px-2 py-1 bg-teal-800 text-white rounded mx-1 whitespace-nowrap";
  }

  if (type === "tab") {
    classStyle =
      "px-2 py-1 text-green-800 font-bold rounded border border-green-900 uppercase tx-lg whitespace-nowrap";
  }

  if (type === "word") {
    classStyle =
      "px-1 py-1 text-indigo-800 font-bold rounded text-lg whitespace-nowrap";
  }

  if (type === "title") {
    classStyle = "px-1 py-1 text-teal-800 font-bold  text-xl whitespace-nowrap";
  }

  if (type === "code" || type === "variable") {
    return (
      <span className="bg-indigo-100 border border-indigo-800 p-1 rounded ">
        <code>{children}</code>
      </span>
    );
  }

  return <span className={`${classStyle}`}>{children}</span>;
};

export default KeyWord;
