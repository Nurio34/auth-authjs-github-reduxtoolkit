import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";
import DetailsBtn from "./DetailsBtn";

function Product({ product }: { product: ProductType }) {
    const { title, thumbnail, id, amount } = product;

    return (
        <div className=" shadow-md shadow-accent rounded-md border-[1px] border-accent grid gap-[1vh] py-[1vh] px-[2vw]">
            <figure className="relative aspect-square">
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes="(min-width: 808px) 50vw, 100vw"
                    style={{
                        objectFit: "cover", // cover, contain, none
                    }}
                    priority={id <= 6}
                />
            </figure>
            <p className=" truncate">{title}</p>
            <DetailsBtn id={id} amount={amount!} />
        </div>
    );
}

export default Product;
