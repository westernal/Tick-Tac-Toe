import { useSelector } from "react-redux";
import { Stats } from "../../types";

const OStats = () => {
  const numOfLoss = useSelector((state: Stats) => state.loss);

  return (
    <div className="turn bg-amber-300 rounded-md shadow-2xl text-center text-white  p-1 pr-2 pl-2  grid place-items-center cursor-context-menu">
      <div className="flex justify-center gap-1 items-center">
        <p className="font-semibold">O</p>
        <p className="text-xs">{"(CPU)"}</p>
      </div>
      <div className="number mt-1 text-sm">{numOfLoss}</div>
    </div>
  );
};

export default OStats;
