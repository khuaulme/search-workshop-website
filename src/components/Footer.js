import React from "react";
import Community from "../images/Community.png";

const Footer = () => {
  return (
    <div className="flex w-full bg-slateblue text-white px-20 pb-2">
      <div className="flex mx-auto text-center items-center">
        <div className="text-center items-center">
          Join our online{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mongodb.com/community/forums/"
          >
            <span className="text-springgreen font-bold underline">
              MongoDB Community
            </span>
          </a>{" "}
          .
        </div>
        <img
          src={Community}
          alt="twitter"
          className="mx-2 w-24 object-contain"
        />
      </div>
    </div>
  );
};

export default Footer;
