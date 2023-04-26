import { useSelector } from "react-redux";

const XStats = () => {
  const numOfWins = useSelector((state: any) => state.stats.wins);

  return (
    <div className="turn bg-red-500 rounded-md shadow-2xl  text-white  p-1 pr-2 pl-2 text-center  grid place-items-center cursor-context-menu">
      <div className="flex justify-center gap-1 items-center">
        <p className="font-semibold">&#10008;</p>
        <p className="text-xs">{"(YOU)"}</p>
      </div>
      <div className="number mt-1 text-sm">{numOfWins}</div>
    </div>
  );
};

export default XStats;
