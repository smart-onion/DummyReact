import {priceRangeSlice} from "../slices/priceRangeSlice.ts";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        priceRange: priceRangeSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>