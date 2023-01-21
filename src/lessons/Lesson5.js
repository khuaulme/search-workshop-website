import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import CodeSandbox from "../components/CodeSandbox";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import SearchOperators from "../components/SearchOperators";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

//images
import SearchBar from "../images/SimpleSearchBar.png";
import InsertEndpoint from "../images/lessonImages/InsertEndpoint.png";

const Lesson5 = () => {
  return (
    <LessonTemplate
      title="Lesson 5. Call API from the Front End"
      next="/Lesson5A"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative mt-10 w-full px-10 space-x-12 items-center justify-center">
          <div className="w-1/3">
            <div className="text-xl text-center font-bold">
              Finally the search bar!
            </div>
            <img src={SearchBar} alt="icon" className="w-1/2 mx-auto" />
            In this quick lesson, let's put our Atlas Search query to good use
            by connecting our backend API to our front end - provided to you in
            the embedded CodeSandbox below. <br></br>
            <br></br>
            Currently, typing anything in the search box will bring you no
            results. 🤷🏽‍♀️ In this short lesson, we will build out this
            functionality in a few quick steps.
          </div>
          <div className="w-1/2 flex flex-col px-10 text-left">
            <div>
              Our main point of integration is in the <KeyWord>Home.js</KeyWord>{" "}
              file found in the src/components directory.
            </div>
            <img
              src={InsertEndpoint}
              alt="home screen"
              className="w-3/4 mx-auto transition duration-1000 ease-in-out transform hover:scale-110 "
            />
            <ul>
              {" "}
              <li>
                ✅ Paste your new App Services HTTP endpoint as the value for{" "}
                <KeyWord type="variable">MOVIES_ENDPOINT </KeyWord>
                variable on <KeyWord>line 13</KeyWord>
              </li>{" "}
              <br></br>
              <li>
                ✅ Just type! Enter "Harry Potter" or "Harrry Pottter" or
                whatever you like.
              </li>
            </ul>
          </div>
        </div>
        {/*******************END TOP ROW ****************************/}
        <div className="2ND ROW flex relative w-full">
          <div className="w-1/3 absolute -right-16 top-6">
            <TipCard side="right">
              Open up the embedded Code Sandbox in the browser gives you your
              own forked sandbox of our Netflix Clone application. Edit away as
              you please!
            </TipCard>
          </div>
          <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson4/?fontsize=14&hidenavigation=1&theme=dark" />
        </div>
        {/*******************END 2ND ROW ****************************/}
        <div className="flex flex-col">
          <div className=" text-green-800 text-xl py-2 px-4 my-6 text-center w-2/5 mx-auto rounded shadow-md shadow-gray-700">
            Try these other operators in your <KeyWord>$search</KeyWord> stage
            in your back-end function to see how the movies change.
          </div>
          <SearchOperators />
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson5;
