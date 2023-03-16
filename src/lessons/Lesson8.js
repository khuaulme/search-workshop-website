import React from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";
import SearchHeroIndex from "../images/SearchIndexHero2.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Documents from "../images/Documents.png";
import Mappings from "../images/Mappings.png";
import TreasureMap from "../images/TreasureMap.png";
import AnalyzerList from "../images/Analyzers.png";
import SearchLayers from "../images/lessonImages/Search_Layers.gif";

import { GiBookmarklet } from "react-icons/gi";
import { FaCoins } from "react-icons/fa";
import StandardAnalyzer from "../images/standardanalyzer.gif";
import RefineIndex from "../images/refineIndex.gif";
import Quote from "../images/Quote.png";
import Mapping from "../images/IndexMapping.png";
import AnalyzerTool from "../components/AnalyzerTool";

const Lesson8 = () => {
  return (
    <LessonTemplate
      title="Lesson 8. Indexes & Analyzers"
      next="/Lesson9"
      previous="/Lesson7"
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
          <div className="flex pt-10 mx-auto justify-evenly items-center px-20">
            <div className="w-1/2 ">
              To explain the differences between a typical MongoDB b-tree index
              and an inverted index used for search, let's walk through an
              example. Say we have a set of MongoDB documents that look like
              this: <span className="text-6xl">👉</span>
              <br></br>
              <br></br> Each of these documents has an{" "}
              <KeyWord type="variable">_id</KeyWord> field as a unique
              identifier, and a <KeyWord type="variable">sentence</KeyWord>{" "}
              field with some text.
            </div>
            <div className="w-1/3 bg-slateblue shadow-slate-400 shadow rounded">
              <img
                src={Documents}
                alt="mapping"
                className="h-72 object-contain mx-auto  my-4 px-4 py-2"
              />
            </div>
          </div>
          {/************END DOC INTRO **************/}
          <div className="text-center h-1 bg-fuchsia-800 text-white  rounded mt-10 w-1/2 mx-auto"></div>
          <div className="flex w-full space-x-16 justify-evenly mt-10 ">
            <div className="w-1/3 text-center">
              If I were to look through these documents for the text:{" "}
              <div className=" my-8 text-center mx-auto px-4 text-xl text-green-700 font-bold w-3/4 border-2 shadow-md shadow-slate-700 border-slate-700 rounded py-4 pr-12">
                “It was the best of times, it was the worst of times.”
                <div className="italic text-base text-right mt-2 text-gray-800">
                  A Tale of Two Cities, Charles Dickens
                </div>
              </div>
              Atlas Search would first break this down into these seven
              individual terms{" "}
              <span className="italic text-green-700">( or tokens )</span>{" "}
              {"  "}for our inverted index :{" "}
              <div className="p-4 border  border-green-700 w-3/4 rounded mx-auto my-6">
                {" "}
                <img src={StandardAnalyzer} alt="analyzer" />
              </div>
              Leaving us with:{" "}
              <div className="my-4 mx-auto flex justify-evenly px-20 items-center space-x-4">
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  it
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  was
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  the
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  best
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  of
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  times
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  worst
                </div>
              </div>{" "}
            </div>
            <div className="w-1/4 mx-auto bg-slateblue py-6 my-auto">
              <img src={Mappings} alt="map"></img>
            </div>
            <div className="w-1/3">
              <div>
                Armed with these new tokens, Atlas Search would map these back
                to the original MongoDB documents’{" "}
                <KeyWord type="variable">_id</KeyWord> fields.
                <div className="ml-20 text-6xl my-4">👈</div>
                The word <KeyWord type="word">"it"</KeyWord> can be found in
                document with _id 4. Find <KeyWord type="word">"the"</KeyWord>{" "}
                in documents 2, 3, 4, etc. So essentially, an inverted index is
                a mapping between terms and the documents containing those
                terms.{" "}
                <div className=" mx-auto w-1/3">
                  <img src={TreasureMap} alt="treasure" />
                </div>
                Think of the inverted index as analogous to the index you might
                find in the back of the book. Remember how book indexes contain
                words or expressions and list the pages in the book where they
                are found?{" "}
                <div className="my-1 text-6xl text-right pr-20">📖📚</div> Well,
                these inverted indexes use these terms to point to the specific
                documents in your database.
              </div>
              <div className="mt-4">
                That’s why Inverted indexes are so much faster for text searches
                - because you are not searching through every single document at
                query time. You are instead querying the search index which was
                mapped upon index creation. Then, following the roadmap with the
                <KeyWord type="variable">_id</KeyWord> to the exact data
                document(s) is fast and easy.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-fuchsia-800 text-white text-2xl py-4 rounded mt-10 w-1/2 mx-auto">
          What are Analyzers?
        </div>
        {/****************END DIFFERENCE ****************************/}
        <div className="ROW2 flex font-barlow text-base w-full mt-6 mb-28 space-x-10 text-left">
          <div className="px-20 w-1/2 text-left">
            <div className=" mt-8">
              The process of breaking up data into
              <span className="text-teal-900 font-bold text-2xl ">
                {" "}
                tokens
              </span>{" "}
              (or terms) to be indexed is performed through a process called{" "}
              <span className=" font-bold text-2xl text-teal-900">
                analysis
              </span>{" "}
              done by{" "}
              <span className="text-teal-800 font-bold text-2xl  ">
                {" "}
                analyzers
              </span>
              . Atlas Search offers the following analyzers:
            </div>

            <div className="flex justify-evenly mt-10 space-x-8">
              <div className=" shadow shadow-slate-700 w-4/5 my-auto rounded mx-auto">
                {" "}
                <img src={AnalyzerList} alt="analyzer" />
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
          <div className="w-1/2 flex flex-col text-base my-10 ">
            <div>
              Analyzers are policies that combine a tokenizer, which extracts
              tokens from text, with filters that you define. Different
              analyzers produce different tokens to be mapped in the
              <span className="text-teal-800 font-bold"> inverted index</span> .
              The <KeyWord type="">Lucene.English</KeyWord> for instance removes
              common words, or <KeyWord type="word">STOP WORDS</KeyWord> (i.e
              "and", "the", "a", etc ) and stems the words to their root to
              produce only the following tokens from Charles Dickens:
              <div className="my-4 mx-auto flex justify-evenly px-20 items-center space-x-4">
                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  best
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  time
                </div>

                <div className="text-xl py-2 px-4 border border-green-800 shadow font-bold shadow-green-900 rounded-xl">
                  worst
                </div>
              </div>{" "}
              which maps as follows:
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
        <div className="flex flex-col w-full mt-10 ">
          <div className="bg-sun font-lexend rounded shadow-2xl text-black text-center mt-10 text-xl w-full py-5 px-10 mb-2 z-10">
            Use the tool below to see how the different Lucene analyzers
            tokenize your data and affect your search results.
          </div>
        </div>
        <AnalyzerTool />
        <div className="flex w-full  my-10 justify-evenly mx-auto items-center">
          <div className="w-1/2">
            So, when configuring your search index:
            <ul className="my-8 space-y-2 ml-10">
              <li>
                ✳️ Think about your data first. Knowing your data, how will you
                be querying it? What do you want your tokens to be?{" "}
              </li>
              <li>✳️ Then, choose your analyzer accordingly.</li>
              <li>
                ✳️ Specify the best analyzer for your use case in your Atlas
                Search index definition.{" "}
              </li>
              <li>✳️ Specify that index when writing your search query.</li>
            </ul>
          </div>
          <div className="w-2/5 mx-auto">
            <div className="mx-auto">
              <img
                src={RefineIndex}
                alt="refineIndex"
                className="rounded border-slate-700 border p-4"
              />
            </div>
          </div>
        </div>
        <div className="flex mx-auto justify-evenly px-20 space-x-16 itens-center mb-20">
          <div className="w-1/2 mx-auto">
            <div className="mx-auto">
              <img
                src={SearchLayers}
                alt="SeachLayers"
                className="rounded shadow shadow-slate-700 p-4"
              />
            </div>
          </div>
          <div className="w-1/2 text-lg">
            You can create many different search indexes for your use case, but
            remember that you can only use one search index per search query.
            <br></br>
            <br></br>
            So, now that we have analyzed the analyzers, you know why picking
            the right analyzer matters. You can create the most efficient Atlas
            Search index for accurate results and optimal results. So go forth,
            search-warrior! Type in your application's search box with
            confidence, not crossed fingers.
            <div className="text-center text-6xl">🤞</div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson8;
