import { createSlice } from "@reduxjs/toolkit";
import { Game, Player } from "../../types";

const O: Player = true;
const X: Player = false;

const initialState: Game = {
    turn: O,
    houses: [1,1,1,1,1,1,1,1,1],
    gameOver: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        move: (state, action) => {
            if (!state.gameOver) {
                state.houses[action.payload] = state.turn;
            }
        },
        changeTurn: state => {
            if (!state.gameOver) {
                state.turn = !state.turn
            }
        },
        restart: state => {
            state.gameOver = false
            state.turn = O
            state.houses = [1,1,1,1,1,1,1,1,1]
        },
        endGame: state => {
            state.gameOver = true
        }
    }
})

export default gameSlice.reducer
export const {move, changeTurn, restart, endGame} = gameSlice.actions