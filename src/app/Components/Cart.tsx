"use client";

import { useAppSelector } from "@/store/hooks";
import CartItem from "./CartItem";
import ComplateShoppingBtn from "./ComplateShoppingBtn";

function Cart() {
    const { cartItems } = useAppSelector((s) => s.cart);

    const total = cartItems.reduce((sum, item) => {
        return sum + item.price * item.amount;
    }, 0);

    return (
        <main className=" max-w-[1000px] mx-auto">
            <h1
                className=" font-bold text-3xl text-center  py-[2vh]"
                style={{ fontVariant: "small-caps" }}
            >
                Cart
            </h1>
            {cartItems.length > 0 ? (
                <section className=" shadow-md shadow-primary">
                    <ul>
                        {cartItems.map((item) => {
                            return <CartItem key={item.id} item={item} />;
                        })}
                    </ul>
                </section>
            ) : (
                <p className=" text-center">Your cart is empty</p>
            )}
            {total ? (
                <section className=" flex justify-end py-[2vh]">
                    <ComplateShoppingBtn total={total} />
                </section>
            ) : null}
        </main>
    );
}

export default Cart;
