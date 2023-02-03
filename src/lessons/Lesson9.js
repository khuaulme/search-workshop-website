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
            Maybe it's your search index, or more specifically, the analyzer.
            <div className="text-center my-6 text-6xl">🤷🏻‍♀️</div>
            <div className=" mt-8 w-3/4 mx-auto text-lg">
              Atlas Search requires an index as the very first line of every
              search query. Theses special data structures are what make data
              retrievals fast! A traditional MongoDB index is a{" "}
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
              to query data. In this tutorial, we’ll analyze Atlas Search
              indexes and the Lucene analyzers used to build them.
            </div>
          </div>
        </div>
        <div className="text-center bg-fuchsia-800 text-white text-2xl py-4 rounded mt-10 w-1/2 mx-auto">
          What's the Difference Between a B-tree Index and a Search Index?
        </div>
        {/****************END INTRO ****************************/}
        {/****************BEGIN DIFFERENCE ****************************/}

        <div className="w-full flex flex-col">
          <div className="flex pt-10 mx-auto justify-evenly items-center">
            <div className="w-1/2 ">
              To explain the differences between a typical MongoDB b-tree index
              and an inverted index used for search, let's walk through an
              example. Say we have a set of MongoDB documents that look like
              this: ARROW________________
              <br></br>
              <br></br> Each of these documents has an “_id” field as a unique
              identifier, and an “s” field with some text.
            </div>
            <div className="w-1/3">
              <img
                src={Mapping}
                alt="mapping"
                className="h-72 object-contain mx-auto shadow-slate-400 shadow my-4"
              />
            </div>
          </div>
        </div>
        <div className="text-center h-1 bg-green-800 text-white text-2xl py-4 rounded mt-10 w-1/2 mx-auto"></div>
        <div className="ROW2 flex font-barlow text-base w-full mt-6 mb-10 mx-auto justify-evenly space-x-20 text-left">
          <div className="w-1/2">
            To explain the differences between a typical MongoDB b-tree index
            and an inverted index used for search, let's walk through an
            example. Say we have a set of MongoDB documents that look like this:
            <img
              src={Mapping}
              alt="mapping"
              className="h-72 object-contain mx-auto shadow-slate-400 shadow my-4"
            />
            Each of these documents has an “_id” field as a unique identifier,
            and an “s” field with some text. If I were to look through these
            documents for the text:{" "}
            <div className=" my-8 text-center mx-auto text-xl text-green-700 font-bold w-3/4 border-2 shadow-md shadow-slate-700 border-slate-700 rounded py-4 pr-12">
              “It was the best of times, it was the worst of times.”
              <div className="italic text-base text-right mt-2 text-gray-800">
                A Tale of Two Cities, Charles Dickens
              </div>
            </div>
            Atlas Search would first break this down into these seven individual
            terms <span className="italic text-green-700">( or tokens )</span>{" "}
            {"  "}for our inverted index :{" "}
            <div className="p-4 border  border-green-700 w-4/5 rounded mx-auto my-6">
              {" "}
              <img src={StandardAnalyzer} alt="analyzer" />
            </div>
          </div>

          <div className="w-1/2 flex flex-col">
            <div>
              Armed with these new tokens:{" "}
              <div className="my-4 mx-auto flex justify-evenly px-20 items-center spaxe-x-4">
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  it
                </div>
                {" - "}
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  was
                </div>
                {" - "}
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  the
                </div>
                {" - "}
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  best
                </div>
                {" - "}
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  times
                </div>
                {" - "}
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  worst
                </div>
              </div>{" "}
              Atlas Search would map these back to the original MongoDB
              documents’ _id fields. The word “it” can be found in document with
              _id 4. Find “the” in documents 2, 3, 4, etc.
              <img
                src={Mapping}
                alt="mapping"
                className="h-72 object-contain mx-auto shadow-slate-400 shadow my-4"
              />
              So essentially, an inverted index is a mapping between terms and
              the documents containing those terms. <br></br>
              <br></br>Think of the inverted index as analogous to the index you
              might find in the back of the book. Remember how book indexes
              contain words or expressions and list the pages in the book where
              they are found? 📖📚 Well, these inverted indexes use these terms
              to point to the specific documents in your database.
            </div>
            <div className="mt-4">
              That’s why Inverted indexes are so much faster for text searches -
              because you are not searching through every single document at
              query time. You are instead querying the search index which was
              mapped upon index creation. Then, following the roadmap with the
              _id to the exact data document(s) is fast and easy.
            </div>
          </div>
          {/*********END 2ND COL ********************/}
        </div>
        <div className="text-center bg-fuchsia-800 text-white text-2xl py-4 rounded mt-10 w-1/2 mx-auto">
          What are Analyzers?
        </div>
        {/****************END DIFFERENCE ****************************/}
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
                {/* <img src={StandardAnalyzer} alt="analyzer" /> */}
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
