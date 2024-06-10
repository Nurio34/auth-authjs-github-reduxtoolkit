"use server";

import { redirect } from "next/navigation";

const productsAPI_Url = "https://dummyjson.com/products";

export const fetchProducts = async () => {
    try {
        const result = await fetch(productsAPI_Url, {
            method: "GET",
            cache: "no-store",
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
