import { createSlice } from "@reduxjs/toolkit";
import { Game, Player } from "../../types";

const O: Player = true;
const X: Player = false;

const initialState: Game = {
    turn: O,
    houses: ["","","","","","","","",""]
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        move: (state, action) => {
            state.houses[action.payload] = state.turn;
        },
        changeTurn: state => {
            state.turn = !state.turn
        }
    }
})

export default gameSlice.reducer
export const {move, changeTurn} = gameSlice.actions