import O from "../players/O";
import X from "../players/X";
import { useDispatch, useSelector } from "react-redux";
import { changeTurn, move, restart } from "../../redux/slices/game";
import canPlay from "../../functions/canPlay";

const House = ({
  number,
  isO = false,
  isX = false,
}: {
  number: number;
  isO?: boolean;
  isX?: boolean;
}) => {
  const dispatch = useDispatch();
  const { houses, gameOver } = useSelector((state: any) => state.game);

  const handleMove = () => {
    if (canPlay(houses, number) && !gameOver) {
      dispatch(move(number));
      dispatch(changeTurn());
    }
  };

  return (
    <div
      className="house rounded hover:shadow-2xl hover:bg-slate-950 transition bg-gray-900 shadow-xl w-20 h-20 grid place-items-center cursor-pointer"
      onClick={handleMove}
    >
      {isO ? <O /> : isX ? <X /> : null}
    </div>
  );
};

export default House;
