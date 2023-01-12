import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const LessonPreview = ({ open, toggle, title, description }) => {
  return (
    <div className="pt-10">
      <div
        className="bg-zinc-100 py-12 px-10 flex justify-between items-center cursor-pointer shadow-2xl "
        onClick={toggle}
      >
        <p className="text-2xl  text-black font-semibold">{title}</p>
        <div className="text-3xl font-red text-green-500">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-white text-black px-12 pb-20">{description}</div>
      </Collapse>
    </div>
  );
};

export default LessonPreview;
