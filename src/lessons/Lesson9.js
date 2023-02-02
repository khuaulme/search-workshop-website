import React from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";
import SearchHeroIndex from "../images/SearchIndexHero2.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

import { GiBookmarklet } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import StandardAnalyzer from "../images/standardanalyzer.gif";
import Quote from "../images/Quote.png";
import Mapping from "../images/IndexMapping.png";
import AnalyzerTool from "../components/AnalyzerTool";

const Lesson9 = () => {
  return (
    <LessonTemplate
      title="Lesson 9. Indexes & Analyzers"
      next="/Lesson10"
      previous="/Lesson8"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full justify-around mt-20">
          <img
            src={SearchHeroIndex}
            alt="placeholder"
            className="w-1/6 object-contain mx-auto"
          />
          <div className="w-3/4 text-2xl text-center my-auto">
            Why don’t you get the expected results for your search queries?{" "}
            <br></br>
            Maybe it's the analyzer.
            <div className="text-center my-6 text-6xl">🤷🏻‍♀️</div>
            <div className=" mt-8 w-3/4 mx-auto text-lg">
              Indexes are special data structures that make data retrievals
              fast! A traditional MongoDB index is a{" "}
              <KeyWord type="title">B-tree index</KeyWord> which is particularly
              helpful when you know your query patterns in advance. Atlas
              Search, on the other hand, uses a specialized{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://en.wikipedia.org/wiki/Inverted_index"
              >
                <span className="text-green-700 font-bold underline">
                  inverted index
                </span>
              </a>
              {"  "}
              to query data.
            </div>
          </div>
        </div>
        <div className="h-1 bg-fuchsia-800 rounded mt-10 w-1/2 mx-auto"></div>
        {/****************END INTRO ****************************/}
        <div className="ROW2 flex font-barlow text-base w-full mt-6 mb-28 space-x-10 text-left">
          <div className="px-20 w-1/2 text-left">
            <div className=" mt-8">
              To make data searchable, we can break it up into{" "}
              <span className="text-teal-900 font-bold text-2xl "> tokens</span>{" "}
              (or terms) to be indexed through a process called{" "}
              <span className=" font-bold text-2xl text-teal-900">
                analysis
              </span>{" "}
              done by{" "}
              <span className="text-teal-800 font-bold text-2xl  ">
                {" "}
                analyzers
              </span>
              .
            </div>

            <div className="flex justify-evenly mt-10 space-x-8">
              <div className="p-4 border  border-green-700 w-4/5 rounded mx-auto">
                {" "}
                <img src={StandardAnalyzer} alt="analyzer" />
              </div>
              <div className="flex flex-col mx-auto space-y-6">
                {" "}
                <div className="text-6xl mt-4">🤔</div>
                <FaCoins
                  className=" w-20 h-20 text-yellow-400 "
                  aria-hidden="true"
                />
                <GiBookmarklet
                  className="w-20 h-20 text-green-500 mr-20"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col text-base mt-8 ">
            <div>
              Armed with your new tokens, you can now think of an{" "}
              <span className="text-teal-800 font-bold"> inverted index</span>{" "}
              as a glossary of tokens, like in the back of a book. You know how
              the glossary contains words or expressions pointing to specific
              pages? Well, search uses{" "}
              <span className="text-teal-800 font-bold"> tokens</span> to point
              specific data documents.
            </div>
            <div className="w-full relative">
              {" "}
              <img
                src={Quote}
                alt="quote"
                className="absolute top-0 left-0 h-72 object-contain mx-auto shadow-slate-400 shadow my-4"
              />
              <img
                src={Mapping}
                alt="mapping"
                className="absolute top-20 right-0 h-72 object-contain mx-auto shadow-slate-400 shadow my-4"
              />
            </div>
          </div>
        </div>
        {/*************END ROW2 ****************/}
        <div className="flex flex-col w-full">
          <div className="bg-sun font-lexend rounded shadow-2xl text-black text-center text-xl w-full py-5 px-10 mb-2 z-10">
            Use the tool below to see how the different Lucene analyzers
            tokenize your data and affect your search results.
          </div>
        </div>
        <AnalyzerTool />
      </div>
    </LessonTemplate>
  );
};

export default Lesson9;
