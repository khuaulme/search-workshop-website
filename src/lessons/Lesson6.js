import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";
import MoreAboutCard from "../components/MoreAboutCard";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import CodeReveal from "../components/CodeReveal";
import CompoundSearch from "../images/lessonImages/CompoundSearch.png";
import CodeSandbox from "../components/CodeSandbox";
import ClauseTable from "../components/ClauseTable";
import ZombieResults from "../images/lessonImages/ZombieResults.png";
import Reveal from "../components/Reveal";
import Tile from "../images/lessonImages/grout.png";
import Insert from "../images/lessonImages/InsertPoint.png";
import Guy from "../images/lessonImages/GuyPoint.png";

const Lesson6 = () => {
  const [showResults, setShowResults] = useState(false);
  const [showCompound, setShowCompound] = useState(false);
  const toggle = (showResults) => {
    setShowResults(!showResults);
  };
  const toggleCompound = (showCompound) => {
    setShowCompound(!showCompound);
  };

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = (showMoreInfo) => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <LessonTemplate
      title="Lesson 6. The Compound Operator: For Fine-Tuned Searches"
      next="/Lesson7"
      previous="/Lesson5"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="flex space-x-10 ">
          <div className="mb-8 text-black mx-auto mt-10 w-2/3 my-auto text-lg px-10">
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
            <div className="px-2 mx-auto italic text-green-900 text-center border border-slate-700 rounded mt-10 w-2/3">
              Don't let the length of this lesson scare you. It's a lot of cut
              and paste ✂️ - and a lot of fun!
            </div>
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
            <div className="w-1/3 mx-auto ">
              {" "}
              <img src={Tile} alt="tile" />
            </div>
            <div className="w-2/3 px-10 mt-10">
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
          </div>
          <div className="w-1/2 text-center overflow-auto px-10 ">
            <div className=" w-full mt-6 text-xl border-4 border-fuchsia-900 pb-8  rounded">
              <div className="bg-fuchsia-900 py-3 text-white text-2xl text-center w-full mb-4">
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
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" />
        <div className="bg-rhino rounded ml-auto w-full py-2 text-center text-white uppercase text-3xl my-8 mx-auto ">
          CREATING THE BACKEND
        </div>
        <div className="w-full flex mx-auto justify-evenly space-x-8 mb-20 text-lg">
          <div className="w-1/3  p-4">
            In the code sandbox above, we now have an interface for more search
            parameters -{" "}
            <ul className="ml-4 my-2">
              <li>
                <KeyWord type="title">genres</KeyWord>
              </li>
              <li>
                <KeyWord type="title">rating</KeyWord>
              </li>
              <li>
                <KeyWord type="title">start date released</KeyWord>
              </li>
              <li>
                <KeyWord type="title">end date released</KeyWord>
              </li>
            </ul>
            in addition to our search box <span className="text-2xl">🔍</span>.
            <br></br>
            <br></br> Now we will build out another HTTPS endpoint to be called
            by our Netflix Clone to accept these parameters and tile them
            together into a new
            <KeyWord type="operator">compound</KeyWord> search query.
          </div>
          <div className="w-1/2 shadow-md shadow-slate-700 rounded p-4">
            <Step
              title="Step 1. CREATE NEW HTTPS Endpoint in Netflixclone"
              className=""
            >
              In the Atlas UI, return to your{" "}
              <KeyWord type="title">NetflixClone</KeyWord> App Service
              application. As we did in Lesson 4, on the left menu, select{" "}
              <KeyWord type="word">HTTPS Endpoint</KeyWord>, followed by the{" "}
              <KeyWord type="button">Add an Endpoint</KeyWord>. Select the HTTP
              service, and name it `moviesCompound`.
              <ul className="ml-10 my-2">
                <li>✔️ For Route, type /moviesCompound</li>
                <li>✔️ Set your Operation Type to POST</li>
                <li>✔️ Enable Respond with Result</li>
              </ul>
              Once again, remember your{" "}
              <KeyWord type="word">ENDPOINT URL</KeyWord>.<br></br>
              <div className="text-center mt-2 italic text-green-900">
                Notice this now uses a <KeyWord type="variable">POST</KeyWord>{" "}
                request.
              </div>
            </Step>
          </div>
        </div>
        <div className="COMPOUNDCODE ROW flex space-x-8 mt-6 mb-10">
          <div className="relative w-1/2 text-center">
            <div className="absolute -top-6 -right-40 z-20 w-1/4 text-center">
              <img src={Guy} alt="guy" />
            </div>

            <div className="p-4">
              <div className="bg-sun  text-black uppercase text-xl py-2 rounded">
                Initial Code for GetMoviesCompound
              </div>
              <CodeSnippetsCopy
                type="function"
                copyTextObject={getMoviesCompoundInitialCode}
              />
            </div>
          </div>
          <div className="w-1/2 text-left my-auto">
            <div className="flex">
              <div className="w-1/5 text-6xl my-auto text-center"></div>
              <div className="w-4/5 mx-auto shadow-md shadow-slate-700 rounded p-4 mb-6 ">
                <Step
                  title="Step 2. Write function logic for endpoint"
                  className=""
                >
                  This endpoint will be calling a{" "}
                  <KeyWord type="word">New Function</KeyWord>. Name the function
                  <KeyWord type="word">getMoviesCompound </KeyWord> and replace
                  the code in the Function Editor with adjacent code.
                </Step>
              </div>
            </div>
            Let's walk through this initial <code>getMoviesCompound</code>{" "}
            function. <br></br>
            <br></br>
            <ul className="space-y-6">
              <li>
                <KeyWord>Line 4.</KeyWord> We use the global{" "}
                <code>context</code> variable to get a handle to the
                <KeyWord type="word">movies</KeyWord>
                collection in the <KeyWord type="word">
                  sample_mflix
                </KeyWord>{" "}
                database.
              </li>
              <li>
                <KeyWord>Line 10.</KeyWord> Parse{" "}
                <KeyWord type="variable">searchParameters</KeyWord>data from the
                incoming request into a usable JSON object.
                <span className="italic text-color-indigo-700">
                  <span className="text-2xl">👈</span> This will be passed in
                  from our application in the{" "}
                  <KeyWord type="code">POST</KeyWord> request.
                </span>
              </li>
              <li>
                <KeyWord>Line 13.</KeyWord> Destructure{" "}
                <KeyWord type="variable">searchParameters</KeyWord> into
                variables to be used in our{" "}
                <KeyWord type="operator">compound</KeyWord> subqueries.
              </li>
              <li>
                <KeyWord>Lines 17 and 22.</KeyWord> We will start with an empty
                searchAggregation and results.
              </li>
              <li>
                <KeyWord>Line 20.</KeyWord> We will later uncomment this line.
                It calls a soon-to-be-created function to build our search
                aggregation pipeline.
              </li>
              <li>
                <KeyWord>Line 28.</KeyWord>Set response with success message and{" "}
                <KeyWord>$search</KeyWord> aggregation results for the movies.
              </li>
            </ul>
            Save your Draft. Then{" "}
            <KeyWord type="button">Review Draft & Deploy</KeyWord>.<br></br>
            <br></br>
            NOTE!! <span className="text-2xl">🛎️</span> We need to adjust the
            settings of your new function. App Services supports multiple
            authentication methods. Set the default Authentication method to{" "}
            <KeyWord>System</KeyWord> to keep things simple and be sure to{" "}
            <KeyWord type="button">Save</KeyWord>.<br></br>
          </div>
        </div>
        <div className="w-full flex mx-auto justify-evenly space-x-8  text-lg">
          <div className=" w-1/2 space-y-10">
            <div className="shadow-md shadow-slate-700 rounded p-4">
              <Step
                title="Step 3. Paste endpoint into codesandbox front End"
                className=""
              >
                <div className="w-full flex flex-col text-left">
                  <div>
                    Our point of integration is in the{" "}
                    <KeyWord>Home.js</KeyWord> file found in the src/components
                    directory.
                  </div>
                  <ul className="my-4">
                    {" "}
                    <li>
                      ✅ Paste your new App Services HTTP endpoint as the value
                      for{" "}
                      <KeyWord type="variable">
                        {" "}
                        MOVIES_ENDPOINT_COMPOUND
                      </KeyWord>
                      variable on <KeyWord type="line">line 12</KeyWord>.
                    </li>{" "}
                  </ul>
                  <img
                    src={Insert}
                    alt="home screen"
                    className="w-full mx-auto mb-4 mt-2"
                  />
                  ✅ This is all you need to do in the app. Now we just return
                  our focus to the back end. <span className="2xl">🔎📽️🍿</span>
                </div>
              </Step>
            </div>{" "}
          </div>
          <div className=" bg-white  text-green-900 mx-auto w-2/5 my-auto mb-10  px-12 rounded">
            {" "}
            <div className="text-lg leading-loose  ">
              At this point, you can interact with the application, but still
              with no movie results. Inspecting the console should confirm that
              you have indeed connected with the backend and sent the HTTPS POST
              request. However, in its current state, our{" "}
              <KeyWord type="word">getMoviesCompound </KeyWord> function does
              nothing useful.<br></br>
              <br></br> Let's put our
              <KeyWord type="operator">compound</KeyWord> operator knowledge to
              work and build out the <KeyWord>$search</KeyWord> aggregation for{" "}
              <KeyWord>Line 17.</KeyWord>
              <br></br>
              <br></br>For this, let's create another App Services function:{" "}
              <KeyWord type="variable">createSearchAggregation</KeyWord>.
            </div>
          </div>
        </div>
        {/**************END COMPOUNDCODE ROW ************/}
        <div className="bg-teal-700 rounded mx-auto w-2/3 h-1 my-20 relative "></div>
        <div className="w-full flex mx-auto justify-evenly space-x-8 mb-20 text-lg">
          <div className="flex flex-col w-1/2 space-y-10">
            <div className="shadow-md shadow-slate-700 rounded p-4">
              <Step
                title="Step 4. CREATE NEW FUNCTION in Netflixclone"
                className=""
              >
                Back in the
                <KeyWord type="title">NetflixClone</KeyWord> App Service
                application, on the left menu, select{" "}
                <KeyWord type="word">Functions</KeyWord>. Name your new function
                `createSearchAggregation`.
                <br></br>
                <br></br>Because we will be calling this function from another{" "}
                <KeyWord type="title">NetflixClone</KeyWord> function, we do not
                need to set the function authentication.
              </Step>
            </div>
            <div className="shadow-md shadow-slate-700 rounded p-4">
              <Step title="Step 5. PASTE IN FUNCTION CODE 👉" className="">
                Paste the adjacent code in the
                <KeyWord type="title">function editor</KeyWord> and click{" "}
                <KeyWord type="button">Save</KeyWord>. Notice that the function
                takes in the arguments:
                <ul className="ml-4 my-2">
                  <li>
                    ✅ <KeyWord type="title">genres</KeyWord>
                  </li>
                  <li>
                    ✅ <KeyWord type="title">rating</KeyWord>
                  </li>
                  <li>
                    ✅ <KeyWord type="title">start date released</KeyWord>
                  </li>
                  <li>
                    ✅ <KeyWord type="title">end date released</KeyWord>
                  </li>
                </ul>
                <KeyWord>Line 19-49</KeyWord> Those arguments are placed in
                suitable search subquery objects.
                <br></br>
                <br></br>
                <KeyWord>Line 19-49</KeyWord> You have a lot of discretion as to
                which clauses to place your subqueries. I chose to use should -
                must - filter in this way.
                <br></br>
                <br></br>
                <KeyWord>Line 72</KeyWord> Push the <KeyWord>$search</KeyWord>,{" "}
                <KeyWord>$limit</KeyWord>, and <KeyWord>$project</KeyWord>
                stages onto the empty searchAggregation array before returning
                in line 76.
                <br></br>
                <br></br>
                <KeyWord>Line 79+</KeyWord> Outside of the function, assign
                variables for the $project and $limit stages.
              </Step>
            </div>
            <div className="shadow-md shadow-slate-700 rounded p-4">
              <Step
                title="Step 6. Call createSearchAggregation from getMOVIEscompound "
                className=""
              >
                Return to your <KeyWord type="title">getMoviesCompound</KeyWord>{" "}
                function. Uncomment <KeyWord>line 20</KeyWord>:
                <CodeSnippetsCopy
                  type="function"
                  copyTextObject={functionCallCode}
                />
                Be sure to click <KeyWord type="button">Save</KeyWord>.<br></br>
                <div className="italic text-green-700 text-base text-center px-10">
                  Notice how we used the global{" "}
                  <KeyWord type="variable">context</KeyWord> to pull in that
                  function, which we then execute with its name and arguments.
                </div>
              </Step>
            </div>{" "}
            <div className=" mt-12 text-center text-xl  px-12">
              Congrats! <span className="text-2xl">🥂🍿</span> Your movie search
              engine can now handle complex, fine-grained search queries{" "}
              <span className="italic">FAST!</span>.<br></br>
              <br></br> Sliders, checkboxes, and calendars provided in the UI
              allow us to input multiple search parameters of different data
              types:
              <div className="text-center text-teal-800 my-4">
                strings - numbers - dates
              </div>
              After posting these values to the back end via an HTTPS request,
              we created the search subqueries and tiled them together in an{" "}
              <KeyWord>$search </KeyWord> stage.
              <div className="w-full mx-auto my-6">
                <CodeSnippetsCopy
                  type="function"
                  copyTextObject={compoundObject}
                />{" "}
              </div>
              Now that we know how to filter movies in and ourt of our search
              results, let's learn how to shuffle these results around in order.
              In our next lesson, we will dive a little deeper into to{" "}
              <span className="text-3xl text-indigo-800">scoring</span> - what
              it means and how to influence the score to bring better search
              results to our app users. <div className="text-6xl mt-4">💯</div>
            </div>
            <div className="flex justify-center w-full">
              <MoreAboutCard
                open={showMoreInfo}
                toggle={toggleMoreInfo}
                subject="Functions"
                lesson="6"
              >
                <div className="text-base">
                  Functions are <span className="italic">AMAZING!</span>{" "}
                  Implemented as pieces of server-side JavaScript code, Atlas
                  functions are great for low-latency, short-running tasks like
                  moving data and validation.{" "}
                  <ul className="ml-8 my-4 text-left leading-loose ">
                    <li>✅ Serverless - no need to deploy or manage servers</li>
                    <li>
                      ✅ Have context to the execution environment, including
                      app user and state
                    </li>
                    <li>✅ Can use common Node.js dependencies</li>
                  </ul>
                  Functions can be called by HTTPS endpoints, GraphQL custom
                  resolvers, and (my personal fave) triggers - which you can set
                  on a schedule, database change, or authentication events.
                  <br></br>
                  <br></br>To learn more about App Service functions, visit the
                  docs.
                </div>
              </MoreAboutCard>
            </div>
          </div>

          <div className="w-2/5 text-center bg-slateblue">
            <div className="p-4">
              <div className="bg-sun  text-black uppercase text-xl py-2 rounded">
                Code for CREATESEARCHAGGREGATION
              </div>
              <CodeSnippetsCopy
                type="function"
                copyTextObject={createSearchAggregationCode}
              />
            </div>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};
