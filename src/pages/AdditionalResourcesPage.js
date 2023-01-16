import React from "react";
import LOGO from "../images/Logomark.svg";
import GitHub from "../images/GitHub-Mark.png";
import Presenters from "../components/Presenters";
import Footer from "../components/Footer";

const AdditionalResourcesPage = () => {
  return (
    <>
      <div className="flex text-2xl px-20 ">
        <img className="mr-2 my-auto h-16" src={LOGO} alt="logo" />
        <div className="my-auto">Additional Learning Resources</div>
      </div>

      <hr
        style={{
          color: "green",
          backgroundColor: "green",
          height: 2,
          borderColor: "green",
        }}
      />
      <div className="flex">
        <div className="flex px-20 w-full justify-around">
          <div className="LIST space-y-4 mt-10 w-1/2">
            <div className="DOCS text-lg ml-20">
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/docs/atlas/atlas-search/"
              >
                Atlas Search: The Docs{" "}
              </a>
            </div>
            <div className="TUTORIALS text-lg ml-20">
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/docs/atlas/atlas-search/tutorials/"
              >
                Various Atlas Search Tutorials{" "}
              </a>
            </div>
            <div className="COMPARISON text-lg ml-20">
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/compare/mongodb-atlas-search-vs-elastic-elasticsearch"
              >
                Elastic Search vs MongoDB Atlas Search
              </a>
            </div>
            <div className="COMPARISON text-lg ml-20">
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/developer/products/atlas/analyzing-analyzers-build-search-index-app/"
              >
                Analyzing Analyzers to Build the Right Search Index for Your App
              </a>
            </div>
          </div>
          <div className="DEMOS space-y-4 mt-10 w-1/2">
            <div className="text-lg ml-20">
              What's Cooking Restaurant Finder Demo:{" "}
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.atlassearchrestaurants.com/"
              >
                www.atlassearchrestaurants.com
              </a>
            </div>
            <div className="text-lg ml-20">
              MongoDB Netflix Clone:{" "}
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.atlassearchmovies.com/"
              >
                www.atlassearchmovies.com
              </a>
            </div>
            <div className="text-lg ml-20">
              Atlas Search Indexes & Analyzers Demo:{" "}
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.atlassearchindexes.com/"
              >
                www.atlassearchindexes.com
              </a>
            </div>
            <div className="REPO flex text-lg ml-20">
              <img
                src={GitHub}
                alt="GitHub"
                className="w-12 object-contain mr-10 "
              />

              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mongodb-developer/WhatsCooking"
              >
                What's Cooking Git Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-10 justify-around ">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s2kXYZRE7pA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="border-2 border-springgreen"
        ></iframe>
        <iframe
          className="border-2 border-springgreen"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jnxnhbTO2RA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="absolute bottom-0 right-0 bg-white border border-green-600 rounded-tl-full">
        <Presenters />
      </div>
      <Footer />
    </>
  );
};

export default AdditionalResourcesPage;
