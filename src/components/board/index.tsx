import { useDispatch, useSelector } from "react-redux";
import checkGame from "../../functions/checkGame";
import House from "../house";
import { oWon, tied, xWon } from "../../redux/slices/stats";
import { useEffect } from "react";
import { restart } from "../../redux/slices/game";

const Board = () => {
  const numberOfHouses = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const dispatch = useDispatch();
  const { turn, houses } = useSelector((state: any) => state.game);

  const checkResult = () => {
    if (checkGame(houses)) {
      changeStats(checkGame(houses));
    }
  };

  const changeStats = (status: any) => {
    if (status === "TIED") dispatch(tied());

    if (status === "WON") {
      if (turn) dispatch(xWon());
      else dispatch(oWon());
    }

    dispatch(restart());
  };

  useEffect(() => {
    checkResult();
  }, [houses]);
  return (
    <section className="board p-5   grid grid-cols-3 gap-5">
      {numberOfHouses.map((index: number) => {
        return <House number={index} key={index} />;
      })}
    </section>
  );
};

export default Board;
