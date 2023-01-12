import React from "react";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const LessonPreview = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-10 ">
      <div
        className="bg-zinc-100 py-8 px-10 flex justify-between items-center cursor-pointer shadow-2xl h-36 "
        onClick={toggle}
      >
        <p className="text-2xl  text-black font-semibold">{title}</p>
        <div className="text-3xl font-red text-fuchsia-800">
          {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-zinc-100 text-black px-12 pb-20">{description}</div>
      </Collapse>
    </div>
  );
};

export default LessonPreview;
