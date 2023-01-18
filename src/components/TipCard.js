import { GoPin } from "react-icons/go";

const TipCard = ({ children, side, color = "lime" }) => {
  let skew = "skew-y-6";
  if (side === "right") {
    side = "-right-4";
  } else if (side === "left") {
    side = "-left-4 -rotate-90 ";
    skew = "-skew-y-12";
  } else if (side === "center") {
    side = "-left-4 -rotate-90 ";
    skew = "-skew-y-2";
  }
  return (
    <div
      className={`TIP-CARD bg-lime text-center relative text-slate-800 p-4 ${skew}  rounded m-4`}
    >
      <GoPin className={`absolute  text-red-700 text-4xl -top-4  ${side}`} />
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default TipCard;
