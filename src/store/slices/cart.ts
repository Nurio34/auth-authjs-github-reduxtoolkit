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
            console.log(action);
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        },
        remove: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            return {
                ...state,
                cartItems: state.cartItems.filter((item) => item.id !== id),
            };
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
