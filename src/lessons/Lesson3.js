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
        <div className="TOP-ROW flex">
          <div className="w-1/4">
            <div>
              Now that we have the heart of our movie search engine in the form
              of an aggregation pipeline, how will we use it in an application?
              🤔
              <br></br>
              <br></br>There are lots of ways to do this, but I found the
              easiest was to simply create a RESTful API to expose this data -
              and for that, I leveraged MongoDB's Atlas App Services. App
              Services is a serverless platform offering a trunk full of app
              developer building blocks to help make working with data as easy
              as possible.
            </div>
          </div>
          <div className="w-1/5">
            <img className="object-contain" src={Developer} alt="developer" />
          </div>
          <div className="w-1/4">
            where functions written in JavaScript automatically scale up to meet
            demand. <KeyWord>hello</KeyWord>
            <KeyWord bg="sun" tc="black">
              World
            </KeyWord>
            <KeyWord bg="lime" tc="black">
              hello
            </KeyWord>
          </div>
          <div className="w-1/4 text-center">
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
        </div>
        <video width="540" height="310" controls>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <div className="flex mx-auto">
        <Reveal
          title="Show Video Walkthrough"
          negTitle="Hide Video"
          open={showVideo}
          toggle={toggle}
          content="video"
        >
          {" "}
          <video width="540" height="310" controls>
            <source src={Video} type="video/mp4" />
          </video>
        </Reveal>
      </div>
    </LessonTemplate>
  );
};

export default Lesson3;
