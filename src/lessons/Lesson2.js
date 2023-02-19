import React from "react";

//components
import LessonTemplate from "../components/LessonTemplate";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";

import SearchOperators from "../components/SearchOperators";

//images

import Pipeline from "../images/lessonImages/Pipeline.png";

import Typos from "../images/Typos.gif";

const Lesson2 = () => {
  return (
    <LessonTemplate
      title="Lesson 2. Creating Basic Search Queries"
      next="/Lesson3"
      previous="/Lesson1"
    >
      <div className="flex flex-col LESSON PAGE font-barlow text-base justify-between px-20 mt-10">
        <div className="flex space-x-10">
          <div className="w-1/4 mx-auto">
            <img src={Pipeline} alt="aggregation" />
          </div>
          <div className="mb-8 text-black mx-auto w-1/2 my-auto text-lg">
            The next step in building our movie 📽️ search engine is to build our
            queries. Atlas Search queries take the form of a MongoDB aggregation
            using <KeyWord>$search</KeyWord> as always the first stage.
            <br></br>
            <br></br>
            If you are not familiar with aggregations in MongoDB, they are a
            very powerful tool where your data documents are transformed as they
            pass through different stages in a pipeline.{" "}
            <span className="text-green-600 text-xl">Atlas Search </span>{" "}
            queries are simply another aggregation pipeline where{" "}
            <KeyWord>$search</KeyWord> is always the first stage.
          </div>

          <div className="w-1/5">
            <TipCard side="right">
              <div className="flex items-center">
                <div>
                  You do not have to use the pipeline builder tool for this
                  stage, but we really love the easy-to-use user interface.
                  Plus, the ability to preview the results by stage makes
                  troubleshooting a snap! 🫰
                  <br></br>
                  <br></br>Try out the Pipeline Builder in Compass for its
                  abilities to save pipelines.
                </div>

                <div classname="object-contain w-16 h-auto">
                  <img
                    src={Compass}
                    alt="compass"
                    classname="object-contain w-16 h-auto"
                  />
                </div>
              </div>
            </TipCard>
          </div>
        </div>
        <div className="flex">
          <div className="w-full relative ">
            <Step title="Stage 1. $search" color="bg-fuchsia-800">
              <div className=" flex my-4 space-x-6 justify-around ">
                {/****************DESCRIBE OUR SEARCH STAGE ************/}

                <div className="w-1/3 text-left my-auto font-barlow px-8 py-4 ">
                  To build our our first search query, let’s use the Aggregation
                  Pipeline builder in the Atlas UI. Under the{" "}
                  <KeyWord type="tab">Collections</KeyWord> tab, click on
                  <KeyWord type="tab">Aggregation</KeyWord>. Here you will be
                  able to select your aggregation stage from the drop down menu.
                  let's keep it simple and just look for{" "}
                  <KeyWord type="title">Harry Potter</KeyWord> in the{" "}
                  <KeyWord type="variable">fullplot</KeyWord> field.
                  <br></br>
                  <br></br> So for the first stage, select the{" "}
                  <KeyWord>$search</KeyWord>
                  aggregation operator to query for the text{" "}
                  <span className="text-lg text-purple-700">
                    "Harry Potter"
                  </span>{" "}
                  in the
                  <span className="text-lg text-green-700"> fullplot</span>{" "}
                  field path.
                  <div className="w-3/4 mx-auto">
                    <CodeSnippetsCopy copyTextObject={basicText} />
                  </div>
                </div>

                <div className="p-2 w-1/2 object-contain my-auto">
                  <img
                    src={"https://kwh-demos.s3.amazonaws.com/FuzzyMatching.gif"}
                    alt="basic"
                    className="border shadow shadow-slate-800 border-slate-700 "
                  />
                </div>
              </div>
              <div className="LINE bg-teal-600 h-2 w-2/3 ml-auto rounded-2xl my-10 relative">
                {" "}
                <div className="absolute top-0 -right-10 w-1/4">
                  <TipCard side="right">
                    <div className="flex items-center">
                      <KeyWord type="variable">maxEdits</KeyWord> is the maximum
                      number of single-character edits required to match the
                      specified search term. Can be 1 or 2.
                    </div>
                  </TipCard>
                </div>
              </div>
              <div className="FUZZY w-full text-left items-center flex mx-auto px-40">
                <div className="flex w-1/2">
                  <div className="w-full object-contain px-8 z-10">
                    <img src={Typos} alt="typos" />
                  </div>
                  <div className="w-1/3 pt-20 -skew-y-12 ">
                    <div className="bg-teal-600 py-8  text-white text-center rounded mt-1 text-lg space-x-4 ">
                      <span className="text-sun text-2xl italic">FUZZY?</span>
                      {"  "}
                      <div className="uppercase"> What is this sorcery?</div>
                      <span className="text-4xl">🪄</span>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 py-4 px-20 text-center">
                  {" "}
                  Our first bit of magic is the{" "}
                  <span className="text-xl text-green-600">fuzzy</span> option.
                  Notice that if you misspell "Harry" or "Potter," the $search
                  operator will return no movies. Simply adding the line
                  <div className="w-1/2 mx-auto">
                    <CodeSnippetsCopy
                      type="line"
                      copyTextObject={`fuzzy: { "maxEdits":1 }`}
                    ></CodeSnippetsCopy>{" "}
                  </div>
                  to our text operator enables finding similar terms.
                  <div className="w-2/3 mx-auto  py-4">
                    <CodeSnippetsCopy copyTextObject={fuzzyText} />
                  </div>
                </div>

                {/*  */}
              </div>
              <div className="relative">
                <div className="w-1/4 absolute -bottom-36 -left-10">
                  <TipCard className="" side="left">
                    Remember! <KeyWord>$search </KeyWord> is{" "}
                    <span className="font-italic uppercase">always</span> the
                    1st stage in an aggregation pipeline.
                    <div className="text-xs">
                      Learn more about aggregations with{" "}
                      <a
                        className="text-green-600"
                        href="https://www.practical-mongodb-aggregations.com/"
                      >
                        Practical MongoDB Aggregations{" "}
                      </a>
                    </div>{" "}
                  </TipCard>
                </div>
              </div>
              <div className="LINE bg-teal-600 h-2 w-2/3 mr-auto rounded-2xl mb-10"></div>
            </Step>
            <div className="flex flex-col mb-10">
              <div className=" text-green-900 text-lg py-2 px-4 text-center w-1/2 mx-auto rounded shadow-md shadow-gray-700">
                Because we have indexed all of our fields dynamically, we can{" "}
                <span className="font-italic">immediately </span>
                search across a variety of different data types in almost all of
                the fields in our movie documents.<br></br>
                <br></br> Here are some other useful <KeyWord>$search</KeyWord>{" "}
                operators. Try them out and compare results. Notice you can
                search across numbers and dates, as well.
              </div>
              <SearchOperators />
            </div>
            <div className="CONCLUSION px-20 my-10 text-xl flex space-x-20 text-left ">
              <div className="w-1/2 px-8">
                <div>
                  Congratulations! In no time, you created your first{" "}
                  <KeyWord type="title">Atlas Search Query</KeyWord>!<br></br>
                  In spite of typos, we were also able to find exactly the right
                  movies we are looking for....<br></br> <br></br>and we can can
                  even find movies without any text at all! Using different
                  operators like <KeyWord type="operator">near</KeyWord> and{" "}
                  <KeyWord type="operator">range</KeyWord>, we looked through
                  the 23k movies in our database based on ratings or year - all
                  with the same Search index.{" "}
                  <div className="text-6xl text-center mt-8">🤯</div>
                </div>
              </div>
              <div className="w-1/2 px-10">
                Let's take the following basic Search query using the{" "}
                <KeyWord type="operator">text</KeyWord> into the next lesson
                where we will finish build out our Search aggregation pipeline.
                <div className="w-2/3 mx-auto  py-4">
                  <CodeSnippetsCopy copyTextObject={fuzzyText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson2;

const basicText = {
  index: "default",
  text: {
    query: "Harry Potter",
    path: "fullplot",
  },
};
const fuzzyText = {
  index: "default",
  text: {
    query: "Harry Potter",
    path: "fullplot",
    fuzzy: { maxEdits: 1 },
  },
};
