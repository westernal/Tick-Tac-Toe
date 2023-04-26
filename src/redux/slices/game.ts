import { createSlice } from "@reduxjs/toolkit";
import { Game, Player } from "../../types";

const O: Player = true;
const X: Player = false;

const initialState: Game = {
    turn: O,
    houses: [1,1,1,1,1,1,1,1,1],
    reset: false
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
        },
        restart: state => {
            state.reset = !state.reset
            state.turn = O
            state.houses = [1,1,1,1,1,1,1,1,1]
        }
    }
})

export default gameSlice.reducer
export const {move, changeTurn, restart} = gameSlice.actions