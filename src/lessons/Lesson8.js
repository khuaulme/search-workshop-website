import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Autocomplete from "../images/lessonImages/Autocomplete.png";

const Lesson8 = () => {
  return (
    <LessonTemplate
      title="Lesson 8. Autocom..."
      next="/Lesson9"
      previous="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full px-20">
          <div className="w-1/4 mx-auto">
            <img src={Autocomplete} alt="autocomplete" />{" "}
          </div>

          <div className=" font-barlow text-6xl w-full h-1/2 mt-16 text-center">
            Under Construction
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson8;
