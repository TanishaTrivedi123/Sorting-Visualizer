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
        },

        nextStep: (state) => {
            if(state.steps.currStep < state.steps.totalSteps){
                state.steps.currStep += 1;
            }
        },

        previousStep: (state) => {
            if (state.steps.currStep > 1) {
                state.steps.currStep -= 1;
            }
        },

        resetVisualization: (state) => {
            state.steps.currStep = 1;
        }
    }
})

export const {setSortingData, nextStep, previousStep, resetVisualization} = data.actions;

export default data.reducer;