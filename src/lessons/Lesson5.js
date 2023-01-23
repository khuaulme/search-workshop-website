import React from "react";
import LessonTemplate from "../components/LessonTemplate";
import CodeSandbox from "../components/CodeSandbox";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import SearchOperators from "../components/SearchOperators";
import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import SearchResults from "../components/SearchResults";
//images
import SearchBar from "../images/SimpleSearchBar.png";
import InsertEndpoint from "../images/lessonImages/InsertEndpoint.png";
import BasicResults from "../images/Screenshots/BasicTextScreen.png";
import BasicTextArray from "../images/Screenshots/BasicTextArray.png";
import PhraseTitle from "../images/Screenshots/PhraseTitle.png";

const Lesson5 = () => {
  return (
    <LessonTemplate
      title="Lesson 5. Call API from the Front End"
      next="/Lesson6"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative mt-10 w-full px-10 space-x-12 items-center justify-center">
          <div className="w-1/3">
            <div className="text-xl text-center font-bold">
              At last, the search bar. Our precious!
            </div>
            <img src={SearchBar} alt="icon" className="w-1/2 mx-auto" />
            In this quick lesson, let's put our Atlas Search query to good use
            by connecting our backend API to our front end - provided to you in
            the embedded CodeSandbox below. <br></br>
            <br></br>
            Currently, typing anything in the search box will bring you no
            results. 🤷🏽‍♀️ In this short lesson, we will build out this
            functionality in a few quick steps.
          </div>
          <div className="w-1/2 flex flex-col px-10 text-left">
            <div>
              Our main point of integration is in the <KeyWord>Home.js</KeyWord>{" "}
              file found in the src/components directory.
            </div>
            <img
              src={InsertEndpoint}
              alt="home screen"
              className="w-3/4 mx-auto transition duration-1000 ease-in-out transform hover:scale-110 "
            />
            <ul>
              {" "}
              <li>
                ✅ Paste your new App Services HTTP endpoint as the value for{" "}
                <KeyWord type="variable">MOVIES_ENDPOINT </KeyWord>
                variable on <KeyWord type="line">line 13</KeyWord>.
              </li>{" "}
              <br></br>
              <li>
                ✅ Just type! Enter "Harry Potter" or "Harrry Pottter" or
                whatever you like to find whatever movie you want.{" "}
                <span className="2xl">🔎📽️🍿</span>
              </li>
            </ul>
          </div>
        </div>
        {/*******************END TOP ROW ****************************/}
        <div className="2ND ROW flex relative w-full">
          <div className="w-1/3 absolute -right-16 top-6">
            <TipCard side="right">
              Open up the embedded Code Sandbox in the browser gives you your
              own forked sandbox of our Netflix Clone application. Edit away as
              you please!
            </TipCard>
          </div>
          <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson4/?fontsize=14&hidenavigation=1&theme=dark" />
        </div>
        {/*******************END 2ND ROW ****************************/}
        <div className="relative flex flex-col">
          <div className=" text-green-800 text-xl py-2 px-4 my-6 text-center w-2/5 mx-auto rounded shadow-md shadow-gray-700">
            In addition to <KeyWord type="operator">text</KeyWord>, try these
            other operators in your <KeyWord>$search</KeyWord> stage in your
            back-end function to see how the movies change.
          </div>

          <SearchOperators />
          <div className="absolute top-0 -right-0 w-1/4">
            <TipCard side="center">
              Other <KeyWord> $search</KeyWord> stage operators can be found in
              our{" "}
              <a
                className="font-noto text-center text-2xl text-rhino underline"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/docs/atlas/atlas-search/operators-and-collectors/"
              >
                documentation. 📗📖
              </a>
            </TipCard>
          </div>
          {/*****************END STAGES ROW ************************************/}
          <div className="relative w-3/4 mx-auto my-10">
            <div className="absolute top-20 -left-60 w-1/4">
              <TipCard side="left">
                We do not need to explicitly include the index in the search
                query if we are using one named{" "}
                <KeyWord type="title">"default"</KeyWord>
              </TipCard>
            </div>
            <div className="w-2/3 text-center mx-auto my-8 text-xl">
              As exciting as it is to get our movies back, you might notice that
              we aren't exactly getting all of our{" "}
              <KeyWord type="title">Harry Potter</KeyWord> movies first. 😞{" "}
              <br></br>
              <br></br> Let's play around with a few elements and see what
              happens.
            </div>
            <div className="SEARCH RESULT COMPARISON space-y-8">
              <SearchResults
                screenImage={BasicResults}
                screenTitle="Movie Search Results from Basic Text Query"
                query={originalQuery}
              >
                <div className="p-4 text-center">
                  Our original simple search for Harry Potter in the{" "}
                  <KeyWord type="code">fullplot</KeyWord> is a good start...
                </div>
              </SearchResults>
              <div className="SEPARATOR bg-green-700 h-2 w-2/3 mx-auto rounded-2xl my-10"></div>
              <SearchResults
                screenImage={BasicTextArray}
                screenTitle="Results Searching Across 'title', 'fullplot' and 'plot' Fields"
                query={textPathArray}
              >
                <div className="p-4 text-center">
                  We know that all <KeyWord type="title">Harry Potter</KeyWord>{" "}
                  movies, have "Harry Potter" in the title, so lets add{" "}
                  <KeyWord type="variable">title</KeyWord> to our search stage
                  path... and why not add{" "}
                  <KeyWord type="variable">plot</KeyWord> while we are at it. 🤷🏽‍♂️
                  <br></br>
                  <br></br> We search across multiple fields by combining them
                  in an array.
                </div>
              </SearchResults>{" "}
              <div className="SEPARATOR bg-green-700 h-2 w-2/3 mx-auto rounded-2xl my-10"></div>
              <SearchResults
                screenImage={PhraseTitle}
                screenTitle="Movie Search Results Using the Phrase Operator"
                query={phraseTitle}
              >
                <div className="p-4 text-center">
                  We know that all <KeyWord type="title">Harry Potter</KeyWord>{" "}
                  movies have "Harry Potter" in the title. We can search for
                  terms that go together using the{" "}
                  <KeyWord type="operator">phrase</KeyWord> operator and search
                  only in the title field. This search query brings back all the
                  Harry Potter movies in our movie database.<br></br>
                  <span className="italic text-sm">
                    ** note the use of the <KeyWord type="tab">slop</KeyWord>{" "}
                    option.
                  </span>
                </div>
              </SearchResults>{" "}
            </div>
            <div className=" SEPARATOR bg-green-700 h-2 w-2/3 mx-auto rounded-2xl mt-10"></div>
          </div>
          <div className="CONCLUSION relative w-4/5 flex mb-20 px-20 mx-auto text-center text-xl space-x-12">
            <div className="w-2/3 mx-auto">
              A good search engine brings the right results to its user first!
              It should be simple to look for{" "}
              <KeyWord type="title">Harry Potter </KeyWord>movies without having
              to scroll past movies about Beatrix Potter, Cole Porter, or
              Trolls. There is a better way.
              <div className="my-2 text-4xl">🧌🤦‍♀️</div>
              In our next lesson, we will look at combining our search
              parameters together in the same query using the{" "}
              <KeyWord type="operator">compound </KeyWord> operator. So if you
              are looking for your favorite sports movie from high school or
              perhaps a Tom Hanks-Meg Ryan romance from the 90s? The{" "}
              <KeyWord type="operator">compound </KeyWord> operator will allow
              us to fine-tune our queries and find what we are looking for
              faster. <span className="my-2 text-3xl">🧐</span>
            </div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson5;

const originalQuery = {
  text: {
    query: "Harry Potter",
    path: "fullplot",
    fuzzy: { maxEdits: 1 },
  },
};

const textPathArray = {
  text: {
    query: "Harry Potter",
    path: ["title", "fullplot", "plot"],
    fuzzy: { maxEdits: 1 },
  },
};

const phraseTitle = {
  phrase: {
    query: "Harry Potter",
    path: "title",
    slop: 0,
  },
};
