import { useDispatch, useSelector } from "react-redux";
import checkGame from "../../functions/checkGame";
import House from "../house";
import { oWon, tied, xWon } from "../../redux/slices/stats";
import { useMemo } from "react";
import { changeTurn, move, endGame } from "../../redux/slices/game";
import canPlay from "../../functions/canPlay";
import { toast } from "react-toastify";

const Board = () => {
  const dispatch = useDispatch();
  const { turn, houses, gameOver } = useSelector((state: any) => state.game);

  const changeStats = (status: any) => {
    if (status === "TIED") {
      dispatch(tied());
      toast.info("TIED!");
    } else if (status === "WON") {
      if (turn) {
        dispatch(xWon());
        toast.success("Congrats, YOU WON!");
      } else {
        dispatch(oWon());
        toast.error("Sorry, you lost :(");
      }
    }
  };

  const moveCPU = () => {
    const RANDOM_NUMBER = Math.floor(Math.random() * 9);
    if (canPlay(houses, RANDOM_NUMBER)) {
      dispatch(move(RANDOM_NUMBER));
      dispatch(changeTurn());
    } else moveCPU();
  };

  const checkResult = useMemo(() => {
    if (checkGame(houses) && !gameOver) {
      changeStats(checkGame(houses));
      dispatch(endGame());
    }
  }, [houses]);

  useMemo(() => {
    if (turn) {
      moveCPU();
    }
  }, [houses]);
  return (
    <section className="board p-5   grid grid-cols-3 gap-5">
      {houses.map((element: any, index: number) => {
        if (element === 1) return <House number={index} key={index} />;
        else if (element === false)
          return <House number={index} key={index} isX />;
        else return <House number={index} key={index} isO />;
      })}
    </section>
  );
};

export default Board;
