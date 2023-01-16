import React from "react";
import { Link } from "react-router-dom";

import { GiBookshelf } from "react-icons/gi";
import { TfiHome } from "react-icons/tfi";

const HeaderLesson = ({ title }) => {
  return (
    <div className="relative flex w-full justify-between items-center bg-slateblue text-white px-20 py-2">
      <div
        className={`font-bold  uppercase  text-green-500 bg-slateblue z-10
          text-2xl`}
      >
        {title}
      </div>
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white font-noto">
        Atlas Search Workshop
      </div>
      <div className="space-x-6 text-white font-thin flex items-center text-4xl">
        <Link to="/" className="">
          <TfiHome />
        </Link>
        <Link to="/resources" className="f">
          <GiBookshelf />
        </Link>
      </div>{" "}
    </div>
  );
};

export default HeaderLesson;
