import { Collapse } from "react-collapse";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FiVideo, FiVideoOff } from "react-icons/fi";

const Reveal = ({ open, toggle, title, negTitle, children, content }) => {
  let classStyle =
    "bg-green-600 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded w-full";
  if (content === "video") {
    classStyle =
      "bg-gradient-to-r from-fuchsia-800 via-violet-900 to-fuchsia-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded w-full";
  } else if (content === "movies") {
    classStyle =
      "bg-gradient-to-r from-teal-800 via-black-900 to-teal-800 text-white py-4 px-10 flex justify-evenly items-center cursor-pointer shadow-2xl h-16 rounded w-full";
  }

  return (
    <div className="Wrapper p-2 ">
      <div className="flex justify-center">
        <div className={`${classStyle}`} onClick={() => toggle(open)}>
          {open ? <div>{negTitle}</div> : <div>{title}</div>}
          {content === "video" ? (
            <div className="text-3xl text-white ml-4">
              {open ? <FiVideoOff /> : <FiVideo />}
            </div>
          ) : (
            <div className="text-3xl text-white ml-4">
              {open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
            </div>
          )}
        </div>
      </div>
      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  );
};

export default Reveal;
