import { createSlice } from "@reduxjs/toolkit";
import { Stats } from "../../types";

const initialState: Stats = {
    wins: 0,
    ties: 0,
    loss: 0
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        xWon: state => {
            state.wins++
        },
        tied: state => {
            state.ties++
        },
        oWon: state => {
            state.loss++
        },
    }
})

export default gameSlice.reducer
export const {xWon, tied, oWon} = gameSlice.actions