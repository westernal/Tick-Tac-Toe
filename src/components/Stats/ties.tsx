import { useSelector } from "react-redux";

const Ties = () => {
  const numOfTies = useSelector((state: any) => state.stats.ties);

  return (
    <div className="turn bg-slate-900 rounded-md shadow-2xl   text-white  p-1 pr-2 pl-2 text-center grid place-items-center cursor-context-menu">
      <div className="flex justify-center gap-1 items-center">
        <p className="text-xs">TIES</p>
      </div>
      <div className="number mt-1 text-sm">{numOfTies}</div>
    </div>
  );
};

export default Ties;
