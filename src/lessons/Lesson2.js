import React from "react";
import LessonTemplate from "../components/LessonTemplate";

const Lesson2 = () => {
  return (
    <div className="flex">
      <LessonTemplate title="Lesson 2. Creating Basic Search Queries">
        {" "}
        <div className="mb-8 text-black">
          Search adds document data to a full-text search index to make data
          searchable in a highly performant, scalable manner. In this first
          lesson, we will create a full-text search index on our sample_mflix
          movie data. Then we will query on this index to filter, rank and sort
          through those movies to quickly surface movies by topic.
        </div>
      </LessonTemplate>
    </div>
  );
};

export default Lesson2;
