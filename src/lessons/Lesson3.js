import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

import TipCard from "../components/TipCard";
import Step from "../components/Step";
import DataPlatform from "../images/lessonImages/DataPlatform.svg";
import Fun from "../images/lessonImages/Fun.svg";

import CodeSnippetsCopy from "../components/CodeSnippetsCopy";
import KeyWord from "../components/KeyWord";
import Reveal from "../components/Reveal";
import Video from "../images/lessonImages/EndpointVideo.mp4";

//images
import Developer from "../images/lessonImages/Developer.png";

const Lesson3 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const toggle = (showVideo) => {
    setShowVideo(!showVideo);
  };
  return (
    <LessonTemplate title="Lesson 3. Create a RESTful API" next="/Lesson4">
      <div className="LESSON PAGE flex flex-col px-20 mt-auto text-base text-left">
        <div className="TOP-ROW flex relative">
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
          <div className="w-1/4">
            <img className="object-contain" src={Developer} alt="developer" />
          </div>
          <div className="w-2/5 mx-auto">
            <Reveal
              title="Show Video Walkthrough"
              negTitle="Hide Video"
              open={showVideo}
              toggle={toggle}
              content="video"
            >
              {" "}
              <video width="640" height="480" controls>
                <source src={Video} type="video/mp4" />
              </video>
            </Reveal>
          </div>
          <div className="absolute -top-10 -right-5 w-1/5 text-center">
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
        <div className="bg-green-600 h-2 w-2/3 mx-auto rounded-2xl"></div>
        <div className="2ND ROW flex space-x-8 mt-6">
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step
              title="Step 1. Create Application in App Services"
              className=""
            >
              To create a Realm application, return to your Atlas UI. To make it
              easy to bounce between Atlas and App Services, right click the App
              Services tab and select Open Link in New Tab.<br></br>
              <br></br>
              Use the basic <KeyWord type="word">
                Build your own App
              </KeyWord>{" "}
              template, click <KeyWord type="button">Next</KeyWord>. Name your
              application <KeyWord type="word">MovieSearchApp</KeyWord> or
              NetflixClone or whatever you wish. After ensuring it is linked to
              the correct cluster, click the{" "}
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
              Make note of your{" "}
              <KeyWord type="word">BASIC ENDPOINT URL</KeyWord>. You will be
              using this in your application.
            </Step>
          </div>
          <div className="w-1/3 shadow shadow-slate-400 p-4">
            <Step
              title="Step 3. Write New Function logic for Endpoint"
              className=""
            >
              This endpoint will be calling a{" "}
              <KeyWord type="word">New Function</KeyWord>. Name the function
              <KeyWord type="word">getMovies </KeyWord>getMovies and replace the
              code in the Function Editor with following code:
              <CodeSnippetsCopy type="function" copyTextObject={functionCode} />
            </Step>
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson3;

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
