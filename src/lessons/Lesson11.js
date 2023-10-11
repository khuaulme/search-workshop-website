import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import AIBot from "../images/lessonImages/AI_Bot.png";
import Haystack from "../images/lessonImages/haystack.png";
import Drumroll from "../images/lessonImages/drumroll.gif";
import CodeSandbox from "../components/CodeSandbox";

const Lesson11 = () => {
  return (
    <LessonTemplate
      title="Lesson 11. Vector Search: Semantic Search and AI"
      next="/"
      previous="/Lesson10"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full justify-around mt-20">
          <img
            src={AIBot}
            alt="placeholder"
            className="w-1/4 object-contain mx-auto"
          />

          <div className="w-3/5 text-2xl text-center my-auto">
            <div className="flex text-2xl space-x-6 mx-auto">
              <div className="my-auto ">
                Looking to power an artificial intelligence with long term
                memory that could take over the world ?
              </div>

              {/* <img
                src={Haystack}
                alt="placeholder"
                className="w-1/5 object-contain mx-auto"
              /> */}
            </div>

            <div className="mt-8 text-lg text-center my-auto mr-40">
              Or even something simpler... In this lesson, you will learn to
              create vector embeddings with machine learning models like OpenAI
              and Hugging Face, and store them in Atlas for retrieval augmented
              generation (RAG), semantic search, recommendation engines, dynamic
              personalization, and other use cases.
              <div className="text-2xl my-8">
                {" "}
                LangChain LlamaIndex OpenAI Hugging Face Cohere
              </div>
            </div>
          </div>
        </div>
        <div className="bg-teal-600 h-1 mx-auto w-2/3 mt-8"></div>
        <div className="SECTION2 flex mt-10  space-x-6">
          <div className="flex flex-col w-2/3 p-8 rounded shadow-md shadow-gray-700">
            <div className="bg-fuchsia-900 text-center py-2 rounded text-3xl text-white">
              Step 1. Update Index for Facets
            </div>
            <div className="flex">
              <div className="w-1/2 p-8 ">
                In order to prepare our data for facets, we need to index
                appropriately. Since facets can be spread across different data
                types, each are mapped differently in the index definition:
                <ul className="ml-10 my-4 space-y-8 ">
                  <li>
                    ✅ Strings are mapped as{" "}
                    <KeyWord type="code">stringFacet</KeyWord>
                  </li>
                  <li>
                    ✅ Numerics are <KeyWord type="code">numberFacet</KeyWord>
                  </li>
                  <li>
                    ✅ Dates as <KeyWord type="code">date</KeyWord>
                  </li>
                </ul>
                In our movie application, we will implement facets on the{" "}
                <KeyWord type="title">genres</KeyWord> field. Since this field
                contains strings, we will additionally index this field with the
                type <KeyWord type="code">stringFacet</KeyWord> by adding
                another mapping.<br></br>
                <br></br>
                <div className="p-8 mx-auto text-center">
                  <CodeSnippetsCopy copyTextObject={facetIndexAddition} />
                  mapping of <KeyWord type="title">genres</KeyWord> in index to{" "}
                  <KeyWord type="code">stringFacet</KeyWord>
                </div>
              </div>
              <div className="bg-fuchsia-800 w-1 rounded h-3/4 my-auto"></div>
              <div className="w-1/2 p-8 ">
                Return to the movies collection in the Atlas interface. Open
                your default search index. It should have this definition in it:
                <div className="p-8">
                  <CodeSnippetsCopy copyTextObject={defaultIndex} />
                </div>
                <br></br>
                After adding the new mapping for the{" "}
                <KeyWord type="title">genres</KeyWord> field, your new default
                index will be:
                <div className="p-8 text-center">
                  new <KeyWord type="title">default</KeyWord> index
                  <CodeSnippetsCopy copyTextObject={finalFacetIndex} />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-8 rounded shadow-md shadow-gray-700">
            <div className="bg-fuchsia-900 text-center py-2 rounded text-3xl text-white mb-6">
              Step 2. $searchMeta Query
            </div>
            Finally we will query using with the{" "}
            <span className="italic text-green-700">new</span>{" "}
            <KeyWord>$searchMeta</KeyWord> stage.{" "}
            <div className="flex mt-10 space-x-8 text-center text-indigo-900 text-xl">
              <div className=" w-2/3">
                {" "}
                Hmmmm.... I wonder how what types of movies have an
                <KeyWord type="title">imdb.rating</KeyWord> of at least 9?
              </div>
              <div className="text-6xl">🤷🏻‍♀️</div>
            </div>
            <div className="p-8 text-center">
              <KeyWord type="title">$searchMeta Query</KeyWord>
              <CodeSnippetsCopy copyTextObject={searchMetaQuery} />
            </div>
            <div className="my-4">
              Please note in this query the also new operator:{" "}
              <KeyWord type="code">facet</KeyWord> which is an object with 2
              fields:
              <ul className="ml-8 space-y-4">
                <li>
                  - <KeyWord type="title">operator</KeyWord> - which takes the
                  $search operation
                </li>
                <li>
                  - <KeyWord type="title">facets</KeyWord> - a newly defined
                  field to count results for the film genre categories.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-teal-600 h-1 mx-auto w-2/3 my-8"></div>
        <div className="flex space-x-12">
          {" "}
          <div className="w-1/2 p-8 rounded shadow-md ml-0 shadow-gray-700">
            {" "}
            <div className="flex mx-auto">
              {" "}
              <div className="w-1/2 space-y-10">
                and the result is...
                <img
                  src={Drumroll}
                  alt="placeholder"
                  className="w-4/5 object-contain mx-auto"
                />
                Notice how the results are distrubuted across:{" "}
                <div className=" mx-auto text-center text-teal-800 ">
                  {" "}
                  <div className=" my-8 text-6xl">🪣 buckets</div>{" "}
                </div>
                In each bucket, we can find the genre of movie and the count.
                The counts will be used in the front end.
              </div>
              <div className="w-1/2">
                <CodeSnippetsCopy copyTextObject={result} />
              </div>
            </div>
          </div>
          <div className="w-1/2 p-8 rounded ">
            <div className="relative w-full text-xl border-4 border-teal-700 pb-8  rounded">
              <div className="bg-teal-700 py-3  text-white text-2xl text-center w-full mb-4">
                EXERCISE 1: CREATE NEW ENDPOINT
              </div>
              <div className="px-10">
                You know the drill by now... <br></br>
                <br></br>Let's create an endpoint using our new{" "}
                <KeyWord>$searchMeta</KeyWord> stage... 🎗️don't forget to use
                the updated index.
                <div className="text-center text-4xl">🍿{"  "} 🎥</div>
              </div>
            </div>
          </div>
        </div>

        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/facets/?fontsize=14&hidenavigation=1&theme=dark" />
      </div>
    </LessonTemplate>
  );
};

export default Lesson11;

const defaultIndex = {
  mappings: {
    dynamic: true,
  },
};

const facetIndexAddition = {
  fields: {
    genres: {
      type: "stringFacet",
    },
  },
};

const finalFacetIndex = {
  mappings: {
    dynamic: true,
  },
  fields: {
    genres: {
      type: "stringFacet",
    },
  },
};

const searchMetaQuery = {
  index: "facetIndex",
  facet: {
    operator: {
      range: {
        gte: 9,
        lte: 10,
        path: "imdb.rating",
      },
    },
    facets: {
      genresFacet: {
        type: "string",
        path: "genres",
      },
    },
  },
};

const result = {
  count: {
    lowerBound: 31,
  },
  facet: {
    genresFacet: {
      buckets: [
        { _id: "Documentary", count: 16 },
        {
          _id: "Drama",
          count: 13,
        },
        {
          _id: "History",
          count: 7,
        },
        {
          _id: "Crime",
          count: 6,
        },
        {
          _id: "Comedy",
          count: 4,
        },
        {
          _id: "Action",
          count: 3,
        },
        //...
      ],
    },
  },
};
