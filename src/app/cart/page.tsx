import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Cart from "../Components/Cart";

async function CartPage() {
    const getSessions = await auth();

    if (!getSessions) {
        redirect("/");
    }

    return <Cart />;
}

export default CartPage;
