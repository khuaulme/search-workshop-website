import Compass from "../images/Compass.png";

const Instructions = ({ showSetUpPDF, setShowSetUpPDF }) => {
  return (
    <div className="flex items-end">
      <div className="mx-4 mt-10 w-full text-lg items-center">
        <div className="text-left">
          The following hardware and installations are required to complete this
          workshop:
        </div>
        <div className="flex text-left">
          <ul className="ml-10 my-4">
            1. local computer with internet connection and a modern browser
            <br></br>
            2.{" "}
            <a
              className="underline decoration-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://cloud.mongodb.com"
            >
              MongoDB Atlas account and free cluster
            </a>
            <br></br>
            3.{" "}
            <a
              className="underline decoration-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/docs/atlas/sample-data/?_ga=2.65004649.750685431.1673273281-1122163452.1629401460#available-sample-datasets"
            >
              Downloaded Movie Sample Dataset{" "}
            </a>
            <br></br>
            4.{" "}
            <a
              className="underline decoration-indigo-500"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.mongodb.com/try/download/compass?tck=docs_compass"
            >
              MongoDB Compass (Optional)
            </a>
            <br></br>
          </ul>
        </div>
      </div>
      {!showSetUpPDF ? (
        <button
          className="w-96 mx-auto h-16 bg-green-500 rounded-md flex items-center px-4 drop-shadow-2xl mb-4 justify justify-evenly uppercase"
          onClick={() => setShowSetUpPDF(!showSetUpPDF)}
        >
          <div className="text-white text-center">
            Show set-up instructions PDF
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </button>
      ) : (
        <button
          className="w-96 mx-auto h-16 bg-indigo-900 rounded-md flex items-center px-4 drop-shadow-2xl mb-4 justify justify-evenly uppercase "
          onClick={() => setShowSetUpPDF(!showSetUpPDF)}
        >
          <div className="text-white text-center">Hide Set Up Instructions</div>
        </button>
      )}
    </div>
  );
};

export default Instructions;
