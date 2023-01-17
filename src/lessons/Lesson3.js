import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

const Lesson3 = () => {
  return (
    <LessonTemplate title="Lesson 3. Create a RESTful API" next="/Lesson4">
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex">
          <div className="w-1/4">
            Now that we have the heart of our movie search engine in the form of
            an aggregation pipeline, how will we use it in an application? 🤔
            <br></br>
            <br></br>There are lots of ways to do this, but I found the easiest
            was to simply create a RESTful API to expose this data - and for
            that, I leveraged Atlas App Services.
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson3;
