"use server";

import { redirect } from "next/navigation";
import { FetchProductResult } from "./types";

export const fetchProducts = async () => {
    const productsAPI_Url = "https://dummyjson.com/products";

    try {
        const result = await fetch(productsAPI_Url, {
            method: "GET",
            cache: "force-cache",
        });
        const data = await result.json();

        return { success: true, data: data?.products };
    } catch (error) {
        return {
            success: false,
            msg: "Unexpected error while 'Fetching Products'",
        };
    }
};

export const goToDetail = (formData: any) => {
    const id = formData.get("id");
    console.log({ id });
    redirect(`/${id}`);
};

export const fetchProduct = async (id: number): Promise<FetchProductResult> => {
    const productAPI_Url = `https://dummyjson.com/products/${id}`;

    try {
        const result = await fetch(productAPI_Url, {
            method: "GET",
            cache: "force-cache",
        });
        const product = await result.json();
        return { success: true, product };
    } catch (error) {
        return {
            success: false,
            msg: "Unexpected error while 'Fetching Product'",
        };
    }
};
