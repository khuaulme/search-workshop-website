import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import UnderConstruction from "../images/UnderConstruction.png";

const Lesson7 = () => {
  return (
    <LessonTemplate
      title="Lesson 7. Compound Operator to Combine Queries"
      next="/Lesson8"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <img
          src={UnderConstruction}
          alt="placeholder"
          className="w-1/2 mx-auto"
        />
        <div className=" font-barlow text-8xl w-full h-1/2 mt-16 text-center">
          Under Construction
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson7;
