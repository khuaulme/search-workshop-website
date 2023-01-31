import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import ScoreModifierCard from "../components/ScoreModifierCard";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Score from "../images/lessonImages/Achievement.png";
import Relevance from "../images/relevance.jpg";
import Descending from "../images/descending.png";
import DidYouKnow from "../images/lessonImages/DidYouKnow.png";
import First from "../images/first.gif";
import Films from "../images/lessonImages/films.png";
import Question from "../images/lessonImages/Question.png";
import James from "../images/lessonImages/James.png";

const Lesson7 = () => {
  return (
    <LessonTemplate
      title="Lesson 7. The Score Matters"
      next="/Lesson8"
      previous="/Lesson6"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className=" flex space-x-8 items-center w-full  justify-evenly">
          <div className=" w-1/4 object-contain  ">
            <img src={Score} alt="score" />
          </div>
          <div className="COL-LEFT mb-8 text-black mx-auto w-3/4 px-10 text-left text-lg mt-10 ">
            <div className="w-full mx-auto ">
              In Lesson 3, we introduced the concept of{" "}
              <KeyWord type="title">relevance-based scoring</KeyWord> when
              building out our search aggregation. In this brief lesson, we’ll
              discuss the importance of scoring and show a few ways to "work the
              search ref" and influence the score in your favor.
            </div>

            <div className="flex RELEVANCE  my-16 text-blue-900 space-x-8">
              <div className="w-2/3 mx-auto px-8 my-auto  text-center shadow-2xl shadow-slate-700 rounded py-10">
                {" "}
                <KeyWord type="word">Relevance</KeyWord> is essentially a
                measure of how well your search results matched the users
                request. A high relevance delivers a truly great search
                experience and keeps users coming back.<br></br>{" "}
                <span className="text-2xl">🎯</span>
                <br></br>
                You gotta give 'em what they want .
              </div>
              <div className="w-1/3  my-auto ">
                <img src={Relevance} alt="relevant" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className=" w-4/5 mb-4 text-center mx-auto">
            Atlas Search computes a score based on{" "}
            <KeyWord type="title">relevance</KeyWord> for each of our movie
            documents and returns the movies to us with the scores in{" "}
            <span className="italic font-bold">descending</span> order.
          </div>
          <img
            src={Descending}
            alt="descending"
            className="w-full px-10 mx-auto  my-auto"
          />
          <div className="text-right mx-auto text-sm italic text-rhino p-4 ">
            {" "}
            Notice the higher scores are returned first. Higher scores mean
            higher relevance.
          </div>
        </div>
        {/**************END ROW 1 **********/}
        <div className="flex w-full space-x-10 mb-10">
          <div className="w-1/5">
            <img src={DidYouKnow} alt="didyouknow" />
          </div>
          <div className="w-4/5 text-base px-16">
            <div className="flex space-x-6 mb-6">
              <div>
                <div className="my-4 text-center">
                  <span className="font-bold text-green-600 text-2xl">
                    So who’s keeping score?
                  </span>{" "}
                  <span className="font-bold text-fuchsia-800 text-2xl">
                    You should and here's why!
                  </span>{" "}
                </div>
                In the words of the immortal Ricky Bobby,{" "}
                <span className="text-teal-800 text-xl">
                  "If you ain’t first, you’re last?”{" "}
                </span>
                Ouch! But sadly, when it comes to the search bar that rings
                true… 🔔
              </div>
            </div>

            <div className="pr-20 mb-10">
              According to this{" "}
              <a
                href="https://backlinko.com/google-ctr-stats"
                className="underline text-xl text-forestgreen"
                target="_blank"
                rel="noopener noreferrer"
              >
                analysis
              </a>{" "}
              of over 4 millions Google search results by Backlinko, the number
              1 search result has a click through rate 10X that of the result in
              position 10. In fact the top 3 returned search results made up
              over 54% of all the click-throughs.So if there is something,
              whether it is a movie, product, restaurant, that you want your
              users to see first, you will want its score to be as high as
              possible. For example, think of sponsored searches or promotions.
            </div>
            <div className="flex justify-evenly">
              <div className="w-2/3">
                A document’s search score depends on many things, including:{" "}
                <ul className="ml-16 space-y-2 my-2">
                  <li>✳️ The position of the search term in the document</li>
                  <li>
                    ✳️ The frequency of occurrence of the search term in the
                    document
                  </li>
                  <li>✳️ The type of operator the query uses</li>
                  <li>✳️ The type of analyzer the query uses</li>
                </ul>
                <div className="text-sm text-green-700 italic">
                  More information about the Lucene scoring algorithm can be
                  found in the{" "}
                  <a
                    href="https://lucene.apache.org/core/3_5_0/scoring.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-rhino"
                  >
                    Lucene documentation.
                  </a>
                </div>
              </div>
              <div className="w-1/3 rounded">
                <img src={First} alt="first" />
              </div>
            </div>
          </div>
        </div>{" "}
        {/**************END ROW 2 **********/}
        {/* <div className="bg-green-600 rounded h-1 w-3/4 mx-auto mb-10"></div> */}
        <div className="bg-fuchsia-800 text-center text-3xl text-white py-4 rounded w-full mx-auto mb-10">
          CUSTOM SCORE MODIFIERS
        </div>
        <div className="text-center mb-6 text-xl ">
          Atlas Search's {"  "}
          <span className="text-green-800 font-bold text-xl">
            custom score modifiers
          </span>{" "}
          can influence the score and further fine-tune your search results.
        </div>
        <div className="ROW3 flex mx-auto w-full space-x-10 mb-10">
          <ScoreModifierCard
            title={boost.title}
            codeObject={boost.code}
            description={boost.description}
          >
            {" "}
            This query will multiply relevance-based score by 3 if the term
            <KeyWord type="title">"Godfather"</KeyWord> is found in the{" "}
            <KeyWord type="variable">title</KeyWord>field.<br></br>This way we
            get <KeyWord type="title">The Godfather</KeyWord> movies before we
            get movies that happen to be about{" "}
            <span className="italic">godfathers</span>.
          </ScoreModifierCard>
          <ScoreModifierCard
            title={constant.title}
            description={constant.description}
            codeObject={constant.code}
          >
            This query will find <KeyWord type="title">James Bond</KeyWord>{" "}
            movies. The ones with Daniel Craig will have the assigned score of{" "}
            <KeyWord type="variable">50</KeyWord>. <br></br>
            <br></br> Because duh.
          </ScoreModifierCard>
          <ScoreModifierCard
            title={functionScore.title}
            description={functionScore.description}
            codeObject={functionScore.code}
          >
            This <KeyWord>$search</KeyWord> query will look for{" "}
            <KeyWord type="word">zombies</KeyWord> in the{" "}
            <KeyWord type="variable">fullplot</KeyWord> and{" "}
            <KeyWord type="variable">title</KeyWord> fields before multiplying
            the score of the resulting documents by its{" "}
            <KeyWord type="variable">imdb.rating</KeyWord>. <br></br>If there is
            no <KeyWord type="variable">imdb.rating</KeyWord> field, it will
            multiply the searchScore by 2.<br></br>
            <br></br>This will result in getting the highest reviewed zombie
            movies first. <span className="text-3xl">🧟</span>
          </ScoreModifierCard>
        </div>
        <div className="flex mx-auto space-x-10 ">
          <div className="w-2/5 mt-auto">
            <img src={Films} alt="films" />
          </div>
          <div className="w-1/2 text-center overflow-auto px-10 mb-10 ">
            <div className="w-full mt-6 text-xl border-4 border-red-700 pb-8  rounded">
              <div className="bg-red-700 py-3  text-white text-2xl text-center w-full mb-4">
                EXERCISE 1: FUNCTION SCORING
              </div>
              <div className="flex">
                <div className="w-1/5 mx-auto ml-4">
                  <img src={James} alt="james" />
                </div>
                <div className="px-10">
                  Create a <KeyWord>$search</KeyWord> query to find only James
                  Bond movies. Now use a score modifier to return these results
                  with the highest{" "}
                  <KeyWord type="variable">imdb.rating</KeyWord> values first.
                  <br></br>
                </div>
              </div>

              <div className="text-2xl text-center text-indigo-900">
                What was the best rated James Bond movie?
              </div>
            </div>
            <div className="relative w-full mt-6 text-xl border-4 border-red-700 pb-8  rounded">
              <div className="bg-red-700 py-3  text-white text-2xl text-center w-full mb-4">
                EXERCISE 2: COMPOUND & BOOST
              </div>
              <div className="px-10">
                <span className="italic">Brad Pitt</span> can do no wrong when
                it comes to movies...
                <div className="text-center text-4xl">🍿{"  "} 🎥</div>
                and now I have you thinking about{" "}
                <span className="text-6xl">🧟</span>s!
                <br></br>
                <br></br>
                Create a <KeyWord>$search</KeyWord> compound query to find
                movies starring Brad Pitt - <span className="italic">AND</span>{" "}
                boost that score by 5 if it is also a horror movie.{" "}
                <span className="text-3xl">😱</span>
                <br></br>
                <br></br>
                <div className="text-2xl text-center text-indigo-900">
                  What was the name of the top movie result? What was the search
                  score?
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/6 my-auto mx-auto">
            {" "}
            <img src={Question} alt="q" />
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson7;

const functionScore = {
  title: "function",
  description: `The function option allows you to alter the final score of the document using a numeric field . You can specify the numeric field for computing the final score through an 
expression.`,
  code: {
    $search: {
      text: {
        path: ["fullplot", "title"],
        query: "zombies",
        score: {
          function: {
            multiply: [
              {
                path: {
                  value: "imdb.rating",
                  undefined: 2,
                },
              },
              {
                score: "relevance",
              },
            ],
          },
        },
      },
    },
  },
};

const constant = {
  title: "constant",
  description: `The constant option replaces the base score with a specified number.
`,
  code: {
    $search: {
      compound: {
        should: [
          {
            text: {
              query: "James Bond",
              path: "fullplot",
            },
          },
          {
            text: {
              query: "Daniel Craig",
              path: "cast",
              score: { constant: { value: 50 } },
            },
          },
        ],
      },
    },
  },
};
const boost = {
  title: "boost",
  description: `The boost option multiplies a result's base score by a given number 
  or the value of a numeric field in the documents. This is helpful for weighting certain fields or increasing the importance of certain matching documents in the result.`,
  code: {
    $search: {
      compound: {
        should: [
          {
            text: {
              query: "Godfather",
              path: ["plot", "fullplot"],
            },
          },
          {
            text: {
              query: "Godfather",
              path: "title",
              score: { boost: { value: 3 } },
            },
          },
        ],
      },
    },
  },
};
