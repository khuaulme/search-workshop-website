import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import Reveal from "../components/Reveal";

//images
import Developer from "../images/lessonImages/Developer.png";
import VideoWalkThru from "../images/VideoWalkThru.png";
import Reminder from "../images/Reminder.png";

const Lesson4 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const toggle = (showVideo) => {
    setShowVideo(!showVideo);
  };
  const { register, handleSubmit, errors, reset } = useForm();

  const [endpointURL, setEndpointURL] = useState("");
  const onSubmit = (endpoint) => {
    console.log("ENDPOINT", endpoint.endpointURL);
    setEndpointURL(endpoint.endpointURL);
  };

  return (
    <LessonTemplate
      title="Lesson 4. Create a RESTful API"
      next="/Lesson5"
      previous="/Lesson3"
    >
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative mt-10">
          <div className="w-1/4">
            <img className="object-contain" src={Developer} alt="developer" />
          </div>
          <div className="w-1/3">
            <div>
              Now that we have the heart of our movie search engine in the form
              of an aggregation pipeline, how will we use it in an application?
              🤔
              <br></br>
              <br></br>There are lots of ways to do this, but I found the
              easiest was to simply create a RESTful API to expose this data -
              and for that, I leveraged MongoDB's Atlas App Services. App
              Services is a serverless platform offering a treasure chest 🧳
              💰💍👑 full of app developer goodies to help make working with
              data as easy as possible.<br></br>
              <br></br>
              In this lesson, we will step through the creation of a custom
              HTTPS Endpoint in Atlas. The endpoint will receive a{" "}
              <KeyWord>GET</KeyWord> request which we will call from our
              application front end.
            </div>
          </div>

          <div className="w-2/5 mx-auto">
            <Reveal
              title="Show Video Walkthrough"
              negTitle="Hide Video"
              open={showVideo}
              toggle={toggle}
              content="video"
              lesson="4"
            >
              {" "}
              <video width="640" height="480" controls>
                <source
                  src="https://kwh-demos.s3.amazonaws.com/BasicEndpointVideo.mp4"
                  type="video/mp4"
                />
              </video>
            </Reveal>
            {!showVideo && (
              <img src={VideoWalkThru} alt="video" className="w-3/4 mx-auto" />
            )}
          </div>
          <div className="absolute -top-6 -right-5 w-1/5 text-center">
            <TipCard side="right">
              Triggers, GraphQL, Data API, authentication! These are but a few
              of amazing tools in Atlas' App Services arsenal to help you build
              apps in no time!
              <br></br> Visit{" "}
              <a
                className="font-noto text-center text-lg text-forestgreen"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/atlas/app-services"
              >
                our docs
              </a>{" "}
              to see check it out.
            </TipCard>
          </div>
        </div>{" "}
        {/*********************END TOP ROW ******************************/}
        <div className="SEPARATOR bg-green-600 h-1 w-2/3 mx-auto rounded-2xl my-4"></div>
        <div className="2ND ROW flex space-x-8 mt-6">
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step
              title="Step 1. Create Application in App Services"
              className=""
            >
              To create a Atlas App Services application, return to your Atlas
              UI. To make it easy to bounce between Atlas and App Services,
              right click the App Services tab and select Open Link in New Tab.
              <br></br>
              <br></br>
              Use the basic <KeyWord type="word">
                Build your own App
              </KeyWord>{" "}
              template, click <KeyWord type="button">Next</KeyWord>. Name your
              application <KeyWord type="word">NetflixClone</KeyWord> or
              whatever you wish. After ensuring it is linked to the correct
              cluster, click the{" "}
              <KeyWord type="button">Create App Service</KeyWord> button.
            </Step>
          </div>
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step title="Step 2. Create HTTPS Endpoint" className="">
              On the left menu, select{" "}
              <KeyWord type="word">HTTPS Endpoint</KeyWord>, followed by the{" "}
              <KeyWord type="button">Add an Endpoint</KeyWord>. Select the HTTP
              service, and name it movies.
              <ul className="ml-24 my-2">
                <li>✔️ For Route, type /movies</li>
                <li>✔️ Set your Operation Type to GET</li>
                <li>✔️ Enable Respond with Result</li>
              </ul>
            </Step>
          </div>
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step title="Step 3. Make Note of New Custom Endpoint" className="">
              <div className="w-full flex items-center space-x-4">
                <img
                  src={Reminder}
                  alt="reminder"
                  className="w-32 object-contain"
                />
                <div>
                  Make note of your{" "}
                  <KeyWord type="word">BASIC ENDPOINT URL</KeyWord> by pasting
                  it in the box below:{" "}
                </div>
              </div>
            </Step>
            <form className="flex mx-2" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full space-x-2">
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
              </div>
            </form>
            <br></br>
            After we build out the functionality, we will be using it in our
            front end application.
            <CodeSnippetsCopy type="line" copyTextObject={endpointURL} />
          </div>{" "}
        </div>{" "}
        {/****************END ROW 2 ****************************/}
        <div className="ROW3 relative flex space-x-8 mt-6">
          <div className="w-1/2 text-center bg-slateblue">
            <div className="p-4">
              <div className="bg-sun  text-black uppercase text-xl py-2 rounded">
                Code for GetMovies Function
              </div>
              <CodeSnippetsCopy type="function" copyTextObject={functionCode} />{" "}
            </div>
          </div>
          {/******END CODEBLOCK ***********/}
          <div className="w-1/2 text-left">
            <Step
              title="Step 4. Write New Function logic for Endpoint"
              className=""
            >
              This endpoint will be calling a{" "}
              <KeyWord type="word">New Function</KeyWord>. Name the function
              <KeyWord type="word">getMovies </KeyWord> and replace the code in
              the Function Editor with code below:
            </Step>
            Let's walk through the <code>getMovies</code> function. <br></br>
            <br></br>
            <ul className="space-y-2">
              <li>
                <KeyWord>Line 4.</KeyWord> We use the global{" "}
                <code>context</code> variable to get a handle to the movies
                collection in the <KeyWord type="word">sample_mflix</KeyWord>{" "}
                database.
              </li>
              <li>
                <KeyWord>Line 7.</KeyWord> We get an argument from my function
                payload query and set it to the <code>searchTerm</code>{" "}
                variable.{" "}
                <span className="italic text-color-indigo-700">
                  <span className="text-2xl">👈</span> This will be passed in
                  from our application.{" "}
                </span>
              </li>
              <li>
                <KeyWord>Line 13.</KeyWord> Currently our searchAggregation is
                an empty array.
              </li>
              <li>
                <KeyWord>Line 16.</KeyWord> Finally we execute the aggregation
                against the movies collection and set the body of our response
                to that result.
              </li>
            </ul>
            Save your Draft. Then{" "}
            <KeyWord type="button">Review Draft & Deploy</KeyWord>.<br></br>
            <br></br>
            NOTE!! <span className="text-2xl">🛎️</span> We need to adjust the
            settings of your new function. App Services supports multiple
            authentication methods. Set the default Authentication method to{" "}
            <KeyWord>System</KeyWord> to keep things simple and be sure to{" "}
            <KeyWord type="button">Save</KeyWord>.
          </div>
          <div className=" w-1/5 text-center absolute -bottom-20 -right-16">
            <TipCard side="right">
              <div>
                <div className="font-bold">Quick Dev Tip!!</div>To save time in
                the workshop, in Deployment settings on the left menu, in the
                Configuration tab, click Disable Drafts.
              </div>
            </TipCard>
          </div>
        </div>
        {/***************END ROW 3********************* */}
        <div className="3RD ROW flex space-x-8 my-6">
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step title="Step 5. USE search aggregation query" className="">
              Still in your Function Editor, and set your searchAggregation
              variable to what you built in Compass in Lesson 2. Be sure to
              replace your query of{" "}
              <KeyWord type="word">Harrry Pottter</KeyWord> to the variable{" "}
              <KeyWord>searchTerm</KeyWord> or else your function will be quite
              limited. 🤣
            </Step>
          </div>
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step title="Step 6. Test Newly created endpoint" className="">
              Now the big "Tada!" moment! We can now test our new App Services
              endpoint in the browser. Get the HTTP endpoint from the UI and
              paste it in your web browser:
              <CodeSnippetsCopy type="line" copyTextObject={endpointURL} /> Then
              append{" "}
              <code className="border px-2 py-1">?searchTerm=Harry Potter</code>{" "}
              to the end of the url.<br></br>
              <br></br>Ours looks like this:
              <CodeSnippetsCopy type="line" copyTextObject={EndpointSample} />
              Now look at your browser to see the results. If you are coding
              along and receive an output, CONGRATULATIONS! You have
              successfully created a movie search API that you can call from
              anywhere! <span className="text-2xl">🎉🎊</span>
            </Step>
          </div>
          <div className="w-1/4 my-auto text-center text-4xl -skew-x-12">
            Have a toast while you pop the popcorn, and get ready for calling
            this API from our hosted front end.
            <span className="text-2xl">🥂🍿</span>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson4;

const EndpointSample = `https://data.mongodb-api.com/app/netflixclone-hazaz/endpoint/movies?arg=Harry%20Potter`;

const functionCode = `exports = async function({ query, headers, body}, response) {
  
  // GET A HANDLE TO THE MOVIES COLLECTION
  const moviesCollection = context.services.get("mongodb-atlas").db("sample_mflix").collection("movies");
  
  // GET SEARCHTERM FROM QUERY PARAMETER. IF NONE, RETURN EMPTY ARRAY
  let searchTerm = query.searchTerm;
  if (!query.searchTerm || searchTerm ===""){
    return [];
  }

  //INSERT SEARCH AGGREGATION HERE
  const searchAggregation =[];  
  
  // RUN SEARCH AGGREGATION ON MOVIES COLLECTION and RETURN
  const results = await moviesCollection.aggregate(searchAggregation).toArray();
  return results;
}`;
