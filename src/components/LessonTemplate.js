import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../images/HomeBtn.png";
import Footer from "./Footer";

const LessonTemplate = ({ title, children }) => {
  return (
    <div className="h-screen flex flex-col justify-between bg-white pt-10 relative font-barlow text-xl text-center">
      <div className="flex justify-between px-10">
        <div
          className={`font-bold mb-6 uppercase text-2xl text-white bg-slateblue py-4 
         px-4 rounded-full border-8 border-green-500`}
        >
          {" "}
          {title}
        </div>
        <div className="bg-fuchsia-800 text-white px-6 flex justify-evenly items-center cursor-pointer shadow-2xl h-8 rounded-xl ">
          <p className="text-lg font-barlow  font-semibold ">Next Lesson</p>
          <div className="text-3xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>{children}</div>

      <Link
        to="/"
        className=" border-8 border-green-500 rounded-full fixed bottom-10  right-20 z-10  w-60 bg-slateblue "
      >
        <img className="" src={HomeButton} alt="btn" />
      </Link>
      <Footer />
    </div>
  );
};

export default LessonTemplate;
