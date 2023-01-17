import React from "react";
import { Link } from "react-router-dom";
import HeaderLesson from "./HeaderLesson";
import Footer from "./Footer";

const LessonTemplate = ({ title, next, children }) => {
  let nextText = "Next Lesson";
  if (next === "/") nextText = "Return Home ";

  return (
    <div className="relative flex flex-col min-h-screen justify-between bg-white font-barlow text-xl text-center">
      <HeaderLesson title={title} />
      <div className="">{children}</div>
      <Link
        to={next}
        className="fixed bottom-8 p-4  right-20 z-10 bg-slateblue border-4 border-green-500 text-white px-6 flex justify-evenly items-center cursor-pointer shadow-2xl h-10 rounded-xl "
      >
        <p className="text-lg font-barlow  font-semibold ">{nextText}</p>
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
      <Footer className="mt-auto" />
    </div>
  );
};

export default LessonTemplate;
