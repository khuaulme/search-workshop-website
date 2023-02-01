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
import ACSearch from "../images/lessonImages/ACSearch.png";
import CodeSandbox from "../components/CodeSandbox";

const Lesson8 = () => {
  return (
    <LessonTemplate
      title="Lesson 8. Autocom..."
      next="/Lesson9"
      previous="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full px-20 space-x-10">
          <div className="w-1/3 mx-auto my-auto ">
            <img src={ACSearch} alt="autocomplete" />{" "}
          </div>

          <div className=" font-barlow text-base w-2/3 mt-16 text-left">
            My spelling stinks, and I blame Google. <br></br>
            <br></br>For better or for worse, Google has spoiled us.
            Autocomplete, autosuggest, search-as-you-type - whatever you call
            it, we have grown to expect it for so many reasons:
            <div className="flex my-4">
              <ul className="ml-10 my-4 w-1/2">
                <li>⏲️ save time typing and searching</li>
                <li>🔎 correct misspelled words</li>
                <li>🛍️ find alternative products</li>
                <li>🫶 reassure users they are in the right place</li>
              </ul>
              <div className="w-1/3 mx-auto my-auto ">
                <img src={Autocomplete} alt="autocomplete" />{" "}
              </div>
            </div>
            Like loving yet indulgent parents, we want to give our users the
            best search experience possible - and if we have to sacrifice our
            spelling skills to do so, then so be it.
          </div>
        </div>
        <div className=" my-8 text-center">
          In this lesson, we will learn how to implement autocomplete by
          creating a special search index to map our movie data by the special
          autocomplete data type. Then create a new endpoint to be called by our
          application below.
        </div>
        {/***************** End Introduction ********************/}{" "}
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" />
      </div>
    </LessonTemplate>
  );
};

export default Lesson8;
