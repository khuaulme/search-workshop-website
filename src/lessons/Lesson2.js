import React, { useState } from "react";

//components
import LessonTemplate from "../components/LessonTemplate";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";

import SearchOperators from "../components/SearchOperators";

//images
import BasicFuzzy from "../images/Lesson2/BasicFuzzy.gif";
import AggSlide from "../images/Lesson2/AggSlide.png";

const Lesson2 = () => {
  return (
    <LessonTemplate
      title="Lesson 2. Creating Basic Search Queries"
      next="/Lesson3"
    >
      <div className="flex flex-col LESSON PAGE font-barlow text-base justify-between px-20 mt-10">
        <div className="flex">
          <div className="w-1/4 mx-auto">
            <img
              src={AggSlide}
              alt="aggregation"
              className="shadow shadow-gray-800"
            />
          </div>
          <div className="mb-8 text-black mx-auto w-1/3 my-auto">
            The next step in building our movie 📽️ search engine is to build our
            queries. Atlas Search queries take the form of a MongoDB aggregation
            using <KeyWord>$search</KeyWord> as always the first stage.
            <br></br>
            <br></br>
            If you are not familiar with aggregations in MongoDB, they are a
            very powerful tool where your data documents are transformed as they
            pass through different stages.{" "}
            <span className="text-green-600 text-xl">Atlas Search </span>{" "}
            queries are simply another aggregation pipeline where{" "}
            <KeyWord>$search</KeyWord> is always the first stage.
          </div>

          <div className="w-1/4">
            <div>
              To build our pipeline, let’s use the Aggregation Pipeline builder
              in the Atlas Collections tab.
            </div>
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
              <div className=" flex mt-2 space-x-4 justify-around ">
                <div className="w-1/4 absolute -top-24 left-0">
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
                <div className="w-1/4 text-left my-auto">
                  Because we have indexed all of our fields dynamically, we can{" "}
                  <span className="font-italic">immediately </span>
                  search across a variety of different data types in almost all
                  of the fields in our movie documents. For the time being,
                  let's keep it simple and just look for Harry in the fullplot
                  field.<br></br>
                  <br></br> So for the first stage, select the{" "}
                  <KeyWord>$search</KeyWord>
                  aggregation operator to search for the text{" "}
                  <span className="text-lg text-purple-700">
                    "Harry Potter"
                  </span>{" "}
                  in the
                  <span className="text-lg text-green-700"> fullplot</span>{" "}
                  field path.
                  <CodeSnippetsCopy copyTextObject={basicText} />
                </div>

                <div className="p-2 w-2/5 object-contain my-auto">
                  <img
                    src={BasicFuzzy}
                    alt="basic"
                    className="border shadow shadow-slate-800 border-slate-700 "
                  />
                </div>
                <div className="w-1/4 text-left">
                  Our first bit of magic is the{" "}
                  <span className="text-xl text-green-600">fuzzy</span> option.
                  Notice that if you misspell "Harry" or "Potter," the $search
                  operator will return no movies. Simply adding the
                  <KeyWord>fuzzy</KeyWord> field to our text operator enables
                  finding similar terms.
                  <CodeSnippetsCopy copyTextObject={fuzzyText} />
                </div>
              </div>
            </Step>
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
