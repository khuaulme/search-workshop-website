import React, { useState, useEffect, useRef } from "react";
import LessonPreview from "./LessonPreview";

const TutorialSections = () => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };
  return (
    <>
      <div className="bg-[#3d3db9] py-10 place-items-center text-white">
        <div className="px-40 w-full">
          {lessonData.map((data, index) => {
            return (
              <LessonPreview
                key={index}
                title={data.title}
                description={data.description}
                open={index === open}
                toggle={() => toggle(index)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TutorialSections;

const lessonData = [
  {
    title: "Lesson 1: Create Basic Index and 1st $search Text Query",
    description:
      "With Atlas Search, we have made it even easier to work with data by allowing you to build powerful, flexible, and sophisticated search capabilities into your MongoDB applications!",
  },
  {
    title: "Lesson 2: Create API",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
  },
  {
    title: "Lesson 3: Hook API Into Movie Application",
    description:
      "In this workshop, we will build out our very own Netflix Clone using the sample_mflix database in the Atlas sample dataset. We will quickly construct and combine varied search parameters while implementing fuzzy-matching, autocomplete, highlighting and many other search features. Along the way, we'll also go deep on Lucene analyzers and indexes.",
  },
];
