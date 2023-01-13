import Twitter from "../images/Twitterblue.png";
import Instagram from "../images/Instagram.png";

const Presenter = ({ bio_pic, name, title, twitter_handle }) => {
  return (
    <div className="flex mt-10 text-black pb-2 mx-auto justify-center">
      <img
        src={bio_pic}
        alt="search hero"
        className="mx-6 w-32 h-32 rounded-full"
      />

      <div className="flex flex-col mt-6 justify-center text-center">
        {name}
        <br></br>
        {title}
        <div className="flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/youoldmaid"
          >
            {" "}
            <img src={Twitter} alt="twitter" className="w-12 object-contain" />
          </a>
          <div className="my-auto ml-2">{twitter_handle}</div>
          <img
            src={Instagram}
            alt="instagram"
            className="w-12 ml-2 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Presenter;
