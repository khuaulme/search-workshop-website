import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const MoreAboutCard = ({ open, toggle, subject, children }) => {
  console.log("MORE ABOUT CARD");

  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div
          className="bg-fuchsia-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded-xl w-1/3 "
          onClick={() => toggle(open)}
        >
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
          <div className="EXPANDED flex font-barlow items-center border bg-zinc-100 border-fuchsia-700 mt-1 relative drop-shadow-2xl rounded w-3/4">
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
