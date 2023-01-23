import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Score from "../images/Score.png";
import Relevance from "../images/relevance.jpg";
import Descending from "../images/descending.png";
import DidYouKnow from "../images/lessonImages/DidYouKnow.png";
import First from "../images/first.gif";

const Lesson7 = () => {
  return (
    <LessonTemplate title="Lesson 7. The Score Matters" next="/Lesson8">
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="relative flex space-x-8 items-center w-full mt-20">
          <div className="absolute w-24 object-contain rounded -left-4 top-0 ">
            <img src={Score} alt="score" />
          </div>
          <div className="COL-LEFT mb-8 text-black mx-auto w-2/3 text-center text-lg ">
            <div className="w-4/5 mx-auto ">
              In Lesson 3, we introduced the concept of{" "}
              <KeyWord type="title">relevance-based scoring</KeyWord> when
              building out our search aggregation. In this brief lesson, we’ll
              discuss the importance of scoring and show a few ways to "work the
              search ref" and influence the score include your favor.
            </div>

            <div className="mt-6 w-4/5 mx-auto">
              Atlas Search computes a score based on{" "}
              <KeyWord type="title">relevance</KeyWord> for each of our movie
              documents and returns the movies to us with the scores in{" "}
              <span className="italic font-bold">descending</span> order.
            </div>
            <div>
              <img
                src={Descending}
                alt="descending"
                className="w-full px-10 mx-auto  my-auto"
              />
              <div className="text-center mx-auto text-sm italic text-rhino p-4 ">
                {" "}
                Notice the higher scores are returned first. Higher scores mean
                higher relevance.
                <div className="bg-fuchsia-800 mt-2 text-white h-1 w-1/2 rounded mx-auto text-center uppercase"></div>
              </div>
            </div>
          </div>

          <div className="COL-RIGHT w-1/5 shadow-md shadow-slate-300 rounded my-auto ">
            <img src={Relevance} alt="relevant" />
          </div>
        </div>
        {/**************END ROW 1 **********/}
        <div className="flex w-full space-x-10 mb-10">
          <div className="w-1/5">
            <img src={DidYouKnow} alt="didyouknow" />
          </div>
          <div className="w-3/4 text-base px-16">
            <div className="w-3/4 mx-auto px-8 py-4 shadow-md shadow-slate-600 rounded text-center">
              {" "}
              <KeyWord type="word">Relevance</KeyWord> is essentially a measure
              of how well your search results matched the users request. A high
              relevance delivers a truly great search experience and keeps users
              coming back.<br></br> <span className="text-2xl">🎯</span>
              <br></br>
              You gotta give 'em what they want .
            </div>
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
              According to this analysis of over 4 millions Google search
              results by Backlingo, the number 1 search result has a click
              through rate 10X that of the result in position 10. In fact the
              top 3 returned search results made up over 54% of all the
              click-throughs.So if there is something, whether it is a movie,
              product, restaurant, that you want your users to see first, you
              will want its score to be as high as possible.
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
      </div>
    </LessonTemplate>
  );
};

export default Lesson7;
