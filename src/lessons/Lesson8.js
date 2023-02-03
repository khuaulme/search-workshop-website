import React, { useState } from "react";
import LessonTemplate from "../components/LessonTemplate";

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

const Lesson8 = () => {
  const [showVideo, setShowVideo] = useState(false);
  const toggleVideo = (showVideo) => {
    setShowVideo(!showVideo);
  };
  return (
    <LessonTemplate
      title="Lesson 8. Autocom..."
      next="/Lesson9"
      previous="/Lesson7"
    >
      <div className="LESSON PAGE flex flex-col  px-20 mt-auto text-base text-left">
        <div className="flex w-full px-20 space-x-10">
          <div className="w-1/3 mx-auto my-auto ">
            <img src={ACSearch} alt="autocomplete" />{" "}
          </div>

          <div className=" font-barlow text-lg w-2/3 mt-16 text-left">
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
              <div className="w-1/3 mx-auto my-auto ">
                <img src={Autocomplete} alt="autocomplete" />{" "}
              </div>
            </div>
            Like loving yet indulgent parents, we want to give our users the
            best search experience possible - and if we have to sacrifice our
            spelling skills to do so, then so be it.
          </div>
        </div>
        <div className=" my-8 text-center text-lg">
          In this lesson, we will learn how to implement autocomplete by
          creating a special search index to map our movie data by the special
          autocomplete data type. Then we will create a new HTTPS endpoint to be
          called by our application below.
        </div>
        {/***************** End Introduction ********************/}{" "}
        <CodeSandbox appLink="https://codesandbox.io/embed/github/khuaulme/atlas-search-workshop-netflix/tree/lesson6/?fontsize=14&hidenavigation=1&theme=dark" />
        <div className="w-full flex mx-auto my-10">
          <div className="w-2/3"></div>

          <div className="w-1/3 mx-auto">
            <Reveal
              title="Show Video Walkthrough"
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
          </div>
        </div>
      </div>
    </LessonTemplate>
  );
};

export default Lesson8;
