import React, { useState } from "react";

//components
import LessonTemplate from "../components/LessonTemplate";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";

//images
import BasicFuzzy from "../images/Lesson2/BasicFuzzy.gif";
import AggSlide from "../images/Lesson2/AggSlide.png";
import ProjectScore from "../images/Lesson2/ProjectScore.gif";
import Export from "../images/Lesson2/ExportPipeline.gif";
import AddSearchHighlight from "../images/lessonImages/AddSearchHighlight.gif";

const Lesson2 = () => {
  const [showFinalAggregation, setShowFinalAggregation] = useState(false);

  const toggle = (showFinalAggregation) => {
    setShowFinalAggregation(!showFinalAggregation);
  };
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

            <div className="flex flex-col">
              <div className=" text-green-800 text-lg py-2 px-4 text-center w-1/2 mx-auto rounded shadow-md shadow-gray-700">
                Here are some other useful <KeyWord>$search</KeyWord> operators.
                Try them out and compare results. Notice you can search across
                numbers and dates, as well.
              </div>
              <div className="flex justify-evenly py-2 space-x-4">
                <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
                  {" "}
                  <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
                    phrase
                  </div>
                  <CodeSnippetsCopy copyTextObject={phraseText} />
                  *notice how to query multiple fields with an array
                </div>

                <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
                  {" "}
                  <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
                    range
                  </div>
                  <CodeSnippetsCopy copyTextObject={rangeText} />* can query
                  numbers and embedded fields
                </div>
                <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
                  {" "}
                  <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
                    wildcard
                  </div>
                  <CodeSnippetsCopy copyTextObject={wildcardText} />
                  *Supports special characters to match any character(s).
                </div>
                <div className="p-2 shadow-lg shadow-gray-500 w-1/4">
                  {" "}
                  <div className="text-center bg-green-600 rounded-lg p-2 uppercase">
                    near
                  </div>
                  <CodeSnippetsCopy copyTextObject={dateText} type="date" />
                  *supports querying and scoring numeric, date, and GeoJSON.
                  Higher scores are returned by proximity.
                </div>
              </div>
            </div>
            <Step title="Stage 2. $project" color="bg-fuchsia-800">
              <div className="relative flex space-x-4 text-left  mt-4">
                <div className="w-3/4 px-8 flex flex-col mx-auto">
                  <div>
                    For the next stage in the aggregation pipeline, we'll use{" "}
                    <KeyWord>$project</KeyWord> to get back only the fields we
                    want to use in our movie application. For now, paste the
                    following code snippet into the project stage.
                  </div>
                  <div className="flex">
                    <CodeSnippetsCopy copyTextObject={projectText} />
                    <div className=" p-4">
                      <div className="bg-rhino text-white w-full mb-2 px-4 py-2 mx-auto rounded text-center uppercase">
                        Relevance-Based Scoring
                      </div>
                      <div>
                        Notice the inclusion of the <KeyWord>$meta</KeyWord>{" "}
                        operator to surface each document's{" "}
                        <span className="text-green-600 text-xl">
                          searchScore{" "}
                        </span>{" "}
                        in the result set.
                      </div>
                      <div className="flex space-x-4 items-center">
                        <div className="w-1/3">
                          <CodeSnippetsCopy
                            type="line"
                            copyTextObject={metaScore}
                          />
                        </div>
                        <div>
                          Atlas Score will compute a score for every movie
                          document in the collection based on{" "}
                          <span className="text-green-600 uppercase">
                            relevance
                          </span>
                          . This score signifies how well this movie's fullplot
                          field matches the query terms "Harry Potter."
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      src={ProjectScore}
                      alt="project stage"
                      className="shadow shadow-gray-600"
                    />{" "}
                    ** Scroll in the right preview panel to see that the movie
                    documents are returned with the score in{" "}
                    <span className="font-italic">descending</span> order. This
                    means we get the best matched movies first!
                  </div>
                  <div className="absolute -top-20 -right-12 w-1/5">
                    <TipCard side="right">
                      {" "}
                      Scoring is important! It's the whole reason why your
                      results are returned in a particular order.
                    </TipCard>
                  </div>
                  <div className="bg-green-500 h-2 w-1/2 mx-auto rounded-2xl mb-4"></div>
                </div>
                {/*****************END SCORING ROW **********************/}
              </div>
              <div className="relative w-full px-6 flex mx-auto mt-6 text-left  space-x-8">
                <div className="absolute -top-32 -left-16 w-1/4">
                  <TipCard side="left">
                    Because searchHighlights and searchScore are not part of the
                    original document, it is necessary to use a{" "}
                    <KeyWord>project</KeyWord>
                    pipeline stage to add them to the query output.
                  </TipCard>
                </div>
                <div className="w-1/3 border-r border-fuchsia-800">
                  {" "}
                  <div className="bg-rhino text-white w-3/4 px-4 py-2 mx-auto rounded text-center uppercase">
                    Highlights
                  </div>
                  <div className="">
                    As easy as it is to see the scoring metadata, it is just as
                    simple to surface <KeyWord type="word">highlights</KeyWord>{" "}
                    to show your queried search term in its proper context
                    alongside the adjacent text. To enable highlighting for the{" "}
                    <KeyWord type="code">fullplot</KeyWord>
                    field, we need to add 2 snippets.
                  </div>
                </div>
                {/********END COL 1 *************/}

                <div className="w-1/3 text-bold text-left  flex flex-col px-4 border-r border-fuchsia-800">
                  <div>
                    To enable highlights, first we need to ask the search
                    operator for them.{" "}
                    <div className="text-4xl text-center">🙏</div> <br></br>
                    For this, return to your <KeyWord>$search </KeyWord> stage
                    you made in Step 1 to add a{" "}
                    <KeyWord type="code">highlight</KeyWord>
                    property. Now augment with your <KeyWord>
                      stage
                    </KeyWord>{" "}
                    object with
                    <div className="my-4 text-center flex items-center">
                      {" "}
                      <div>
                        <KeyWord type="code">{`highlight:{path:'fullplot'}`}</KeyWord>{" "}
                      </div>
                      <img
                        src={AddSearchHighlight}
                        alt="highlight"
                        className="w-1/4 mx-auto"
                      />{" "}
                    </div>
                    So your final <KeyWord>$search</KeyWord> stage will CHANGE
                    to:
                  </div>
                  <div className="flex w-3/4 mx-auto">
                    {" "}
                    <CodeSnippetsCopy copyTextObject={searchStageFinal} />
                  </div>
                </div>
                {/***************END 2nd COL*********** */}
                <div className="w-1/3 text-bold text-left ml-6 flex flex-col px-4">
                  <div>
                    In our <KeyWord>$project</KeyWord> stage, add
                    <div className="w-3/4 mx-auto">
                      <CodeSnippetsCopy
                        type="line"
                        copyTextObject={metaHighlightString}
                      />
                    </div>
                  </div>
                  <div>
                    {" "}
                    Your FINAL <KeyWord>$project</KeyWord> stage will be:
                  </div>

                  <div className="w-3/4 mx-auto">
                    {" "}
                    <CodeSnippetsCopy copyTextObject={projectStageFinal} />
                  </div>
                  <div className="mt-8">
                    <TipCard side="center">
                      We will examine the resulting payload highlights array in
                      a future lesson.
                    </TipCard>
                  </div>
                </div>
                {/********END COL 3 *************/}
              </div>
            </Step>

            <Step title="Stage 3. $limit" color="bg-fuchsia-800">
              <div className="flex space-x-6 text-left">
                <div className="w-1/3 mt-4">
                  <div className="px-8">
                    $limit is important in search because speed is important in
                    search. For this reason we will add the $limit stage.
                    Remember that the results are returned with the scores in
                    descending order. <KeyWord>{`{ $limit: 12 }`}</KeyWord> will
                    therefore bring the 12 most relevant movie documents to your
                    search query. Without <KeyWord>$limit</KeyWord>, we would
                    pull all 23k movies. We don't need that. In the pipeline
                    builder for the next stage, select <KeyWord>$limit</KeyWord>{" "}
                    and enter the number 12.
                  </div>
                  <div className="w-1/3 mx-auto">
                    <CodeSnippetsCopy
                      copyTextObject={projectText}
                      type="limit"
                    />
                  </div>
                  <div className="px-8">
                    If you see results in the right preview panel, your
                    aggregation pipeline is working properly!{" "}
                    <span className="text-2xl">💪</span>. Let's grab that
                    aggregation code with the{" "}
                    <span className="text-green-600 text-xl">
                      Export Pipeline to Language
                    </span>
                    feature by clicking the button in the top toolbar.
                  </div>
                </div>
                <img
                  src={Export}
                  alt="export"
                  className="p-4 shadow-md shadow-gray-700 object-contain mb-auto mt-6"
                />
                <div className="w-1/5">
                  <CodeReveal
                    title="Reveal Full Aggregation"
                    negTitle="Hide Full Aggregation"
                    open={showFinalAggregation}
                    toggle={toggle}
                    copyTextObject={Final}
                  ></CodeReveal>
                </div>
                <div className="w-1/4 mt-4 px-8">
                  That's it! This simple 3 stage aggregation pipeline will power
                  our MongoDB movie search engine. Congratulations on completing
                  Lesson 2!
                  <span className="text-2xl">👊🎉🙌 </span>. <br></br>
                  <br></br>In lesson 3, we'll put our new{" "}
                  <KeyWord>$search</KeyWord>aggregation to work!
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

const searchStageFinal = {
  index: "default",
  text: {
    query: "Harry Potter",
    path: "fullplot",
  },
  highlight: { path: "fullplot" },
};

const metaHighlightString = ` highlight:{
      $meta: 'searchHighlights'
   }`;
const projectStageFinal = {
  title: 1,
  year: 1,
  fullplot: 1,
  score: {
    $meta: "searchScore",
  },
  highlights: { $meta: "searchHighlights" },
};
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
const metaScore = `score": {
    "$meta": "searchScore"
  }`;

const phraseText = {
  index: "default",
  phrase: {
    query: "Harry Potter",
    path: ["title", "fullplot", "plot"],
  },
};

const wildcardText = {
  index: "default",
  wildcard: {
    query: "Ha*ter",
    path: "title",
    allowAnalyzedField: true,
  },
};

const rangeText = {
  index: "default",
  range: {
    gt: 8,
    lte: 10,
    path: "imdb.rating",
  },
};

const dateText = {
  index: "default",
  near: {
    path: "released",
    origin: Date("1915-09-13T"),
    pivot: 7776000000,
  },
};

const projectText = {
  title: 1,
  year: 1,
  fullplot: 1,
  score: {
    $meta: "searchScore",
  },
};

const Final = [
  {
    $search: {
      index: "default",
      text: {
        query: "Harry Potter",
        path: "fullplot",
        fuzzy: {
          maxEdits: 1,
        },
      },
      highlight: {
        path: "fullplot",
      },
    },
  },
  {
    $limit: 12,
  },
  {
    $project: {
      title: 1,
      year: 1,
      fullplot: 1,
      score: {
        $meta: "searchScore",
      },
      highlights: {
        $meta: "searchHighlights",
      },
    },
  },
];
