import { GoPin } from "react-icons/go";

const TipCard = ({ children, side }) => {
  let skew = "skew-y-6";
  if (side === "right") {
    side = "-right-4";
  } else {
    side = "-left-4 -rotate-90 ";
    skew = "-skew-y-12";
  }
  return (
    <div
      className={`TIP-CARD bg-zinc-100 relative text-slate-800 p-4 ${skew}  rounded border border-rhino  m-4`}
    >
      <GoPin className={`absolute  text-red-700 text-4xl -top-4  ${side}`} />
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default TipCard;
