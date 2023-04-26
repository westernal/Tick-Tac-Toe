import { useSelector } from "react-redux";

const Turn = () => {
  const turn = useSelector((state: any) => state.game.turn);

  return (
    <div className="turn bg-slate-900 rounded-md shadow-2xl flex justify-center items-center text-white  p-1 px-5 gap-1 cursor-context-menu">
      <p className="font-semibold">{turn ? "O" : <>&#10008;</>}</p>
      <p className="text-xs">TURN</p>
    </div>
  );
};

export default Turn;