export default Lesson6;

const functionCallCode = `let searchAggregation = await context.functions.execute("createSearchAggregation", searchTerm, genre, rating, start, end); `;

const createSearchAggregationCode = `exports = async function( searchTerm, genre, rating, start, end  ){
  
  let searchAggregation = []; 
  
  // INITIALIZE SEARCH STAGE
  let searchStage = { 
        $search: {
          compound:{},
           highlight: {  path:  'fullplot' }    
        }
  };
    
  // INITIALIZE CLAUSES FOR COMPOUND OPERATOR
  let filterArray = [];
  let mustArray = [];
  let shouldArray =[];
  let mustNotArray=[];
  
  // INITIALIZE SUBQUERIES FOR FUNCTION ARGUMENTS
   const searchTermObject = { 
     text: { 
        path: ['plot', 'fullplot','title'], 
        query: searchTerm,
        fuzzy: {maxEdits: 1.0}
        }
   };   
    
    const ratingObject = {
          "range": {
            "path": "imdb.rating",  
            "gte": rating,
            "lte": 10
          }
    };
    
    const genreObject = {
          "text": {
              "query": genre,
              "path": "genres"
          }
    };
    
    const releaseStage = {
        "range": {
            "path": "released",
            "gte":  new Date(start),
            "lte":  new Date(end)
        }
    };
    
    // IF ARGUMENTS RECEIVED, PUSH ONTO CLAUSE ARRAYS
    if (searchTerm!==""){
      shouldArray.push(searchTermObject);
    }
    
     if (rating!=0){
      filterArray.push(ratingObject);
    }
    
    if (genre.length !==0){
      mustArray.push(genreObject)
    }
    
   filterArray.push(releaseStage);
  
  // ASSIGN NEW CLAUSE ARRAYS TO COMPOUND FIELD IN SEARCH STAGE
  searchStage.$search.compound.should=shouldArray;
  searchStage.$search.compound.must=mustArray;
  searchStage.$search.compound.filter=filterArray;
  
 
  searchAggregation.push(searchStage, limitStage, projectStage );
  console.log(JSON.stringify(searchAggregation));
  
  
  return searchAggregation;
};

 const projectStage = {
      $project: {
        title: 1, 
        _id: 1, 
        genres:1,
        runtime:1,
        'imdb.rating':1,
        released: 1,
        year: 1, 
        fullplot: 1, 
        plot:1,
        poster:1,
        score: {  $meta: 'searchScore'}, 
        highlights: {  $meta: 'searchHighlights'}
      }
    };
    
  const limitStage = {
     $limit:12
   };`;

