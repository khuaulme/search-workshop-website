import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import CodeSandbox from "../components/CodeSandbox";
import TipCard from "../components/TipCard";
import Step from "../components/Step";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

//images
import SearchBar from "../images/lessonImages/SearchBar.png";
import InsertEndpoint from "../images/lessonImages/InsertEndpoint.png";
import SearchOperators from "../components/SearchOperators";

const Lesson4 = () => {
  return (
    <LessonTemplate
      title="Lesson 4. Call API from the Front End"
      next="/Lesson5"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative mt-10 w-full space-x-12 items-center justify-center">
          <div className="w-1/4">
            <div className="text-xl text-center font-bold">
              Finally an actual search bar!
            </div>
            <br></br>We are going to put our Atlas Search query to use in an
            application using the embedded Code Sandbox below. Opening up the
            embedded Code Sandbox in the browser will give you your own forked
            sandbox of our Netflix Clone application. You can edit away as you
            please!<br></br>
            <br></br>
            Currently, typing anything in the search box will bring you no
            results. 🤷🏽‍♀️ In this short lesson, we will build out this
            functionality.
          </div>
          <div className="w-1/3 flex flex-col p-4 text-center">
            <div>
              Our main point of integration is in the <KeyWord>Home.js</KeyWord>{" "}
              file found in the src/components directory. <br></br>Paste your
              new App Services HTTP endpoint as the value for MOVIES_ENDPOINT
              variable on <KeyWord>line 13</KeyWord>
            </div>
            <img src={InsertEndpoint} alt="home screen" className="p-4" />
            <div></div>
          </div>
          <div className="w-1/3 flex flex-col p-4 text-center">
            <div>
              Now perform the same search for{" "}
              <KeyWord type="word">“Harrry Pottter”</KeyWord>. Et voilà! You can
              now search movies about ‘zombies’ or ‘basketball’ or your favorite
              Avenger characters! If it’s in the sample_mflix.movies collection,
              Atlas Search will bring it to you!
              <img
                src={SearchBar}
                alt="bar"
                className="w-1/2 items-center ml-auto mt-8"
              />
            </div>
          </div>
        </div>
        {/*******************END TOP ROW ****************************/}
        <div className="2ND ROW flex relative w-full">
          <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson4/?fontsize=14&hidenavigation=1&theme=dark" />
        </div>
        {/*******************END 2ND ROW ****************************/}
        <SearchOperators />
      </div>
    </LessonTemplate>
  );
};

export default Lesson4;
