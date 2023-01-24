import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import CompoundSearch from "../images/lessonImages/CompoundSearch.png";
import CodeSandbox from "../components/CodeSandbox";

const Lesson6 = () => {
  return (
    <LessonTemplate
      title="Lesson 6. The Compound Operator: For Fine-Tuned Searches"
      next="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex space-x-10">
          <div className="w-1/4 mx-auto">
            <img src={CompoundSearch} alt="compound" />
          </div>
          <div className="mb-8 text-black mx-auto w-2/3 my-auto text-lg">
            Has this ever happened to you? You need to find that newly released
            movie for the kids… is it an animated film or a musical? 🤔 Or
            you’re trying to find that old crime thriller with Daniel Craig
            whose name you can’t quite remember…
            <span className="text-3xl">🕵️‍♂️</span> Times like this, a simple
            search box just won’t do the trick. To find it fast, we may need to
            combine several search parameters together to hone in on what we
            want.<br></br>
            <br></br> In this lesson, we will learn how to combine our{" "}
            <KeyWord>$search</KeyWord> operators together to quickly and easily
            create fine-grained searches using the{" "}
            <KeyWord type="operator">compound</KeyWord> operator.
          </div>
        </div>
        {/*********END 1ST ROW **************/}
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" />
      </div>
    </LessonTemplate>
  );
};
export default Lesson6;
