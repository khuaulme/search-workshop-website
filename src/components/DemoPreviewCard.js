import React from "react";

import { AiFillGithub } from "react-icons/ai";

const DemoPreviewCard = ({
  previewImage,
  youTubeLink,
  gitLink,
  hrefLink,
  title,
  features,
  blogLink,
}) => {
  return (
    <div className=" w-full rounded p-8  flex flex-col justify-between overflow-auto shadow-lg shadow-gray-700">
      <div className="space-y-4 mx-auto w-full ">
        <a target="_blank" rel="noopener noreferrer" href={hrefLink}>
          <div className="bg-slateblue uppercase py-2 px-2 text-white rounded">
            {title}
          </div>
        </a>

        <img src={previewImage} alt="gif" className="w-2/3 mx-auto" />
        <div className="text-center text-sm text-green-700">{features}</div>
      </div>

      <div className=" flex mx-auto justify-center object-contain mt-2">
        <iframe
          width="420"
          height="246"
          src={youTubeLink}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="p-2 border-4 border-slateblue object-contain"
        ></iframe>
      </div>
      {blogLink !== "" && (
        <div>
          Visit the
          <span>
            {" "}
            <a
              className=" text-center underline decoration-indigo-800"
              target="_blank"
              rel="noopener noreferrer"
              href={blogLink}
            >
              {" "}
              blog! 📖
            </a>
          </span>
        </div>
      )}

      {gitLink !== "" && (
        <div className="underline flex items-center text-center text-base justify-center">
          <span className="text-4xl mr-4">
            <AiFillGithub />
          </span>

          {gitLink}
        </div>
      )}
    </div>
  );
};

export default DemoPreviewCard;
