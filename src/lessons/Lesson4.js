import React from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

const Lesson4 = () => {
  return (
    <LessonTemplate
      title="Lesson 4. Call API from the Front End"
      next="/Lesson5"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        Testing
      </div>
    </LessonTemplate>
  );
};

export default Lesson4;
