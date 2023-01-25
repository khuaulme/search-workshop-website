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
import ClauseTable from "../components/ClauseTable";

const Lesson6 = () => {
  return (
    <LessonTemplate
      title="Lesson 6. The Compound Operator: For Fine-Tuned Searches"
      next="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="flex space-x-10">
          <div className="w-1/4 mx-auto">
            <img src={CompoundSearch} alt="compound" />
          </div>
          <div className="mb-8 text-black mx-auto w-2/3 my-auto text-lg">
            Has this ever happened to you? You need to find that newly released
            movie for the kids… is it an animated film or a musical? What was it
            called again?🤔 Or That classic horror flick from the 70s.
            <span className="text-3xl">🧟😱</span> But you just can’t remember
            the name. How frustrating! How frustrating! Times like this, a
            simple search box just won’t do the trick. To find it fast, we may
            need to combine several search parameters together to hone in on
            what we want.<br></br>
            <br></br> In this lesson, we will learn how to combine our{" "}
            <KeyWord>$search</KeyWord> operators together to quickly and easily
            create fine-grained searches using the{" "}
            <KeyWord type="operator">compound</KeyWord> operator.
          </div>
        </div>
        {/*********END 1ST ROW **************/}
        <div className="bg-teal-700 rounded mx-auto w-2/3 h-1 my-8 relative ">
          {" "}
          <div className="w-1/4 absolute -top-20 -right-72">
            <TipCard side="right">
              Search is a funny thing. <br></br>A good search experience also
              interprets a user’s intent!
            </TipCard>
          </div>
        </div>
        <div className="2ND-ROW flex text-lg mx-auto ">
          <div className="w-1/2 text-center overflow-auto">
            To find the horror movie, we might be thinking of several queries
            like this:
            <div className="py-4">
              <div className="flex items-stretch space-x-6">
                <div className="">
                  <CodeSnippetsCopy copyTextObject={horrorObject} />{" "}
                </div>
                <div className="">
                  <CodeSnippetsCopy copyTextObject={textObject} />{" "}
                </div>
                <div className="">
                  <CodeSnippetsCopy copyTextObject={ratingObject} />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="r w-1/2 text-left px-16">
            You might be thinking that maybe we can just combine them and throw
            them all directly into a larger JSON for our{" "}
            <KeyWord>$search</KeyWord> stage... But wait a minute! How important
            are these? Are they equally important? Must-haves? Was this movie
            classified as "horror"? Or maybe was it a "thriller"? <br></br>
            <br></br>As a search developer, you need to anticipate your user's
            intent. Forget what they said. What did they mean? Along with the{" "}
            <KeyWord type="operator">compound</KeyWord> operator, Atlas Search
            provides several <KeyWord type="title">clauses</KeyWord> to give you
            tunable degrees of freedom around your compound search queries.
          </div>
        </div>
        {/*********************END 2ND ROW **************************************/}
        <div className="bg-teal-700 h-1 my-10 mr-auto w-3/5"></div>
        <div className="flex w-full mx-auto text-left space-x-10 mb-10">
          <div className="w-1/2 text-center overflow-auto">
            The <KeyWord type="operator">compound</KeyWord> has the following
            syntax:
            <div className="w-3/4 mx-auto mt-4">
              <CodeSnippetsCopy
                type="function"
                copyTextObject={compoundObject}
              />{" "}
            </div>
            <div className="text-left w-full text-base my-4 ml-20">
              Each compound object will use any (or all) of these clauses:
              <div className="bg-fuchsia-800 h-1 w-full my-2"></div>
              <ClauseTable />
              <div className="bg-fuchsia-800 h-1 w-full mt-2"></div>
            </div>
          </div>
          {/*************END 3RD ROW 1ST COLUMN */}
          <div className="w-1/2 text-center ">
            To find the horror movie, we might be thinking of several queries
            like this:
          </div>
        </div>
        {/* <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" /> */}
      </div>
    </LessonTemplate>
  );
};
export default Lesson6;

const compoundObject = `{
  $search: {
    "index": <index name>, // optional, defaults to "default"
    "compound": {
      <must | mustNot | should | filter>: [ { <clauses> } ],
      "score": <options>
    }
  }
}`;

const horrorObject = {
  text: {
    query: ["Horror"],
    path: "genres",
  },
};

const ratingObject = {
  range: {
    gte: "8",
    lte: 10,
    path: "imdb.rating",
  },
};

const textObject = {
  text: {
    query: "zombies",
    path: ["plot", "fullplot"],
  },
};
