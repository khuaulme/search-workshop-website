import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../images/Logo_Spring-Green.png";

const Header = () => {
  return (
    <div className="flex w-full justify-between items-center bg-slateblue text-white px-20">
      <Link to="/" className="flex text-2xl">
        <img className=" my-auto py-2 h-16" src={LOGO} alt="logo" />
      </Link>

      <Link to="/Lesson1" className="flex text-3xl text-white font-noto">
        Atlas Search Workshop
      </Link>

      <Link to="/resources" className="flex text-xl text-white font-sans">
        Additional Search Resources
      </Link>
    </div>
  );
};

export default Header;
