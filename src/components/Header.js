import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/Logo_Spring-Green.png";

import { GiBookshelf } from "react-icons/gi";
import { TfiHome } from "react-icons/tfi";

//

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <Link to="/" className="flex text-2xl">
        <img className=" my-auto py-2 h-16" src={LOGO} alt="logo" />
      </Link>
      <Link to="/Lesson1" className="flex text-3xl text-white font-noto">
        Atlas Search Workshop
      </Link>
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

export default Header;
