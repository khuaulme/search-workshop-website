import React from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import CodeSandbox from "../components/CodeSandbox";

// images
import AIBot from "../images/lessonImages/AI_Bot.png";
import Embeddings from "../images/Embeddings.png";
import Steps from "../images/Steps.png";
import Git from "../images/GetGit.png";
import Architecture from "../images/VectorSearchArchitecture.png";

const Lesson11 = () => {
  return (
    <LessonTemplate
      title="Lesson 11. Vector Search: Semantic Search & AI 🧐"
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

          <div className="w-3/5 text-2xl text-center my-auto mr-20">
            <div className="flex text-2xl space-x-6 mx-auto px-10 text-green-800 font-bold">
              Looking to power an artificial intelligence with long term memory
              that could take over the world ?
            </div>

            <div className="mt-8 text-lg text-center my-auto ">
              Or even something simpler... In this lesson, you will learn to
              create vector embeddings with machine learning models like OpenAI
              and Hugging Face, and store them in Atlas for retrieval augmented
              generation (RAG), semantic search, recommendation engines, dynamic
              personalization, and other use cases.
              <div className="text-2xl my-8">
                {" "}
                LangChain - 🤖 - LlamaIndex - 🦾 - OpenAI - 🤗 - Hugging Face -
                👨🏻‍💻 - Cohere<br></br>and so much more!
              </div>
            </div>
          </div>
        </div>

        <div className="SECTION-ART flex mt-10 w-full rounded bg-slateblue  space-x-6">
          <img
            src={Embeddings}
            alt="embeddings"
            className="w-1/2 object-contain"
          />
          <img
            src={Architecture}
            alt="arch"
            className=" rounded-lg w-1/2 object-contain"
          />
        </div>
        <div className="w-full flex p-8 rounded shadow-md justify-around my-8 shadow-gray-700">
          <div className="text-center text-xl w-2/5">
            There are essentially 4 steps to implement <br></br>Atlas Vector
            Search.
            <img src={Steps} alt="steps" className="w-full object-contain" />
          </div>
          <div className="w-1 rounded bg-slateblue"></div>
          <div className="text-center text-xl w-1/5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/khuaulme/movie-vector-embedding-lab"
            >
              <img src={Git} alt="git" className="w-full object-contain" />
            </a>
          </div>

          <div className="w-1 rounded bg-slateblue"></div>
          <div className="w-1/4">
            <CodeSnippetsCopy
              type="line"
              copyTextObject={`$ git clone  https://github.com/khuaulme/movie-vector-embedding-lab.git`}
            ></CodeSnippetsCopy>{" "}
            <CodeSnippetsCopy
              type="line"
              copyTextObject={`$ cd movie-vector-embedding-lab`}
            ></CodeSnippetsCopy>{" "}
            Use any IDE you prefer. To open in Visual Studio code:
            <CodeSnippetsCopy
              type="line"
              copyTextObject={`$ code .`}
            ></CodeSnippetsCopy>
            <CodeSnippetsCopy
              type="line"
              copyTextObject={`$ npm install`}
            ></CodeSnippetsCopy>
          </div>
        </div>
        <div className="SECTION2 flex mt-10  space-x-6">
          <div className="flex flex-col w-1/3 p-8 rounded shadow-md shadow-gray-700">
            <div className="bg-fuchsia-900 text-center mb-6 py-2 rounded text-3xl text-white">
              Set-Up Environment Variables
            </div>
            <div className="flex">
              {" "}
              <div className="w-full">
                In the root directory, create a{" "}
                <KeyWord type="operator">.env</KeyWord> file for the following
                sensitive environment variables:
                <CodeSnippetsCopy type="line" copyTextObject={envVariables} />
              </div>
            </div>
          </div>

          <div className="w-1/3 p-8 rounded shadow-md shadow-gray-700">
            <div className="bg-fuchsia-900 text-center py-2 rounded text-3xl text-white mb-6">
              Index Vectorized Data Fields
            </div>

            <div className="p-8 text-center">
              <KeyWord type="title">Vector Index Definition</KeyWord>
              <CodeSnippetsCopy copyTextObject={HF_Vector_Index} />
            </div>
          </div>
          <div className="w-1/3 p-8 rounded shadow-md shadow-gray-700">
            <div className="bg-fuchsia-900 text-center py-2 rounded text-3xl text-white mb-6">
              $vectorSearch Query
            </div>

            <div className="p-8 text-center">
              <KeyWord type="title">$vectorSearch</KeyWord>
              <CodeSnippetsCopy copyTextObject={HF_Aggregation} />
            </div>
          </div>
        </div>

        <div className="px-20">
          <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson4/?fontsize=14&hidenavigation=1&theme=dark" />
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson11;

const envVariables = `MONGODB_CONNECTION_STRING=<INSERT NODE CONNECTION STRING>
HF_ACCESS_TOKEN=<INSERT HUGGING FACE READ TOKEN>
OPENAI_KEY=<INSERT OPENAI API TOKEN>`;

const HF_Vector_Index = {
  mappings: {
    dynamic: false,
    fields: {
      plot_embedding_hf: {
        dimensions: 384,
        similarity: "cosine",
        type: "knnVector",
      },
    },
  },
};

const HF_Aggregation = [
  {
    $vectorSearch: {
      index: "vectorIndex",
      queryVector: "await generateEmbeddings(query)",
      path: "plot_embedding_hf",
      numCandidates: 100,
      limit: 8,
    },
  },
  {
    $project: {
      _id: 0,
      title: 1,
      plot: 1,
    },
  },
];

const vectorIndex = {
  mappings: {
    dynamic: false,
    fields: {
      fullplot_embedding: {
        dimensions: 1536,
        similarity: "dotProduct",
        type: "knnVector",
      },
      genres: {
        normalizer: "lowercase",
        type: "token",
      },
      imdb: {
        fields: {
          rating: {
            type: "number",
          },
        },
        type: "document",
      },
    },
  },
};
