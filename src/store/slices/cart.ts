import { CartItemType, CartType } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CartType = {
    cartItems: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<CartItemType>) => {
            state.cartItems.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== id);
        },
        increase: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.cartItems.filter((item) => item.id === id)[0];
            item.amount++;
        },
        decrease: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const item = state.cartItems.filter((item) => item.id === id)[0];
            item.amount--;
        },
    },
});

export const { add, remove, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
