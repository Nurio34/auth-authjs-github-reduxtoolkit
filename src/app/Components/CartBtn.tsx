import { auth } from "@/auth";
import Link from "next/link";
import React from "react";

async function CartBtn() {
    const getSessions = await auth();

    if (getSessions) {
        return (
            <Link href="/cart" className="btn btn-primary">
                Cart
            </Link>
        );
    }
}

export default CartBtn;
