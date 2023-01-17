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
}) => {
  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div
          className="bg-green-600 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded "
          onClick={() => toggle(open)}
        >
          {open ? <div>{negTitle}</div> : <div>{title}</div>}
          <div className="text-3xl text-white ml-4">
            {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </div>
      </div>
      <Collapse isOpened={open}>
        <CodeSnippetsCopy copyTextObject={copyTextObject} />
      </Collapse>
    </div>
  );
};

export default CodeReveal;
