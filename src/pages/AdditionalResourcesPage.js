import React from "react";
import LOGO from "../images/Logomark.svg";
import TipCard from "../components/TipCard";
import Presenters from "../components/Presenters";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Learning from "../images/lessonImages/EducationWeb.png";

import DemoPreviewCard from "../components/DemoPreviewCard";

const AdditionalResourcesPage = () => {
  return (
    <div className="relative">
      <Header />

      <div className="relative flex space-x-10 w-full pl-20 pr-60 ">
        <div className="w-1/5 absolute top-0 -right-0"></div>

        <div className="w-1/3 mx-auto flex">
          <img src={Learning} alt="learning" className="object-contain" />
        </div>
        <div className="w-3/4 flex flex-col ">
          {/* <div className="flex text-xl px-20 items-center mx-auto">
            <img className="mr-2 h-16" src={LOGO} alt="logo" />{" "}
            <div className="">Additional Learning Resources</div>
          </div> */}
          <div className="text-lg  text-center w-3/4 mx-auto mt-20">
            Check out Atlas Search in action! These demo applications show Atlas
            Search in various scenarios performing lightning fast searches
            across different data types.
            <div className="text-2xl">✅ 📅 🔘 🔍</div>
            Code previews embedded in the app along with sliders, toggles,
            calendars, and checkboxes will teach you how to build out even the
            most complex search queries. <br></br>So wanna learn how to query
            strings, dates, or GEOJson data? Maybe incorporate synonyms,
            MoreLikeThis, or facets? Click around and find out!
          </div>
          <img className="mr-2 h-16" src={LOGO} alt="logo" />{" "}
        </div>
        <div className=" absolute top-0 right-0 w-1/5">
          {" "}
          <TipCard side="right">
            Check out our documentation and tutorials!{" "}
            <div className="DOCS  ">
              <a
                className="ml-4 text-center underline decoration-indigo-800 text-lg"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/docs/atlas/atlas-search/"
              >
                Atlas Search: The Docs{" "}
              </a>
            </div>
            <div className="TUTORIALS text-lg ">
              <a
                className="ml-4 text-center underline decoration-indigo-800"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.mongodb.com/docs/atlas/atlas-search/tutorials/"
              >
                Search Tutorials{" "}
              </a>
              <div className="text-3xl"> 📗📖👓</div>
            </div>
          </TipCard>
        </div>
      </div>
      <div className="DEMO-APPS flex flex-col mb-20 text-black mx-auto w-full mt-8 text-lg text-center ">
        <div className="px-20 grid grid-cols-3 gap-x-8  w-full">
          {bundles.map((bundle, index) => {
            return (
              <DemoPreviewCard
                key={index}
                index={index}
                title={bundle.title}
                previewImage={bundle.previewImage}
                hrefLink={bundle.hrefLink}
                features={bundle.features}
                youTubeLink={bundle.youTubeLink}
                gitLink={bundle.gitLink}
                blogLink={bundle.blogLink}
              />
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 bg-white border border-green-600 rounded-tl-full">
        <Presenters />
      </div>
      <Footer />
    </div>
  );
};

export default AdditionalResourcesPage;

const bundles = [
  {
    title: "www.atlassearchrestaurants.com",
    previewImage: "https://kwh-demos.s3.amazonaws.com/CookingDemo.gif",
    hrefLink: "https://www.atlassearchrestaurants.com",
    youTubeLink: "https://www.youtube.com/embed/s2kXYZRE7pA",
    gitLink: "https://github.com/mongodb-developer/WhatsCooking",
    features: `GeoJSON, highlighting, fuzzy, autocomplete, synonyms, faceting
                function scoring`,
    blogLink: "",
  },
  {
    title: "www.atlassearchsoccer.com",
    previewImage: "https://kwh-demos.s3.amazonaws.com/soccerDemo.gif",
    hrefLink: "https://www.atlassearchsoccer.com",
    youTubeLink: "https://www.youtube.com/embed/1uTmDNTdgaw",
    gitLink: "https://github.com/mongodb-developer/atlas-search-soccer",
    features:
      "wildcard, autocomplete, facets, faceting, moreLikeThis, numbers, dates, keyword analyzer",
    blogLink: "",
  },
  {
    title: "www.atlassearchindexes.com",
    hrefLink: "https://www.atlassearchindexes.com",
    previewImage: "https://kwh-demos.s3.amazonaws.com/SearchIndexes.gif",
    youTubeLink: "https://www.youtube.com/embed/2oJuXx6mceE",
    gitLink: "",
    features: `Demonstrates the importance of choosing the right analyzer for your searches.`,
    blogLink:
      "https://www.mongodb.com/developer/products/atlas/analyzing-analyzers-build-search-index-app/",
  },
];
