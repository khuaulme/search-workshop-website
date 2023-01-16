import React, { useState } from "react";

const CodeSnippetsCopy = ({ copyText }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(copyText)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input type="text" value={copyText} readOnly />
      <button
        onClick={handleCopyClick}
        className="px-2 py-2 text-white bg-green-600 rounded"
      >
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
};

export default CodeSnippetsCopy;
