import { createSlice } from "@reduxjs/toolkit";
import { Stats } from "../../types";

const initialState: Stats = {
    wins: 0,
    ties: 0,
    loss: 0
}

const statsSlice = createSlice({
    name: 'stats',
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
        }
    }
})

export default statsSlice.reducer
export const {xWon, tied, oWon} = statsSlice.actions