import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineChevronRight } from "react-icons/hi";

const LessonPreview = ({ open, toggle, title, description, index, icon }) => {
  return (
    <div className="py-2 ">
      <div
        className="bg-zinc-100 py-4 px-10 flex justify-between items-center cursor-pointer shadow-2xl h-24 "
        onClick={toggle}
      >
        <p className="text-xl font-barlow  font-semibold text-rhino">{title}</p>
        <div className="text-3xl text-fuchsia-800">
          {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="bg-zinc-100 text-rhino font-barlow px-12 pb-6 relative">
          <div className="mb-2">{description}</div>
          <img className="w-20 mx-auto" src={icon} alt="icon" />
          <Link
            to={`/Lesson${index + 1}`}
            className="flex  space-x-8  items-center  bg-fuchsia-800 rounded-lg x-32 text-white py-2 px-4 absolute -bottom-2 -right-4"
          >
            <div>Go to lesson {index + 1}.</div>
            <HiOutlineChevronRight />
          </Link>
        </div>
      </Collapse>
    </div>
  );
};

export default LessonPreview;
