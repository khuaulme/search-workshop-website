import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";
import Footer from "../components/Footer";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Compass from "../images/Compass.png";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import CompoundSearch from "../images/lessonImages/CompoundSearch.png";
import CodeSandbox from "../components/CodeSandbox";
import ClauseTable from "../components/ClauseTable";
import ZombieResults from "../images/lessonImages/ZombieResults.png";
import Reveal from "../components/Reveal";
import Tile from "../images/tile.png";

const Lesson6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [showCompound, setShowCompound] = useState(false);
  const toggle = (showResults) => {
    setShowResults(!showResults);
  };
  const toggleCompound = (showCompound) => {
    setShowCompound(!showCompound);
  };

  return (
    <LessonTemplate
      title="Lesson 6. The Compound Operator: For Fine-Tuned Searches"
      next="/Lesson7"
      previous="/Lesson5"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="flex space-x-10">
          <div className="mb-8 text-black mx-auto w-2/3 my-auto text-lg px-10">
            Has this ever happened to you? 🤔 You're looking for that classic
            horror flick from the 70s.
            <span className="text-3xl">🧟😱</span> But you just can’t remember
            the name. How frustrating! Times like this, a simple search box just
            won’t do the trick. To find it fast, we may need to combine several
            search parameters together to find what we want.<br></br>
            <br></br> In this lesson, we will learn how to combine our{" "}
            <KeyWord>$search</KeyWord> operators together to quickly and easily
            create fine-grained searches using the{" "}
            <KeyWord type="operator">compound</KeyWord> operator.
          </div>
          <div className="w-1/4 mx-auto">
            <img src={CompoundSearch} alt="compound" />
          </div>
        </div>
        {/*********END 1ST ROW **************/}
        <div className="bg-teal-700 rounded ml-auto w-2/3 h-1 my-8 relative ">
          {" "}
          <div className="w-1/4 absolute -top-20 -right-0">
            <TipCard side="right">
              A good search experience can interpret a user’s intent!
            </TipCard>
          </div>
        </div>
        <div className="2ND-ROW flex text-base mx-auto ">
          <div className=" w-1/2 text-center overflow-auto">
            <div className="px-16 mb-4 text-left">
              Now, to find this classic horror whose name is stuck on the tip of
              your tongue, each of these individual <KeyWord>$search</KeyWord>{" "}
              queries would put us on the right path:
            </div>
            <div className="flex mx-auto justify-evenly ">
              <CodeSnippetsCopy copyTextObject={horrorObject} />{" "}
              <CodeSnippetsCopy copyTextObject={textObject} />{" "}
              <CodeSnippetsCopy copyTextObject={ratingObject} />{" "}
            </div>{" "}
            <div className="bg-rhino h-1 w-3/5 mx-auto mt-4 rounded"></div>
          </div>
          <div className=" w-1/2 text-left px-16 items-center">
            So we could simply combine these queries in a larger{" "}
            <KeyWord>$search</KeyWord>
            stage, using the <KeyWord type="operator">compound</KeyWord>. But
            wait a minute! How important are these? Are they equally important?
            Are they <KeyWord type="word">must-haves</KeyWord> or{" "}
            <KeyWord type="word">should-haves</KeyWord> or simply{" "}
            <KeyWord type="word">something-along-the-lines-of</KeyWord>? Was
            this movie classified as "horror"? Or maybe was it a "thriller"?{" "}
            <br></br>
            <br></br>This is what makes <KeyWord type="title">search</KeyWord>{" "}
            so <span className="italic">interesting.</span> As a search
            developer, you need to anticipate your user's intent. Forget what
            they said. What did they <span className="italic">MEAN?</span>
            <br></br>
            <br></br>To accommodate for this{" "}
            <span className="italic"> nuance </span>, the{" "}
            <KeyWord type="operator">compound</KeyWord> operator takes 4
            different <KeyWord type="title">clauses</KeyWord>:{" "}
            <div className="mx-auto text-center mt-4">
              <KeyWord type="tab">must</KeyWord>
              {" - "}
              <KeyWord type="tab">mustNot</KeyWord>
              {" - "}
              <KeyWord type="tab">should</KeyWord>
              {" - "}
              <KeyWord type="tab">filter</KeyWord>.
            </div>
          </div>
        </div>
        <div className="flex full px-10 space-x-20">
          <div className="w-3/5 mx-auto mt-12">
            <div className="text-2xl font-bold">
              Have a look <span className="text-4xl">👀</span> at the syntax of
              a<KeyWord type="operator">compound</KeyWord> $search query:{" "}
              <span className="text-4xl">🧐</span>
            </div>
            <div className="w-full mx-auto my-4">
              <CodeSnippetsCopy
                type="function"
                copyTextObject={compoundObject}
              />{" "}
            </div>
            Notice that compound takes one or all of the clauses. And each
            clause would take an array of the subqueries.
          </div>
          <div className="w-2/5">
            {" "}
            <div className="text-center">
              <ClauseTable />
            </div>
          </div>
        </div>
        {/*********************END 2ND ROW **************************************/}
        <div className="flex mt-12 justify-around">
          <div className="text-xl text-center w-1/2">
            {" "}
            So combining the 3 queries above into one might look like this:
            <div className="my-2 w-3/5 mx-auto">
              <CodeReveal
                title="REVEAL COMPOUND SEARCH QUERY"
                negTitle="HIDE COMPOUND QUERY"
                open={showCompound}
                toggle={toggleCompound}
                copyTextObject={sampleCompound}
                lesson="6"
              ></CodeReveal>
            </div>
          </div>
          <div className="text-xl text-center w-1/2">
            To bring the following frightful flicks to our attention :
            <div className="w-full mx-auto">
              <Reveal
                title="SHOW ZOMBIE MOVIE RESULTS 🧟 🧟‍♀️"
                negTitle="HIDE ZOMBIE MOVIES"
                open={showResults}
                toggle={toggle}
                content="movies"
              >
                <img
                  src={ZombieResults}
                  alt="zombies"
                  className="mt-6 rounded"
                />
              </Reveal>
            </div>
          </div>
        </div>
        <div className="bg-teal-700 h-1 mx-auto w-1/3 mt-6"></div>
        {/*********************END 3RD ROW **************************************/}
        <div className="flex w-full mx-auto text-left justify-evenly  mb-10">
          <div className="w-1/2 mx-auto my-4 text-lg px-10 flex">
            <div className="w-3/4 px-10">
              These clauses <KeyWord type="tab">must</KeyWord>,{" "}
              <KeyWord type="tab">mustNot</KeyWord>,{" "}
              <KeyWord type="tab">should</KeyWord>, and{" "}
              <KeyWord type="tab">filter</KeyWord>
              are the glue <span className="text-2xl"></span> for combining
              search parameters inside of the{" "}
              <KeyWord type="operator">compound</KeyWord>. They allow for you to
              apply more or less consideration to whether certain search
              conditions are met. <br></br>
              <br></br>Think about<KeyWord type="title">clauses</KeyWord> as the
              grout between the subquery tiles, the mortar between the search
              query bricks. They won't get a ton of attention - unless they are
              missing.
            </div>
            <div className="w-1/3 mx-auto ">
              {" "}
              <img src={Tile} alt="tile" />
            </div>
          </div>
          <div className="w-1/2 text-center overflow-auto px-10 ">
            <div className=" w-full mt-6 text-xl border-4 border-fuchsia-800 pb-8  rounded-xl">
              <div className="bg-fuchsia-800 py-3 rounded text-white text-2xl text-center w-full mb-4">
                EXERCISE
              </div>
              <div className="px-10">
                You are <span className="italic">DEFINITELY</span> in the mood
                for Star Wars!
                <div className="text-center text-4xl">🍿{"  "} 🎥</div>
                But one of the older ones - no Jar Jar Binks. Combine at least 2
                search parameters into a logical <KeyWord>$search</KeyWord>{" "}
                query using our new <KeyWord type="operator">compound</KeyWord>{" "}
                operator to achieve this.<br></br>
                <br></br>
                What was the title and searchScore of your first 2 results?
              </div>
            </div>
          </div>

          {/* <div className="w-1/3 absolute -bottom-20 -right-16">
              <TipCard side="right">
                You can use the minimumShouldMatch option to specify a minimum
                number of <KeyWord type="operator">should</KeyWord>
                clauses to match.
              </TipCard> 
            </div>*/}
        </div>{" "}
        {/*************END 3RD ROW **********/}
        {/* <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" /> */}
        <div className="bg-rhino rounded ml-auto w-3/4 py-2 text-center text-white uppercase text-3xl my-8 mx-auto ">
          CREATING THE BACKEND
        </div>
        <div className="w-full flex mx-auto justify-evenly space-x-8 mb-20">
          <div className="w-1/3 shadow-md shadow-slate-700 rounded p-4">
            In the code sandbox above, we now have an interface for more search
            parameters - <KeyWord type="title">genres</KeyWord>,{" "}
            <KeyWord type="title">rating</KeyWord>, and{" "}
            <KeyWord type="title">date released</KeyWord>, in addition to our
            search box. Now we will tile these parameters in a{" "}
            <KeyWord type="operator">compund</KeyWord> search query. Once we
            have that <KeyWord>$search</KeyWord> aggregation pipeline built, we
            will incorporate it into a Data API to be called by our movie search
            app.
          </div>
          <div className="w-1/3 shadow-md shadow-slate-700 rounded p-4"></div>
          <div className="w-1/3 shadow-md shadow-slate-700 rounded p-4"></div>
        </div>
      </div>
    </LessonTemplate>
  );
};
export default Lesson6;

const compoundObject = `{
  $search: {
    "index": <index name>, // optional, defaults to "default"
    "compound": {
      <must | mustNot | should | filter>: [ { <clauses> } ],
      "score": <options>
    }
  }
}`;

const sampleCompound = {
  $search: {
    compound: {
      must: [
        {
          text: {
            query: "zombies",
            path: ["plot", "fullplot"],
            fuzzy: {
              maxEdits: 1,
            },
          },
        },
      ],
      should: [
        {
          text: {
            query: "Horror",
            path: "genres",
          },
        },
        {
          range: {
            gte: 8,
            lte: 10,
            path: "imdb.rating",
          },
        },
      ],
    },
  },
};

const horrorObject = {
  $search: {
    text: {
      query: ["Horror"],
      path: "genres",
    },
  },
};

const ratingObject = {
  $search: {
    range: {
      gte: 8,
      lte: 10,
      path: "imdb.rating",
    },
  },
};

const textObject = {
  $search: {
    text: {
      query: "zombies",
      path: ["plot", "fullplot"],
    },
  },
};
