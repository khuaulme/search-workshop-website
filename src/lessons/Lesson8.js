import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";
import { Link } from "react-router-dom";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Reveal from "../components/Reveal";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Autocomplete from "../images/lessonImages/Autocomplete.png";
import ACSearch from "../images/lessonImages/ACSearch.png";
import CodeSandbox from "../components/CodeSandbox";
import VideoWalkThru from "../images/VideoWalkThru.png";

const Lesson8 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const toggleVideo = (showVideo) => {
    setShowVideo(!showVideo);
  };
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

          <div className=" font-barlow text-lg w-2/3 mt-16 text-left">
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
            spelling skills to do so, then so be it. In this lesson, we will
            learn how to implement autocomplete in order to find movies by their
            title.
          </div>
        </div>
        <div className="bg-yellow-400 h-1 mx-auto w-2/3 mt-8"></div>
        {/***************** End Introduction ********************/}{" "}
        <div className="w-full flex text-left mx-auto my-10 justify-evenly space-x-10">
          <div className="w-1/3 my-8 ">
            <div>
              In{" "}
              <span>
                <Link
                  to="/Lesson2"
                  className=" py-1  right-20 z-10 bg-slateblue border-2 border-green-500 text-white px-6 cursor-pointer rounded-xl "
                >
                  Lesson 2
                </Link>
              </span>
              , we learned a few of the common operators used by the $search
              stage:
              <ul className="ml-10 my-2 text-left text-sm">
                <li className="  text-teal-800 text-lg font-bold rounded ">
                  text
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  phrase
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  range
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  near
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  wildcard
                </li>
              </ul>
              To implement <KeyWord type="title">autocomplete</KeyWord>{" "}
              functionality, $search uses the special operator{" "}
              <KeyWord type="word">autocomplete</KeyWord> to search for words or
              a phrase containing a sequence of characters from your input
              string. The more letters you type in the input, the higher the
              accuracy of prediction results in accordance with your
              tokenization strategy.
            </div>
            <div className="relative">
              <div className="absolute -left-14 top-0">
                <TipCard side="center">
                  <div className="flex items-center leading-6">
                    <div>
                      At a high-level, tokenization is the process of splitting
                      text into “tokens” to both index and query. Tokens are the
                      fundamental sequence of characters in the query to match
                      in the data document.{" "}
                    </div>
                  </div>
                </TipCard>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-8 ">
            To use the autocomplete operator, we must first index the fields we
            want to query with the autocomplete data type. To do this, we will
            start by creating a special search index to map our movie data by
            the special autocomplete data type.<br></br>
            <br></br>Return to the Atlas UI and repeat the steps laid out in{" "}
            <Link
              to="/Lesson1"
              className=" py-1 z-10 bg-slateblue border-2 border-green-500 text-white px-6 cursor-pointer rounded-xl whitespace-nowrap"
            >
              Lesson 1: Create a Search Index
            </Link>
            . This time, however, feel free to use the JSON editor with this
            implementation: <br></br>
            <div className="p-2 shadow-lg shadow-gray-500">
              {" "}
              <div className="text-center bg-fuchsia-800 rounded-lg p-2 text-white uppercase">
                autocomplete index definition
              </div>
              <CodeSnippetsCopy copyTextObject={autoIndexDef} />
              <div className="text-green-800 text-base text-center">
                To conserve space in our autocomplete index, turn off dynamic
                mapping and set the minGrams to 3 and the maxGrams to 8 in the
                <KeyWord type="title">title</KeyWord> field of the movie
                document.
              </div>
            </div>
          </div>
          <div className="w-1/3 my-8 ">
            <Reveal
              title="Autocomplete Index Creation: Video Walkthrough"
              negTitle="Hide Video"
              open={showVideo}
              toggle={toggleVideo}
              content="video"
              lesson="6"
            >
              <video width="640" height="480" controls>
                <source
                  src="https://kwh-demos.s3.amazonaws.com/CreateIndexAutocomplete.mp4"
                  type="video/mp4"
                />
              </video>
            </Reveal>
            {!showVideo && <img src={VideoWalkThru} alt="video" />}
            <TipCard side="right">
              <div className="flex items-center leading-6">
                <div>
                  To learn more about the configuration options available in the
                  autocomplete data type, such as tokenization strategy and
                  diacritic folding, see{" "}
                  <a
                    className="text-green-600 font-bold underline"
                    href="https://www.mongodb.com/docs/atlas/atlas-search/define-field-mappings/#std-label-bson-data-types-autocomplete"
                  >
                    our docs on autocomplete.{" "}
                  </a>
                </div>
              </div>
            </TipCard>
          </div>
        </div>
        <div className="bg-yellow-400 h-1 mx-auto w-2/3 mt-6"></div>
        <div className="2ND ROW flex space-x-8 mt-6">
          {" "}
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step
              title="Step 1. Autocomplete Query for $search Stage"
              className=""
            >
              Now that we have our new{" "}
              <KeyWord type="title">autocomplete</KeyWord> index, we can use
              this index in a new query for autocompletion functionality in the{" "}
              <KeyWord type="operator">$search</KeyWord> stage.<br></br>Let's
              return to Compass and try the code below in the Aggregation
              Pipeline Builder:
            </Step>
            <div className="p-2 shadow-lg shadow-gray-500">
              {" "}
              <div className="text-center bg-teal-700 rounded-lg p-2 text-white uppercase">
                autocomplete query
              </div>
              <CodeSnippetsCopy copyTextObject={autocompleteSearchQuery} />
              <div className="text-black text-base">
                {" "}
                Be sure to play around with different strings in the{" "}
                <KeyWord type="code">query</KeyWord> field to see how the
                resulting movie documents change.<br></br>* Notice I can still
                use fuzzy as an option. *
              </div>
            </div>
          </div>
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step
              title="Step 2. Complete $search Aggregation Pipeline "
              className=""
            >
              Add <KeyWord type="operator">$limit</KeyWord> and{" "}
              <KeyWord type="operator">$project</KeyWord> stages to our
              aggregation pipeline, as we did in Lesson 3. However, we will only
              need the <KeyWord type="title">title</KeyWord> field in the return
              payload. Therefore our full aggrgeation for an autcompleted search
              is:{" "}
              <div className="p-2 shadow-lg shadow-gray-500">
                {" "}
                <div className="text-center bg-teal-700 rounded-lg p-2 text-white uppercase">
                  autocomplete query Aggregation
                </div>
                <CodeSnippetsCopy copyTextObject={completeAutoSearchQuery} />
                <div className="text-black text-base"></div>
              </div>
            </Step>
          </div>{" "}
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step title="Step 3. Create HTTPS Endpoint" className="">
              On the left menu, select{" "}
              <KeyWord type="word">HTTPS Endpoint</KeyWord>, followed by the{" "}
              <KeyWord type="button">Add an Endpoint</KeyWord>. Select the HTTP
              service, and name it movies.
              <ul className="ml-24 my-2">
                <li>✔️ For Route, type /movies</li>
                <li>✔️ Set your Operation Type to GET</li>
                <li>✔️ Enable Respond with Result</li>
              </ul>
              Make note of your{" "}
              <KeyWord type="word">BASIC ENDPOINT URL</KeyWord>. You will be
              using this in your application.
            </Step>
          </div>
        </div>{" "}
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson8/?fontsize=14&hidenavigation=1&theme=dark" />
        <div className="w-full flex mx-auto my-10 justify-evenly">
          <div className="w-1/3 mx-auto mr-12"></div>

          <div className="w-1/3 mx-auto ml-12">
            <div className="p-2 shadow-lg shadow-gray-500">
              {" "}
              <div className="text-center bg-fuchsia-800 rounded-lg p-2 text-white uppercase">
                autocomplete query
              </div>
              <CodeSnippetsCopy copyTextObject={autocompleteSearchQuery} />
              <div className="text-black text-base"></div>
            </div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

const autocompleteSearchQuery = {
  index: "autocomplete",
  autocomplete: {
    query: "Harry",
    path: "title",
    fuzzy: { maxEdits: 1 },
  },
};

const autoIndexDef = {
  mappings: {
    dynamic: false,
    fields: {
      title: {
        maxGrams: 8,
        minGrams: 3,
        type: "autocomplete",
      },
    },
  },
};
const completeAutoSearchQuery = [
  {
    $search: {
      index: "autocomplete",
      autocomplete: {
        query: "Harry",
        path: "title",
        fuzzy: { maxEdits: 1 },
      },
    },
  },
  {
    $limit: 12,
  },
  {
    $project: {
      title: 1,
    },
  },
];

export default Lesson8;
