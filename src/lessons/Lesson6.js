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
import Chef from "../images/Chef.png";

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
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="flex space-x-10">
          <div className="mb-8 text-black mx-auto w-2/3 my-auto text-lg px-10">
            Has this ever happened to you? 🤔 You're looking for that classic
            horror flick from the 70s.
            <span className="text-3xl">🧟😱</span> But you just can’t remember
            the name. How frustrating! Times like this, a simple search box just
            won’t do the trick. To find it fast, we may need to combine several
            search parameters together to hone in on what we want.<br></br>
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
            <span className="text-2xl font-bold ">
              must, mustNot, should, filter
            </span>
            .
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
            Notice that compound takes 1 or all of the clauses. And the clauses
            would take an array of the subqueries. So a{" "}
            <KeyWord>$search</KeyWord> query combining those 3 parameters could
            look like this:
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
            <div className="text-xl text-center">
              To bring the following frightful flicks to our attention :
              <div className="w-full mx-auto">
                <Reveal
                  title="SHOW ZOMBIE MOVIE RESULTS 🧟 🧟‍♀️"
                  negTitle="HIDE ZOMBIES"
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
          <div className="w-2/5">
            {" "}
            <div className="text-center">
              <ClauseTable />
            </div>
          </div>
        </div>
        {/* <div className="bg-rhino h-2 w-full my-10"></div> */}
        {/*********************END 2ND ROW **************************************/}
        <div className="bg-teal-700 h-1 ml-32 w-1/3 mt-4"></div>
        <div className="flex w-full mx-auto text-left space-x-10 mb-10">
          <div className="w-1/2 text-center overflow-auto px-10 mt-10">
            <div className=" w-full mt-6 text-xl border-4 border-fuchsia-800 pb-8  rounded-xl">
              <div className="bg-fuchsia-800 py-3 rounded text-white text-2xl text-center w-full mb-4">
                EXERCISE
              </div>
              <div className="px-10">
                You are <span className="italic">DEFINITELY</span> in the mood
                for zombies! <br></br>
                <span className="text-3xl">🧟 😱 🧟‍♀️</span>
                <br></br>Combine the 3 search parameters above into a logical{" "}
                <KeyWord>$search</KeyWord> query using our new{" "}
                <KeyWord type="operator">compound</KeyWord> operator.<br></br>
                <br></br>
                What was the title and searchScore of your first result?
              </div>
            </div>
          </div>

          <div className="w-1/2 text-left px-10 relative">
            {/* <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-600" /> */}

            <div className="w-1/3 absolute -bottom-20 -right-16">
              <TipCard side="right">
                You can use the minimumShouldMatch option to specify a minimum
                number of <KeyWord type="operator">should</KeyWord>
                clauses to match.
              </TipCard>
            </div>
            {/*  */}
          </div>
        </div>{" "}
        {/*************END 3RD ROW **********/}
        <div className="flex mx-auto space-x-8">
          <div className="w-1/2 mx-auto my-4">
            These clauses are the unsung heros of the combining search
            parameters. They allow for you to apply more or less consideration
            to whether certain search conditions are met. Think about{" "}
            <KeyWord type="title">clauses</KeyWord> as the grout between the
            subquery tiles, the mortar between the search query bricks. They
            won't get a ton of attention, unless they are missing.
          </div>
        </div>
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" />
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
