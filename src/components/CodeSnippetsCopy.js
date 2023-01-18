import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

const CodeSnippetsCopy = ({ copyTextObject, type = "text" }) => {
  let copyText = "";
  if (type === "date") {
    copyText = `{
      index: "default",
      near: {
        path: "released",
        origin: ISODate("1915-09-13T"),
        pivot: 7776000000,
      },
    }`;
  } else if (type === "function") {
    copyText = copyTextObject;
  } else if (type === "line") {
    copyText = copyTextObject;
  } else if (type === "limit") {
    copyText = `{ 12 }`;
  } else copyText = JSON.stringify(copyTextObject, null, 2);

  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className="text-sm relative">
      <CopyToClipboard text={copyText} onCopy={() => setIsCopied(true)}>
        <button className=" text-white absolute right-2 top-2 hover:text-green-500">
          <span>{isCopied ? <HiOutlineDocumentCheck /> : <FaRegCopy />}</span>
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter
        language="javascript"
        style={nightOwl}
        showLineNumbers={"function" === type ? true : false}
      >
        {copyText}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippetsCopy;
