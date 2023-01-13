import Presenter from "./Presenter";
import Karen from "../images/Karen.JPG";

const Presenters = () => {
  return (
    <div className="flex w-full items-center text-black p-4 ">
      <Presenter
        bio_pic={Karen}
        name="Karen Huaulmé"
        title="Principal Developer Advocate"
        twitter_handle="@YouOldMaid"
      />
    </div>
  );
};

export default Presenters;
