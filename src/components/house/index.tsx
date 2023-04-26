import { useState } from "react";
import O from "../players/O";
import X from "../players/X";
import { useDispatch, useSelector } from "react-redux";
import { changeTurn } from "../../redux/slices/game";

const House = () => {
  const [isO, SetIsO] = useState(false);
  const [isX, SetIsX] = useState(false);
  const dispatch = useDispatch();
  const turn = useSelector((state: any) => state.game.turn);

  const handleMove = () => {
    if (turn) SetIsO(true);
    else SetIsX(true);
    dispatch(changeTurn());
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
