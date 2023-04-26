import {configureStore} from "@reduxjs/toolkit"
import stats from "../slices/stats"
import game from "../slices/game"

 const store = configureStore({
    reducer: {stats, game}
})

export default store