import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LessonTemplate from "../components/LessonTemplate";
import { Link } from "react-router-dom";
import TipCard from "../components/TipCard";
import Step from "../components/Step";
import Reveal from "../components/Reveal";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import Autocomplete from "../images/lessonImages/Autocomplete.png";
import ACSearch from "../images/lessonImages/ACSearch.png";
import CodeSandbox from "../components/CodeSandbox";
import VideoWalkThru from "../images/VideoWalkThru.png";
import Reminder from "../images/Reminder.png";
import Ticket from "../images/Ticket.png";

const Lesson8 = () => {
  const { register, handleSubmit, errors, reset } = useForm();

  const [endpointURL, setEndpointURL] = useState("");
  const onSubmit = (endpoint) => {
    console.log("ENDPOINT", endpoint.endpointURL);
    setEndpointURL(endpoint.endpointURL);
  };

  const [showVideo, setShowVideo] = useState(false);
  const toggleVideo = (showVideo) => {
    setShowVideo(!showVideo);
  };

  const [showFinalAggregation, setShowFinalAggregation] = useState(false);
  const toggle = (showFinalAggregation) => {
    setShowFinalAggregation(!showFinalAggregation);
  };

  const [showFinalFunction, setShowFinalFunction] = useState(false);
  const toggleFunction = (showFinalFunction) => {
    setShowFinalFunction(!showFinalFunction);
  };
  return (
    <LessonTemplate
      title="Lesson 8. Autocom..."
      next="/Lesson9"
      previous="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full pr-20 space-x-10">
          <div className="w-1/3 mx-auto my-auto ">
            <img src={ACSearch} alt="autocomplete" />{" "}
          </div>

          <div className=" font-barlow text-lg w-3/5 mt-16 text-left">
            My spelling stinks, and I blame Google. <br></br>
            <br></br>For better or for worse, Google has spoiled us.
            Autocomplete, autosuggest, search-as-you-type - whatever you call
            it, we have grown to expect it for so many reasons:
            <div className="flex my-4">
              <ul className="ml-10 my-4 w-1/2">
                <li>⏲️ save time typing and searching</li>
                <li>🔎 correct misspelled words</li>
                <li>🛍️ find alternative products</li>
                <li>🫶 reassure users they are in the right place</li>
              </ul>
            </div>
            Like loving yet indulgent parents, we want to give our users the
            best search experience possible - and if we have to sacrifice our
            spelling skills to do so, then so be it.
          </div>
          <div className="w-1/4 mx-auto my-auto ">
            <img src={Autocomplete} alt="autocomplete" />{" "}
          </div>
        </div>
        <div className="bg-yellow-400 h-1 mx-auto w-2/3 mt-8"></div>
        <div className=" w-full px-20 space-x-10 mt-10 text-lg">
          In this lesson, we will learn how to implement autocomplete in order
          to find movies by their title. Although long, it goes by quickly
          because we are repeating a lot of the same steps from Lessons 2-5. We
          can break this Autocomplete Lesson down into 4 parts:
          <ul className="ml-10 my-4 ">
            <li>
              ✅ Part 1: Indexing the movie titles with the{" "}
              <KeyWord type="word">autocomplete</KeyWord> data type
            </li>
            <li>
              ✅ Part 2: Building the <KeyWord type="operator">$search</KeyWord>{" "}
              aggregation query using the{" "}
              <KeyWord type="word">autocomplete</KeyWord> operator
            </li>
            <li>
              ✅ Part 3: Creating the HTTPS endpoint to execute the{" "}
              <KeyWord type="word">autocomplete</KeyWord> aggregation query
            </li>
            <li>
              ✅ Part 4: Calling the HTTPS endpoint from the embedded
              CodeSandbox front end
            </li>
          </ul>
        </div>
        <div className=" w-full mt-10 bg-yellow-300 py-4 px-8 rounded">
          <div className=" mx-auto text-2xl text-center text-black uppercase">
            Part 1: Indexing the movie titles with the{" "}
            <span className="text-teal-700">autocomplete</span> data type
          </div>
        </div>
        {/***************** End Introduction ********************/}{" "}
        <div className="w-full flex text-left mx-auto justify-evenly space-x-10">
          <div className="w-1/3 my-8 ">
            <div>
              In{" "}
              <span>
                <Link
                  to="/Lesson2"
                  className=" py-1  right-20 z-10 bg-slateblue border-2 border-green-500 text-white px-6 cursor-pointer rounded-xl "
                >
                  Lesson 2
                </Link>
              </span>
              , we learned a few of the common operators used by the $search
              stage:
              <ul className="ml-10 my-2 text-left text-sm">
                <li className="  text-teal-800 text-lg font-bold rounded ">
                  text
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  phrase
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  range
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  near
                </li>
                <li className=" text-teal-800 text-lg font-bold rounded ">
                  wildcard
                </li>
              </ul>
              To implement <KeyWord type="title">autocomplete</KeyWord>{" "}
              functionality, $search uses the special operator{" "}
              <KeyWord type="word">autocomplete</KeyWord> to search for words or
              a phrase containing a sequence of characters from your input
              string. The more letters you type in the input, the higher the
              accuracy of prediction results in accordance with your
              tokenization strategy.
            </div>
            <div className="relative">
              <div className="absolute -left-14 top-0">
                <TipCard side="center">
                  <div className="flex items-center leading-6">
                    <div>
                      At a high-level, tokenization is the process of splitting
                      text into “tokens” to both index and query. Tokens are the
                      fundamental sequence of characters in the query to match
                      in the data document.{" "}
                    </div>
                  </div>
                </TipCard>
              </div>
            </div>
          </div>
          <div className="w-1/3 my-8 ">
            To use the autocomplete operator, we must first index the fields we
            want to query with the autocomplete data type. To do this, we will
            start by creating a special search index to map our movie data by
            the special autocomplete data type.<br></br>
            <br></br>Return to the Atlas UI and repeat the steps laid out in{" "}
            <Link
              to="/Lesson1"
              className=" py-1 z-10 bg-slateblue border-2 border-green-500 text-white px-6 cursor-pointer rounded-xl whitespace-nowrap"
            >
              Lesson 1: Create a Search Index
            </Link>
            . This time, however, feel free to use the JSON editor with this
            implementation: <br></br>
            <div className="p-2 shadow-lg shadow-gray-500">
              {" "}
              <div className="text-center bg-fuchsia-800 rounded-lg p-2 text-white uppercase">
                autocomplete index definition
              </div>
              <CodeSnippetsCopy copyTextObject={autoIndexDef} />
              <div className="text-green-800 text-base text-center">
                To conserve space in our autocomplete index, turn off dynamic
                mapping and set the minGrams to 3 and the maxGrams to 8 in the
                <KeyWord type="title">title</KeyWord> field of the movie
                document.
              </div>
            </div>
          </div>
          <div className="w-1/3 my-8 ">
            <Reveal
              title="Autocomplete Index Creation: Video Walkthrough"
              negTitle="Hide Video"
              open={showVideo}
              toggle={toggleVideo}
              content="video"
              lesson="6"
            >
              <video width="640" height="480" controls>
                <source
                  src="https://kwh-demos.s3.amazonaws.com/CreateIndexAutocomplete.mp4"
                  type="video/mp4"
                />
              </video>
            </Reveal>
            {!showVideo && <img src={VideoWalkThru} alt="video" />}
            <TipCard side="right">
              <div className="flex items-center leading-6">
                <div>
                  To learn more about the configuration options available in the
                  autocomplete data type, such as tokenization strategy and
                  diacritic folding, see{" "}
                  <a
                    className="text-green-600 font-bold underline"
                    href="https://www.mongodb.com/docs/atlas/atlas-search/define-field-mappings/#std-label-bson-data-types-autocomplete"
                  >
                    our docs on autocomplete.{" "}
                  </a>
                </div>
              </div>
            </TipCard>
          </div>
        </div>
        <div className="bg-yellow-400 h-1 mx-auto w-2/3 mb-4"></div>
        <div className="w-2/3 mx-auto text-xl text-center text-green-800">
          {" "}
          Now that we have our $search index for autocomplete, the below Steps 1
          - 4 will guide us through how to create an HTTPS endpoint to be called
          from our application front end to retrieve autocompleted movie titles.
        </div>
        <div className="bg-yellow-400 h-1 mx-auto w-2/3 my-4"></div>
        <div className=" w-full mx-auto mt-10 bg-yellow-300 py-4 px-8 rounded">
          <div className=" mx-auto text-2xl text-center text-black uppercase">
            Part 2: Building the <KeyWord type="operator">$search</KeyWord>{" "}
            aggregation query using the{" "}
            <span className="text-teal-800">autocomplete</span> operator
          </div>
        </div>
        {/***************** Part 2 ********************/}{" "}
        <div className="PART2 mt-6">
          {" "}
          <div className="w-full shadow shadow-slate-400 p-4 text-lg">
            <Step title="Step 1. Use autocomplete operator in $search stage">
              <div className="flex space-x-10">
                <div className="col1 w-1/3">
                  {" "}
                  Now that we have our new{" "}
                  <KeyWord type="title">autocomplete</KeyWord> index, we can use
                  this index in a new query for autocompletion functionality in
                  the <KeyWord type="operator">$search</KeyWord> stage.<br></br>
                  <div className="p-2 shadow-lg shadow-gray-500">
                    {" "}
                    <div className="text-center bg-teal-700 rounded-lg p-2 text-white uppercase">
                      autocomplete syntax
                    </div>
                    <CodeSnippetsCopy copyTextObject={autocompleteSyntax} />
                  </div>
                </div>

                <div className="w-1 bg-fuchsia-800 rounded-lg h-80 my-auto"></div>
                <div className="col2 w-1/3">
                  Knowing this, let's return to Compass and try the code below
                  in the Aggregation Pipeline Builder with{" "}
                  <KeyWord type="operator">$search</KeyWord> as the first stage:
                  <br></br>
                  <br></br>
                  <div className="p-2 shadow-lg shadow-gray-500">
                    {" "}
                    <div className="text-center bg-teal-700 rounded-lg p-2 text-white uppercase">
                      autocomplete query
                    </div>
                    <CodeSnippetsCopy
                      copyTextObject={autocompleteSearchQuery}
                    />
                    <div className="text-green-700 text-base text-center">
                      {" "}
                      * Notice the use of fuzzy as an option. *
                    </div>
                  </div>
                </div>
                <div className="w-1 bg-fuchsia-800 rounded-lg h-80 my-auto"></div>
                <div className="w-1/3 mx-auto">
                  Play around with different strings in the{" "}
                  <KeyWord type="code">query</KeyWord> field to see how they
                  affect the resulting documents in the right preview panel.{" "}
                  <br></br>
                  <img
                    src={"https://kwh-demos.s3.amazonaws.com/autoTitles.gif"}
                    alt="autoTitles"
                    className="border shadow shadow-slate-800 w-full border-slate-700 mt-8"
                  />
                </div>
              </div>
            </Step>
          </div>
          <div className="w-full shadow shadow-slate-400 p-4 text-lg">
            <Step
              title="Step 2. Complete $search aggregation with $limit and $project"
              className=""
            >
              <div className="flex space-x-10">
                <div className="col1 w-2/5">
                  Add <KeyWord type="operator">$limit</KeyWord> and{" "}
                  <KeyWord type="operator">$project</KeyWord> stages to our
                  aggregation pipeline as we did in Lesson 3. However, we only
                  need the <KeyWord type="title">title</KeyWord> field in the
                  return payload.<br></br>
                  <div className="w-4/5 mx-auto mt-6 text-xl border-4 border-slateblue pb-8  rounded">
                    <div className="bg-slateblue py-1  text-white text-xl text-center w-full mb-4">
                      EXERCISE: Complete $search Autocomplete Aggregation
                    </div>
                    <div className="flex"></div>
                    <div className="text-xl text-center text-indigo-900 px-16 mb-6">
                      Using the <KeyWord type="code">fuzzy</KeyWord> option,
                      limiting to 12 movies 🎞️, and projecting in only the movie
                      title, <br></br>what is the final $search aggregation for
                      autocompleted movie titles?
                    </div>
                    <CodeReveal
                      title="Reveal Full Aggregation"
                      negTitle="Hide Full Aggregation"
                      open={showFinalAggregation}
                      toggle={toggle}
                      copyTextObject={completeAutoSearchQuery}
                    ></CodeReveal>{" "}
                  </div>
                </div>
                <div className="w-1/3">
                  {" "}
                  <div className="bg-yellow-400 h-1 mx-auto w-2/3 mt-12"></div>
                  <div className="text-green-800 text-2xl text-center w-2/3 mx-auto">
                    With our new $search aggregation to autosuggest movie titles
                    for our end users, let's now build out the HTTPS endpoint to
                    execute this functionality.
                  </div>
                  <div className="bg-yellow-400 h-1 mx-auto w-2/3 my-4"></div>
                </div>

                <div className="w-1/3 ">
                  {" "}
                  <TipCard side="right">
                    <div className="flex items-center text-lg leading-6">
                      <div>
                        Exact title matches may receive a lower score and
                        returned after non-exact matches. This is because Atlas
                        Search can't determine if a query string is an exact
                        match for an indexed text if you specify just the
                        autocomplete-indexed token substrings.{" "}
                        <div className=" w-2/3 mx-auto my-4 bg-cyan-800 h-1 rounded"></div>
                        To score exact matches higher, try the following
                        workaround:
                        <ul className="text-left ml-20 mb-4">
                          <li>
                            ✳️ Index the field as both autocomplete and string
                            types.
                          </li>
                          <li>✳️ Query using the compound operator.</li>
                        </ul>
                        <div className="text-left mr-auto">
                          Check out an{" "}
                          <a
                            className="text-green-600 font-bold underline"
                            href="https://www.mongodb.com/docs/atlas/atlas-search/autocomplete/#std-label-autocomplete-compound"
                          >
                            example{" "}
                          </a>{" "}
                          of this implementation:
                        </div>
                      </div>
                    </div>
                  </TipCard>
                </div>
              </div>
            </Step>
          </div>
        </div>
        <div className=" w-full mx-auto mt-10 bg-yellow-300 py-4 px-8 rounded">
          <div className=" mx-auto text-2xl text-center text-black uppercase">
            Part 3: Creating the HTTPS endpoint to execute the{" "}
            <span className="text-teal-800">autocomplete</span> aggregation
            query
          </div>
        </div>
        <div className="PART3  my-6">
          <div className="w-5/6 mx-auto shadow shadow-slate-400 p-4">
            <Step
              title="Step 1. Create HTTPS Endpoint to execute the autocomplete $search aggregation"
              className=""
            >
              <div className="flex space-x-6 px-10">
                <div className="w-3/5">
                  Returning to the Atlas App Services UI, as we did in Lesson 4,
                  select <KeyWord type="word">HTTPS Endpoint</KeyWord>, followed
                  by the <KeyWord type="button">Add an Endpoint</KeyWord>.{" "}
                  <br></br>
                  Select the HTTP service, and name it{" "}
                  <KeyWord type="title">autocompleteTitles</KeyWord>.
                  <ul className="ml-24 my-2">
                    <li>✔️ For Route, type /titles</li>
                    <li>✔️ Set your Operation Type to GET</li>
                    <li>✔️ Enable Respond with Result</li>
                  </ul>
                </div>
                <div className="w-1/3  space-x-4">
                  <div className="flex  items-center">
                    <img
                      src={Reminder}
                      alt="reminder"
                      className="w-32 object-contain"
                    />
                    <div>
                      Make note of your{" "}
                      <KeyWord type="word">
                        AUTOCOMPLETETITLES ENDPOINT URL
                      </KeyWord>{" "}
                      by pasting in the box below:
                    </div>
                  </div>
                  <form className="flex mt-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center bg-white w-full px-6 text-lg text-black placeholder-green-500 duration-700 ease-in-out transform border border-green-800 rounded transition-width hover:shadow-xl">
                      <input
                        type="text"
                        name="term"
                        id="endpoint"
                        placeholder="paste your HTTPS endpoint here"
                        autoComplete="off"
                        className="text-black outline-none w-full"
                        {...register("endpointURL", {
                          onChange: (e) => {
                            setEndpointURL(e.target.value);
                          },
                        })}
                      ></input>
                    </div>
                  </form>
                  <br></br>
                  <div>
                    After we build out the functionality, we will be using it in
                    our front end application.
                  </div>
                  <CodeSnippetsCopy type="line" copyTextObject={endpointURL} />
                </div>
              </div>
            </Step>
            <Step
              title="Step 2. Create Function Logic for Endpoint"
              className=""
            >
              This endpoint will be calling a{" "}
              <KeyWord type="word">New Function</KeyWord>. Name the function
              <KeyWord type="word">getTitles </KeyWord> and replace the code in
              the Function Editor with code below:
            </Step>
            <div className="flex space-x-6 mb-8">
              <div className="w-3/4 mx-auto text-center bg-slateblue">
                <div className="p-4">
                  <div className="bg-sun  text-black uppercase text-xl py-2 rounded">
                    Code for GetTitles Function
                  </div>
                  <CodeSnippetsCopy
                    type="function"
                    copyTextObject={functionCode}
                  />{" "}
                </div>
              </div>
              {/******END CODEBLOCK ***********/}
              <div className="w-4/5 mx-auto text-left mb-8">
                <br></br>
                <ul className="space-y-2">
                  <li>
                    <KeyWord>Line 4.</KeyWord> We use the global{" "}
                    <code>context</code> variable to get a handle to the movies
                    collection in the{" "}
                    <KeyWord type="word">sample_mflix</KeyWord> database.
                  </li>
                  <li>
                    <KeyWord>Line 7.</KeyWord> We get an argument from my
                    function payload query and set it to the{" "}
                    <code>searchTerm</code> variable.{" "}
                    <span className="italic text-color-indigo-700">
                      <span className="text-2xl">👈</span> This will be passed
                      in from our application.{" "}
                    </span>
                  </li>
                  <li>
                    <KeyWord>Line 13.</KeyWord> Currently our searchAggregation
                    is an empty array.
                  </li>
                  <li>
                    <KeyWord>Line 16.</KeyWord> Finally we execute the
                    aggregation against the movies collection and set the body
                    of our response to that result.
                  </li>
                </ul>
                Save your Draft. Then{" "}
                <KeyWord type="button">Review Draft & Deploy</KeyWord>.<br></br>
                <br></br>
                NOTE!! <span className="text-2xl">🛎️</span> We need to adjust
                the settings of your new function. App Services supports
                multiple authentication methods. Set the default Authentication
                method to <KeyWord>System</KeyWord> to keep things simple and be
                sure to <KeyWord type="button">Save</KeyWord>.
              </div>
            </div>
            <Step title="Step 3. Paste in autocomplete $search aggregation">
              <div className="flex space-x-10">
                <div className="col1 w-1/3 text-lg">
                  Still in your Function Editor, and replace your
                  searchAggregation variable on <KeyWord>Line 13.</KeyWord> with
                  your autocomplete query aggregation from{" "}
                  <KeyWord>Part 2</KeyWord>. <br></br>
                  <br></br>Be sure to replace your query of{" "}
                  <KeyWord type="word">Harry</KeyWord> to the variable{" "}
                  <KeyWord>searchTerm</KeyWord> or else your function will be
                  quite limited. 🤣<br></br> Feel free to test this endpoint in
                  the browser as you did in Lesson 4, Step 5.
                </div>
                <div className="w-2/3">
                  <CodeReveal
                    title="Reveal Final GetTitles Function "
                    negTitle="Hide GetTitles Function"
                    open={showFinalFunction}
                    toggle={toggleFunction}
                    lesson="8"
                    copyTextObject={finalFunctionCode}
                  ></CodeReveal>{" "}
                </div>
              </div>
            </Step>
          </div>
        </div>{" "}
        <div className=" w-full mx-auto mt-10 bg-yellow-300 py-4 px-8 rounded">
          <div className=" mx-auto text-2xl text-center text-black uppercase">
            Part 4: Calling the HTTPS endpoint from the embedded front end
          </div>
        </div>
        <div className="w-2/3 flex mx-auto text-xl text-center text-green-800 items-center">
          {" "}
          <img src={Reminder} alt="reminder" className="w-32 object-contain" />
          <div>
            Armed with your
            <KeyWord type="word">AUTOCOMPLETETITLES ENDPOINT URL</KeyWord>from
            Part 3: <br></br>{" "}
            <CodeSnippetsCopy type="line" copyTextObject={endpointURL} /> Paste
            it into the Code Sandbox below in the
            src/components/SearchBar/SearchBar.js file on line 21.
          </div>
        </div>
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson8/?fontsize=14&hidenavigation=1&theme=dark" />
        <div className="CONCLUSION mt-6 flex space-x-10 justify-evenly px-20 text-lg text-left mb-10">
          <div className="w-1/3">
            <ul className="space-y-2">
              <li>
                <KeyWord>Line 21.</KeyWord> Paste{" "}
                <KeyWord type="word">AUTOCOMPLETETITLES ENDPOINT URL</KeyWord>{" "}
                you created in App Services for the <code>TITLES_ENDPOINT</code>{" "}
                variable.
              </li>
              <li>
                <KeyWord>Line 30.</KeyWord> We append the{" "}
                <code>searchTerm</code> from the search box to the endpoint as a
                url parameter.{" "}
              </li>
              <li>
                <KeyWord>Lines 33 and 34.</KeyWord> We retrieve the movies
                titles from the endpoint and set the <code>suggestions</code>{" "}
                state value.
              </li>
              <li>
                <KeyWord>Line 83.</KeyWord> If we have values for the{" "}
                <code>suggestions</code> state, we list those values in{" "}
                <KeyWord type="word">AutoSuggestions.js</KeyWord> component.
              </li>
            </ul>
          </div>

          <div className="w-1/6 mx-auto items-start">
            <img src={Ticket} alt="ticket" />{" "}
          </div>
          <div className="w-1/3">
            Congratulations! In not a lot of time, we indexed our movie
            collection titles and built our new
            <KeyWord type="operator">$search</KeyWord> aggregation query to help
            our users find that movie whose exact name they can't quite
            remember. <br></br>
            <br></br>Atlas Search's autcomplete functionality is just the ticket
            to grant our users the best search experience possible.
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

const autocompleteSyntax = {
  $search: {
    index: "<index name>", // optional, defaults to "default"
    autocomplete: {
      query: "<search-string>",
      path: "<field-to-search>",
      tokenOrder: "any|sequential",
      fuzzy: "options",
      score: "options",
    },
  },
};

const autocompleteSearchQuery = {
  index: "autocomplete",
  autocomplete: {
    query: "Harry",
    path: "title",
    fuzzy: { maxEdits: 1 },
  },
};

const autoIndexDef = {
  mappings: {
    dynamic: false,
    fields: {
      title: {
        maxGrams: 8,
        minGrams: 3,
        type: "autocomplete",
      },
    },
  },
};
const completeAutoSearchQuery = [
  {
    $search: {
      index: "autocomplete",
      autocomplete: {
        query: "Harry",
        path: "title",
        fuzzy: { maxEdits: 1 },
      },
    },
  },
  {
    $limit: 12,
  },
  {
    $project: {
      title: 1,
    },
  },
];

const functionCode = `exports = async function({ query, headers, body}, response) {
  
  // GET A HANDLE TO THE MOVIES COLLECTION
  const movies = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  // GET SEARCHTERM FROM QUERY PARAMETER. IF NONE, RETURN EMPTY ARRAY
  let searchTerm = query.searchTerm;
  if (!query.searchTerm || searchTerm ===""){
    return [];
  }

  //INSERT SEARCH AGGREGATION HERE
  const searchAggregation =[];  
  
  // RUN SEARCH AGGREGATION ON MOVIES COLLECTION and RETURN
  const titles = await movies.aggregate(searchAggregation).toArray();
  return titles;
}`;

const finalFunctionCode = `exports = async function({ query, headers, body}, response) {
  
  // GET A HANDLE TO THE MOVIES COLLECTION
  const movies = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  // GET SEARCHTERM FROM QUERY PARAMETER. IF NONE, RETURN EMPTY ARRAY
  let searchTerm = query.searchTerm;
  if (!query.searchTerm || searchTerm ===""){
    return [];
  }

  //INSERT SEARCH AGGREGATION HERE
  const searchAggregation =[
  {
    "$search": {
      "index": "autocomplete",
      "autocomplete": {
        "query": searchTerm,
        "path": "title",
        "fuzzy": {
          "maxEdits": 1
        }
      }
    }
  },
  {
    "$limit": 12
  },
  {
    "$project": {
      "title": 1
    }
  }
];  
  
  // RUN SEARCH AGGREGATION ON MOVIES COLLECTION and RETURN
  const titles = await movies.aggregate(searchAggregation).toArray();
  return titles;
}`;

export default Lesson8;
