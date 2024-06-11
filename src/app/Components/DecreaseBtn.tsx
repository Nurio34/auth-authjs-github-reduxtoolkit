"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrease } from "@/store/slices/cart";
import { ProductType } from "@/types";
import React from "react";
import { FaMinusSquare } from "react-icons/fa";

function DecreaseBtn({ product }: { product: any }) {
    const cart = useAppSelector((s) => s.cart);
    const dispatch = useAppDispatch();

    const { id } = product;
    const isProductAlreadyInCart = cart.cartItems.some(
        (item) => item.id === id,
    );

    const amount = !isProductAlreadyInCart
        ? 0
        : cart.cartItems.filter((item) => item.id === id)[0].amount;

    const handleDecrease = () => {
        dispatch(decrease(id));
    };

    return (
        <button className="" disabled={amount <= 1} onClick={handleDecrease}>
            <FaMinusSquare
                size={24}
                color={`${amount <= 1 ? "gray" : "red"}`}
            />
        </button>
    );
}

export default DecreaseBtn;
