import {configureStore} from "@reduxjs/toolkit"
import sortingReducer from "../redux/slices/sortingSlice"

const store = configureStore({
    reducer: {
        sortArr: sortingReducer,
    }
})

export default store;