const getMoviesCompoundInitialCode = `// This function is the endpoint's request handler.
exports = async function(request, response) {
   // Querying a mongodb collection:
    const movies = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");
    try {
     if(request.body === undefined) {
      throw new Error("Request body was not defined.")
      }

    const searchParameters = JSON.parse(request.body.text());
    console.log(JSON.stringify(searchParameters));

    let{ start, end, genre, rating, searchTerm } = searchParameters;
    rating = parseInt(rating);
   
    // BUILD SEARCH AGGREGATION - INITIALIZE TO AN EMPTY ARRAY
    let searchAggregation = []; 

    // WE WILL CALL A NEW FUNCTION TO BUILD THE SEARCH AGGREGATION WITH THE DESTRUCTURED PARAMETERS
    // searchAggregation = await context.functions.execute("createSearchAggregation", searchTerm, genre, rating, start, end); 
    
    let results = [];
   
    if (searchAggregation.length !== 0){
      results = await movies.aggregate(searchAggregation).toArray();
    }
    
    response.setStatusCode(201);
     
    response.setBody(JSON.stringify({
         message: "Successfully posted to new compound endpoint",
         movies: results
      }));
     
    } catch (error) {
      response.setStatusCode(400);
      response.setBody(error.message);
    }
};`;

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
