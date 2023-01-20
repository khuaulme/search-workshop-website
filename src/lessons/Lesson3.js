import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import Reveal from "../components/Reveal";
import MoreAboutCard from "../components/MoreAboutCard";
import CodeReveal from "../components/CodeReveal";

//images

import ProjectScore from "../images/Lesson2/ProjectScore.gif";
import Export from "../images/Lesson2/ExportPipeline.gif";
import AddSearchHighlight from "../images/lessonImages/AddSearchHighlight.gif";
import Highlights from "../images/lessonImages/Highlights.gif";
import HighlightDoc from "../images/lessonImages/HighlightDoc.gif";

const Lesson3 = () => {
  const [showHighlightInfo, setShowHighlightInfo] = useState(false);
  const toggleHighlights = (showHighlightInfo) => {
    setShowHighlightInfo(!showHighlightInfo);
  };

  const [showFinalAggregation, setShowFinalAggregation] = useState(false);
  const toggle = (showFinalAggregation) => {
    setShowFinalAggregation(!showFinalAggregation);
  };
  return (
    <LessonTemplate
      title="Lesson 4. Finish the Aggregation w/ $project and $limit"
      next="/Lesson4"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative mt-10">
          Talk why the beautiful part of implementing search in the aggregation
          is that you can combine with other stages
        </div>
        <Step title="Stage 2. $project" color="bg-fuchsia-800">
          <div className="relative flex space-x-4 text-left  mt-4">
            <div className="w-3/4 px-8 flex flex-col mx-auto">
              <div className="w-2/3 text-center my-6 mx-auto text-lg">
                For the next stage in the aggregation pipeline, we'll use{" "}
                <KeyWord>$project</KeyWord> to get back only the fields we want
                to use in our movie application. For now, paste the following
                code snippet into the project stage.
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
                    <span className="text-green-600 text-xl">searchScore </span>{" "}
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
                      Atlas Score will compute a score for every movie document
                      in the collection based on{" "}
                      <span className="text-green-600 uppercase">
                        relevance
                      </span>
                      . This score signifies how well this movie's fullplot
                      field matches the query terms "Harry Potter."
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={ProjectScore}
                  alt="project stage"
                  className="shadow shadow-gray-600"
                />{" "}
                <div className="w-3/4 text-center mx-auto">
                  {" "}
                  ** Scroll in the right preview panel to see that the movie
                  documents are returned with the score in{" "}
                  <span className="font-italic">descending</span> order. This
                  means we get the best matched movies first!
                </div>
                <div className="absolute bottom-48 -right-32 w-1/5">
                  <TipCard side="right">
                    {" "}
                    Atlas Search returns documents with the highest
                    relevance-based scores first!
                  </TipCard>
                </div>
              </div>
              <div className="absolute -top-20 -right-12 w-1/5">
                <TipCard side="right">
                  {" "}
                  Scoring is important! It's the whole reason why your results
                  are returned in a particular order.
                </TipCard>
              </div>
              <div className="absolute bottom-4 -left-16 w-1/4">
                <TipCard side="left">
                  Because <KeyWord type="word">searchHighlights</KeyWord> and{" "}
                  <KeyWord type="word">searchScore </KeyWord>
                  are not part of the original document, it is necessary to use
                  a <KeyWord>project</KeyWord>
                  pipeline stage to add them to the query output.
                </TipCard>
              </div>
              <div className="bg-green-500 h-2 w-1/2 mx-auto rounded-2xl my-4"></div>
            </div>
            {/*****************END SCORING ROW **********************/}
          </div>
          <div className="relative w-full px-6 flex mx-auto mt-6 text-left  space-x-8">
            <div className="w-1/3 border-r border-fuchsia-800 ">
              {" "}
              <div className="bg-rhino text-white w-3/4 px-4 py-2 mx-auto rounded text-center uppercase">
                Highlights
              </div>
              <div className="">
                As easy as it is to see the scoring metadata, it is just as
                simple to surface <KeyWord type="word">highlights</KeyWord> to
                show your queried search term in its proper context alongside
                the adjacent text. To enable highlighting for the{" "}
                <KeyWord type="code">fullplot</KeyWord>
                field, we need to add 2 snippets.
              </div>
              <div className="w-full mt-10 mx-auto">
                {" "}
                <img src={Highlights} alt="highlights" className="rounded" />
              </div>
              <div className="italic text-center text-rhino">
                {" "}
                **Highlights shown in{" "}
                <span className="bg-yellow-300 px-1 rounded">yellow</span>**
              </div>
            </div>
            {/********END COL 1 *************/}

            <div className="w-1/3 text-bold text-left  flex flex-col px-4 border-r border-fuchsia-800">
              <div>
                To enable highlights, first we need to ask the search operator
                for them. <div className="text-4xl text-center">🙏</div>{" "}
                <br></br>
                For this, return to your <KeyWord>$search </KeyWord> stage you
                made in Step 1 to add a <KeyWord type="code">highlight</KeyWord>
                property. Now augment with your <KeyWord>stage</KeyWord> object
                with
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
                So your final <KeyWord>$search</KeyWord> stage will CHANGE to:
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
              <div className="mr-0 w-full">
                <MoreAboutCard
                  subject="Highlights"
                  open={showHighlightInfo}
                  toggle={toggleHighlights}
                >
                  The <KeyWord>highlight</KeyWord> field returns an array:
                  Opening up the array you see:
                  <img src={HighlightDoc} alt="highlight" />
                  <ul>
                    <li>
                      highlight.texts.value - text from the fullplot field
                      returning a match
                    </li>{" "}
                    <li>
                      highlight.texts.type - either a hit or a text hit is a
                      match for the query text is the surrounding text context
                      adjacent to the matching string.
                    </li>
                  </ul>
                  <br></br>
                  For more info about highlights, see our{" "}
                  <a
                    className="underline decoration-teal-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.mongodb.com/docs/atlas/atlas-search/highlighting/"
                  >
                    docs
                  </a>{" "}
                  or this nifty{" "}
                  <a
                    className="underline decoration-teal-900"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://youtu.be/Xn80t7G1-n4"
                  >
                    video tutorial.
                  </a>{" "}
                </MoreAboutCard>
              </div>
            </div>
          </div>
          {/********END COL 3 *************/}
        </Step>
        <Step title="Stage 3. $limit" color="bg-fuchsia-800">
          <div className="flex space-x-10 text-left justify-evenly">
            <div className="w-1/3 mt-4">
              <div className="px-8">
                $limit is important in search because speed is important in
                search. For this reason we will add the $limit stage. Remember
                that the results are returned with the scores in descending
                order. <KeyWord>{`{ $limit: 12 }`}</KeyWord> will therefore
                bring the 12 most relevant movie documents to your search query.
                Without <KeyWord>$limit</KeyWord>, we would pull all 23k movies.
                We don't need that. In the pipeline builder for the next stage,
                select <KeyWord>$limit</KeyWord> and enter the number 12.
              </div>
              <div className="w-1/3 mx-auto">
                <CodeSnippetsCopy copyTextObject={projectText} type="limit" />
              </div>
              <div className="px-8">
                If you see results in the right preview panel, your aggregation
                pipeline is working properly!{" "}
                <span className="text-2xl">💪</span>. Let's grab that
                aggregation code with the{" "}
                <span className="text-green-600 text-xl">
                  Export Pipeline to Language
                </span>
                feature by clicking the button in the top toolbar.
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <img
                src={Export}
                alt="export"
                className="p-4 shadow-md shadow-gray-700 object-contain mb-auto mt-6"
              />
              <CodeReveal
                title="Reveal Full Aggregation"
                negTitle="Hide Full Aggregation"
                open={showFinalAggregation}
                toggle={toggle}
                copyTextObject={Final}
              ></CodeReveal>
            </div>

            <div className="w-1/3 mt-4">
              That's it! This simple 3 stage aggregation pipeline will power our
              MongoDB movie search engine. Congratulations on completing Lesson
              2!
              <span className="text-2xl">👊🎉🙌 </span>. <br></br>
              <br></br>In lesson 3, we'll put our new <KeyWord>$search</KeyWord>
              aggregation to work!
            </div>
          </div>
        </Step>
      </div>
    </LessonTemplate>
  );
};

export default Lesson3;

const projectText = {
  title: 1,
  year: 1,
  fullplot: 1,
  "imdb.rating": 1,
  poster: 1,
  score: {
    $meta: "searchScore",
  },
};

const metaHighlightString = ` highlight:{
      $meta: 'searchHighlights'
   }`;
const projectStageFinal = {
  title: 1,
  year: 1,
  "imdb.rating": 1,
  fullplot: 1,
  poster: 1,
  score: {
    $meta: "searchScore",
  },
  highlights: {
    $meta: "searchHighlights",
  },
};

const metaScore = `score": {
    "$meta": "searchScore"
  }`;

const searchStageFinal = {
  index: "default",
  text: {
    query: "Harry Potter",
    path: "fullplot",
  },
  highlight: { path: "fullplot" },
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
      "imdb.rating": 1,
      fullplot: 1,
      poster: 1,
      score: {
        $meta: "searchScore",
      },
      highlights: {
        $meta: "searchHighlights",
      },
    },
  },
];
