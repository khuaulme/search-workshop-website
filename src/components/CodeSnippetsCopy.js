import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlineDocumentCheck } from "react-icons/hi2";

const CodeSnippetsCopy = ({ copyTextObject }) => {
  const [isCopied, setIsCopied] = useState(false);

  let stageObject = {
    index: "TESTINGIndex",
    autocomplete: {
      query: "cat",
      path: "name_long",
      fuzzy: { maxEdits: 1 },
    },
  };

  const copyText = JSON.stringify(copyTextObject, null, 2);

  return (
    <div className="text-base relative">
      <CopyToClipboard text={copyText} onCopy={() => setIsCopied(true)}>
        <button className=" text-white absolute right-1 top-1 hover:text-green-500">
          <span>{isCopied ? <HiOutlineDocumentCheck /> : <FaRegCopy />}</span>
        </button>
      </CopyToClipboard>

      <SyntaxHighlighter language="javascript" style={atomDark}>
        {copyText}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippetsCopy;
