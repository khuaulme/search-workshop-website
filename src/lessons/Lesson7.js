import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Score from "../images/Score.svg";
import Relevance from "../images/relevance.jpg";
import Descending from "../images/descending.png";
import DidYouKnow from "../images/lessonImages/DidYouKnow.png";
import First from "../images/first.gif";

const Lesson7 = () => {
  return (
    <LessonTemplate title="Lesson 7. The Score Indeed Matters" next="/Lesson8">
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex space-x-10 items-center w-full">
          <div className="w-1/4 mx-auto my-auto">
            <img src={Score} alt="compound" />
          </div>
          <div className="mb-8 text-black mx-auto w-1/2  text-lg">
            In Lesson 3, we introduced the concept of{" "}
            <KeyWord type="title">relevance-based scoring</KeyWord> when
            building out our search aggregation. In this brief lesson, we’ll
            discuss the importance of scoring and show a few ways to "work the
            search ref" and influence the score include your favor.
          </div>
        </div>
        {/**************END ROW 1 **********/}
        <div className="flex items-center justify-evenly text-base space-x-10">
          <div className="w-2/3">
            Atlas Search computes a score based on{" "}
            <KeyWord type="word">relevance</KeyWord> for each of our movie
            documents and returns the movies to us with the scores in{" "}
            <span className="italic font-bold">descending</span> order.
            <div className="text-center mx-auto text-sm text-rhino p-4 ">
              {" "}
              <img src={Descending} alt="descending" className="w-full my-2" />
              Notice the higher scores are returned first. Higher scores mean
              higher relevance.
              <div className="bg-fuchsia-800 mt-2 text-white h-1 w-2/3 rounded mx-auto text-center uppercase"></div>
            </div>
            <div>
              <KeyWord type="word">Relevance</KeyWord> is essentially a measure
              of how well your search results matched the users request. Having
              a high relevance ensures a better user experience. And a truly
              great search experience results in meeting specific needs.{" "}
              <span className="text-3xl">🎯</span>After all, you gotta give the
              people what they want to keep them coming back.
            </div>
          </div>{" "}
          <div className="w-1/4 shadow-md shadow-slate-300 rounded ">
            <img src={Relevance} alt="relevant" />
          </div>
        </div>
        {/**************END ROW 2 **********/}
        <div className="flex w-full my-10 space-x-10">
          <div className="w-1/5">
            <img src={DidYouKnow} alt="didyouknow" />
          </div>
          <div className="w-3/4 text-base">
            <div className="flex space-x-6 mb-8">
              <div className="text-center">
                <span className="font-bold text-green-600 text-xl">
                  So who’s keeping score?
                </span>{" "}
                <span className="font-bold text-fuchsia-800 text-xl">
                  You should and here's why!
                </span>{" "}
                <br></br>
                <br></br>
                In the words of the immortal Ricky Bobby,{" "}
                <span className="text-rhino">
                  "If you ain’t first, you’re last?”{" "}
                </span>
                Ouch! But sadly, when it comes to the search bar that rings
                true… <br></br>According to this analysis of over 4 millions
                Google search results by Backlingo, the number 1 search result
                has a click through rate 10X that of the result in position 10.
                In fact the top 3 returned search results made up over 54% of
                all the click-throughs.
              </div>

              <div className="w-1/3 rounded">
                <img src={First} alt="first" />
              </div>
            </div>
            {/******END RICKY BOBBY *****/}
            <div>
              So if there is something, whether it is a movie, product,
              restaurant, that you want your users to see first, you will want
              its score to be as high as possible.
            </div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson7;
