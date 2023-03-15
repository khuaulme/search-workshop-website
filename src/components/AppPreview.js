import Mflix from "../images/MoviesScreen.png";

const AppPreview = () => {
  return (
    <div className="w-full text-center">
      <a
        className="font-noto text-center text-3xl text-forestgreen"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.atlassearchmovies.com/"
      >
        www.atlassearchmovies.com
      </a>
      <img
        src={Mflix}
        alt="App"
        className="mx-auto items-center shadow-xl rounded-xl w-4/5 mt-4  shadow-black"
      />
    </div>
  );
};

export default AppPreview;

//  href="https://atlassearchmovies-rsyxh.mongodbstitch.com/"
