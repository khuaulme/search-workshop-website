import React from "react";
import { Link } from "react-router-dom";
import HeaderLesson from "./HeaderLesson";
import Footer from "./Footer";
import DeviceIdentifier from "react-device-identifier";
import NoPhone from "../images/NoPhone.png";

const LessonTemplate = ({ title, next, previous, children }) => {
  let nextText = "Next Lesson";
  let previousText = "Previous Lesson";
  if (next === "/") nextText = "Return Home ";

  return (
    <div className="relative flex flex-col min-h-screen justify-between bg-white font-barlow text-xl text-center">
      <HeaderLesson title={title} />
      <DeviceIdentifier isMobile={true} isTablet={true}>
        <div className="flex space-x-8 px-4 py-2 items-center justify-center my-2 bg-slate-800 ">
          <div className=" text-2xl text-white text-center uppercase">
            Best Viewed on Desktops
          </div>

          <img src={NoPhone} className="w-28" alt="outline"></img>
        </div>
      </DeviceIdentifier>
      <div className="">{children}</div>
      <Link
        to={previous}
        className="fixed bottom-8 p-4  left-20 z-10 bg-slateblue border-4 border-green-500 text-white px-6 flex justify-evenly items-center cursor-pointer shadow-2xl h-10 rounded-xl "
      >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <p className="text-lg font-barlow  font-semibold ">{previousText}</p>
      </Link>
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
