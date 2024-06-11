import React from "react";
import { SigninBtn } from "./SigninBtn";
import { SignOutBtn } from "./SignoutBtn";
import { auth } from "@/auth";

async function AuthBtns() {
    const getSessions = await auth();

    return <div>{!getSessions ? <SigninBtn /> : <SignOutBtn />}</div>;
}

export default AuthBtns;
