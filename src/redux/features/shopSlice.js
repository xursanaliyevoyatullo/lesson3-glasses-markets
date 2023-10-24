import { createSlice } from "@reduxjs/toolkit";
import { storeData } from '../../data'

const initialState = {
    products: storeData,
    amount: 14,
    total: 0
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {
        incrementAmount: (state, { payload }) => {
            const item = state.products.find((item) => item.name === payload.name)
            item.amount++
        },
        decrementAmount: (state, { payload }) => {
            const item = state.products.find((item) => item.name === payload.name)
            item.amount--
        },
        removeItem: (state, {payload}) => {
            state.products = state.products.filter((item) => item.name !== payload.name)
        },
        updateTotal: (state) => {
            let amount = 0
            let total = 0

            state.products.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            
            state.amount = amount
            state.total = total
        },
    },
});

export const { incrementAmount, decrementAmount, removeItem, updateTotal } = shopSlice.actions

export default shopSlice.reducer