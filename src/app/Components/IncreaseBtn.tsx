"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { increase } from "@/store/slices/cart";
import { ProductType } from "@/types";
import { FaPlusSquare } from "react-icons/fa";

function IncreaseBtn({ product }: { product: any }) {
    const cart = useAppSelector((s) => s.cart);
    const dispatch = useAppDispatch();

    const { id } = product;
    const isProductAlreadyInCart = cart.cartItems.some(
        (item) => item.id === id,
    );

    const amount = !isProductAlreadyInCart
        ? 0
        : cart.cartItems.filter((item) => item.id === id)[0].amount;

    const handleIncrease = () => {
        dispatch(increase(id));
    };

    return (
        <button disabled={amount === 0} onClick={handleIncrease}>
            <FaPlusSquare
                size={24}
                color={`${amount === 0 ? "gray" : "green"}`}
            />
        </button>
    );
}

export default IncreaseBtn;
