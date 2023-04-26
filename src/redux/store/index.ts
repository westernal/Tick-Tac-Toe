import {configureStore} from "@reduxjs/toolkit"
import stats from "../slices/stats"

 const store = configureStore({
    reducer: stats
})

export default store