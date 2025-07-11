import {createSlice} from "@reduxjs/toolkit";
export type PriceRangeType = {
    min: number;
    max: number;
    minStep: number;
}
const initialState:PriceRangeType = {
    min: 0,
    max: 100,
    minStep: 10
}

export const priceRangeSlice = createSlice({
    name: 'priceRange',
    initialState: {
        value: initialState
    },
    reducers: {
        setMax: (state,action: {payload: number}) => {
            let max = action.payload || initialState.max;
            let min = state.value.min;
            state.value.max = Math.max(max, min + state.value.minStep);
        },
        setMin: (state,action: {payload:number}) => {
            let min = Number(action.payload) || initialState.min;
            const max = state.value.min;
            state.value.min = Math.max(min, max - state.value.minStep);
        }
    }
})

export const {setMax, setMin} = priceRangeSlice.actions;