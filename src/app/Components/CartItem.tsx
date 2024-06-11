import { CartItemType } from "@/types";
import Image from "next/image";
import React from "react";
import DecreaseBtn from "./DecreaseBtn";
import AddToCartBtn from "./AddToCartBtn";
import IncreaseBtn from "./IncreaseBtn";

function CartItem({ item }: { item: CartItemType }) {
    const { thumbnail, title, amount, price, id } = item;

    return (
        <li className=" border border-accent flex flex-wrap md:flex-nowrap justify-center items-center gap-[2vw]  px-[4vw] py-[2vh]">
            <figure className="relative  w-[100px] aspect-square">
                <Image src={thumbnail} alt={title} width={100} height={100} />
            </figure>
            <p className=" truncate">{title}</p>
            <p className=" ml-auto">{price}</p>
            <div className="flex justify-between items-center gap-[2vw]">
                <DecreaseBtn product={item} />
                <AddToCartBtn product={item} />
                <IncreaseBtn product={item} />
            </div>
            <p>{amount}</p>
            <p>{amount * price} $</p>
        </li>
    );
}

export default CartItem;
