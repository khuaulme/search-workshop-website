import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../images/HomeBtn.png";

const Lesson1 = () => {
  return (
    <div>
      <Link to="/">
        <img className="w-48" src={HomeButton} alt="btn" />
      </Link>
    </div>
  );
};

export default Lesson1;
