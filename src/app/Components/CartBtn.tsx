import Link from "next/link";
import React from "react";

function CartBtn() {
    return (
        <Link href="/cart" className="btn btn-primary">
            Cart
        </Link>
    );
}

export default CartBtn;
