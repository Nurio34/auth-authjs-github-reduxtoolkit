"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { add, remove } from "@/store/slices/cart";
import { ProductType } from "@/types";

function AddToCartBtn({ product }: { product: any }) {
    const dispatch = useAppDispatch();
    const cart = useAppSelector((s) => s.cart);

    const { id, thumbnail, title, price } = product;

    const handleAddToCart = () => {
        dispatch(add({ id, thumbnail, title, price, amount: 1 }));
    };

    const handleRemoveFromCart = () => {
        dispatch(remove(id));
    };

    //** */
    const isProductAlreadyInCart = cart.cartItems.some(
        (item) => item.id === id,
    );

    return (
        <button
            className="btn btn-secondary grow"
            onClick={() => {
                isProductAlreadyInCart
                    ? handleRemoveFromCart()
                    : handleAddToCart();
            }}
        >
            {isProductAlreadyInCart ? "Remove Cart" : "Add Cart"}
        </button>
    );
}

export default AddToCartBtn;
