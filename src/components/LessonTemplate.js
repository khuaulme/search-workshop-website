import React from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

const LessonTemplate = ({ title, children }) => {
  return (
    <div className="h-screen flex flex-col justify-between bg-white pt-10 relative font-barlow text-xl text-center">
      <div
        className={`font-bold mb-6 uppercase  text-white bg-slateblue py-2 
          rounded-full border-8 border-green-500 px-4 fixed top-20 left-20`}
      >
        {" "}
        {title}
      </div>
      <div>{children}</div>

      <Link
        to="/Lesson2"
        className="fixed bottom-8 p-4  right-20 z-10 bg-slateblue border-4 border-green-500 text-white px-6 flex justify-evenly items-center cursor-pointer shadow-2xl h-10 rounded-xl "
      >
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
      </Link>
      <Footer />
    </div>
  );
};

export default LessonTemplate;
