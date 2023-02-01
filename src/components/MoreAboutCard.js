import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const MoreAboutCard = ({ open, toggle, subject, children }) => {
  let classStyle = `bg-fuchsia-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded-xl w-1/3 `;
  let borderStyle =
    "EXPANDED flex font-barlow items-center border bg-zinc-100 border-fuchsia-700 mt-1 relative drop-shadow-2xl rounded w-3/4";
  if (subject === "Highlights") {
    borderStyle =
      "EXPANDED flex font-barlow items-center border bg-zinc-100 border-teal-700 mt-1 relative drop-shadow-2xl rounded w-full";
    classStyle = `bg-teal-700 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded-xl w-full `;
  }

  if (subject === "Functions") {
    borderStyle =
      "EXPANDED flex font-barlow items-center justify-evenly border bg-zinc-100 border-teal-900 mt-1 drop-shadow-2xl rounded w-full";
    classStyle = `bg-teal-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded-xl w-full `;
  }
  console.log("MORE ABOUT CARD");

  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div className={`${classStyle}`} onClick={() => toggle(open)}>
          <p className="text-xl font-barlow  font-semibold ">
            Learn More About {subject}
          </p>
          <div className="text-3xl text-white">
            {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="flex justify-center">
          <div className={`${borderStyle}`}>
            <div className="w-1/6 text-6xl">🤔</div>
            <div className="w-3/4 my-8 text-slate-800 font-thin">
              {" "}
              {children}
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default MoreAboutCard;
