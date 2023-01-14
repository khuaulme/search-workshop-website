import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const MoreAboutCard = (props) => {
  console.log("MORE ABOUT CARD");

  console.log("OPEN", props.open);
  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div
          className="bg-fuchsia-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded-xl w-1/3 "
          onClick={() => props.toggle(props.open)}
        >
          <p className="text-xl font-barlow  font-semibold ">
            Learn More About {props.subject}
          </p>
          <div className="text-3xl text-white">
            {props.open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </div>
      </div>
      <Collapse isOpened={props.open}>
        <div className="flex justify-center">
          <div className="EXPANDED flex font-barlow items-center border bg-zinc-100 border-fuchsia-700 mt-1 relative drop-shadow-2xl rounded w-3/4">
            <div className="w-1/6 text-6xl">🤔</div>
            <div className="w-3/4 my-8 text-slate-800 font-thin">
              {" "}
              {props.children}
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default MoreAboutCard;
