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
          <div className="w-1/4 mx-auto">
            <img src={CompoundSearch} alt="compound" />
          </div>
          <div className="mb-8 text-black mx-auto w-2/3 my-auto text-lg">
            Has this ever happened to you? You need to find that newly released
            movie for the kids… is it an animated film or a musical? What was it
            called again?🤔 Or That classic horror flick from the 70s.
            <span className="text-3xl">🧟😱</span> But you just can’t remember
            the name. How frustrating! Times like this, a simple search box just
            won’t do the trick. To find it fast, we may need to combine several
            search parameters together to hone in on what we want.<br></br>
            <br></br> In this lesson, we will learn how to combine our{" "}
            <KeyWord>$search</KeyWord> operators together to quickly and easily
            create fine-grained searches using the{" "}
            <KeyWord type="operator">compound</KeyWord> operator.
          </div>
        </div>
        {/*********END 1ST ROW **************/}
        <div className="bg-teal-700 rounded mx-auto w-2/3 h-1 my-8 relative ">
          {" "}
          <div className="w-1/4 absolute -top-20 -right-72">
            <TipCard side="right">
              A good search experience can interpret a user’s intent!
            </TipCard>
          </div>
        </div>
        <div className="2ND-ROW flex text-lg mx-auto ">
          <div className=" w-1/2 text-center overflow-auto">
            <div className="px-16 mb-4 text-left">
              To find the classic horror on the tip of your tongue, we could
              come up with individual <KeyWord>$search</KeyWord> stages like
              this:
            </div>
            <div className="flex mx-auto justify-evenly ">
              <CodeSnippetsCopy copyTextObject={horrorObject} />{" "}
              <CodeSnippetsCopy copyTextObject={textObject} />{" "}
              <CodeSnippetsCopy copyTextObject={ratingObject} />{" "}
            </div>
          </div>
          <div className="r w-1/2 text-left px-16">
            You might be thinking that maybe we can just combine them and throw
            them all directly into a larger JSON for our{" "}
            <KeyWord>$search</KeyWord> stage... But wait a minute! How important
            are these? Are they equally important? Are they{" "}
            <KeyWord type="word">must-haves</KeyWord> or{" "}
            <KeyWord type="word">should-haves</KeyWord>? Was this movie
            classified as "horror"? Or maybe was it a "thriller"? <br></br>
            <br></br>That's what makes search so{" "}
            <span className="italic">interesting.</span> As a search developer,
            you need to anticipate your user's intent. Forget what they said.
            What did they <span className="italic">MEAN?</span>
            <br></br>
            <br></br> Along with the <KeyWord type="operator">compound</KeyWord>{" "}
            operator, Atlas Search provides 4 different{" "}
            <KeyWord type="title">clauses</KeyWord> to give you tunable degrees
            of freedom around your compound search queries.
          </div>
        </div>
        {/*********************END 2ND ROW **************************************/}
        <div className="bg-teal-700 h-1 ml-32 w-1/3 mt-4"></div>
        <div className="flex w-full mx-auto text-left space-x-10 mb-10">
          <div className="w-1/2 text-center overflow-auto px-10 mt-10">
            The <KeyWord type="operator">compound</KeyWord>operator has the
            following syntax:
            <div className="w-full mx-auto my-4">
              <CodeSnippetsCopy
                type="function"
                copyTextObject={compoundObject}
              />{" "}
            </div>
            <div className="text-left text-lg">
              Notice that the <KeyWord type="operator">compound</KeyWord> search
              query must use at least one of the 4 clauses. Different clauses
              contribute different ways to the movie's searchScore - which will
              then affect its position in the search results. Refer to the table
              to see how they compare.
            </div>
            {/* <div className="mt-10">
              Search developers are much like chefs. 🧑🏻‍🍳 Your queries are your
              main ingredients, and the compound operator is your plate 🍽️ Just
              as a chef has many ingredients to make a great dish, you have any
              tunables at your disposal to craft your user’s experience Take
              spaghetti and meatballs 🍝. Are they equally important? And a chef
              would use different seasonings and sides to enhance and complement
              and balance the different ingredients.
            </div> */}
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
            <div className="text-center">
              <ClauseTable />
            </div>
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
