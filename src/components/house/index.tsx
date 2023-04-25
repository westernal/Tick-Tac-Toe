import O from "../players/O";
import X from "../players/X";

const House = ({ isO, isX }: { isO?: boolean; isX?: boolean }) => {
  return (
    <div className="house rounded hover:shadow-2xl hover:bg-slate-950 transition bg-gray-900 shadow-xl w-20 h-20 grid place-items-center cursor-pointer">
      {isO ? <O /> : isX ? <X /> : null}
    </div>
  );
};

export default House;
