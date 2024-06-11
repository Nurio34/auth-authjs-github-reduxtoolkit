import React from "react";
import { SigninBtn } from "./SigninBtn";
import Link from "next/link";
import CartBtn from "./CartBtn";

function Header() {
    return (
        <header
            className="py-[2vh] px-[4vw] shadow-lg shadow-primary
                flex justify-between items-center
             "
        >
            <Link
                href="/"
                className="font-bold text-2xl"
                style={{ fontVariant: "small-caps" }}
            >
                CartApp
            </Link>
            <div className=" flex gap-[2vw]">
                <CartBtn />
                <SigninBtn />
            </div>
        </header>
    );
}

export default Header;
