import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import CodeSnippetsCopy from "./CodeSnippetsCopy";

const CodeReveal = ({
  open,
  toggle,
  title,
  negTitle,
  children,
  copyTextObject,
  lesson,
}) => {
  let codeStyle = `bg-green-600 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded `;
  if (lesson === "6") {
    codeStyle = `bg-teal-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl text-xl h-16 rounded `;
  }
  if (lesson === "1") {
    codeStyle = `bg-slate-800 text-white py-2 px-4 flex justify-evenly items-center cursor-pointer shadow-2xl text-xl h-12 rounded `;
  }
  if (lesson === "8") {
    codeStyle = `bg-cyan-700 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl text-xl h-16 rounded `;
  }
  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div className={`${codeStyle}`} onClick={() => toggle(open)}>
          {open ? <div>{negTitle}</div> : <div>{title}</div>}
          <div className="text-3xl text-white ml-4">
            {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </div>
      </div>
      {lesson === "8" ? (
        <Collapse isOpened={open}>
          <CodeSnippetsCopy copyTextObject={copyTextObject} type="function" />
        </Collapse>
      ) : (
        <Collapse isOpened={open}>
          <CodeSnippetsCopy copyTextObject={copyTextObject} />
        </Collapse>
      )}
    </div>
  );
};

export default CodeReveal;
