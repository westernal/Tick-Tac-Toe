import { useSelector } from "react-redux";
import {  Game, Player } from "../types"

const houses = useSelector((state: Game) => state.houses);
const turn = useSelector((state: Game) => state.turn);

const checkGame = () => {

}

export default checkGame