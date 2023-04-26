import { useSelector } from "react-redux";
import {  Game, Player } from "../types"

const houses = useSelector((state: Game) => state.houses);

const canPlay = (index: number) => {
if (houses[index] !== "") return false 
else return true
}

export default canPlay