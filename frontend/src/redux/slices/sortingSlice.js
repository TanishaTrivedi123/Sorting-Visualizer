import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    algorithm: "",
    inputArr: [],
    steps: {},
}

const data = createSlice({
    name: "sortArr",
    initialState,
    reducers: {
        setSortingData: (state, action) => {
            state.algorithm = action.payload.algorithm;
            state.inputArr = action.payload.inputArr;
            state.steps = action.payload.steps;
        }
    }
})

export const {setSortingData} = data.actions;

export default data.reducer;