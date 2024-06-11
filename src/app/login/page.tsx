import { auth } from "@/auth";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function Login() {
    const getSessions: Session | null = await auth();

    if (!getSessions) {
        return (
            <div className=" min-h-96 grid place-content-center font-semibold text-lg">
                Please Sigin to continue ...
            </div>
        );
    } else {
        redirect("/");
    }
}

export default Login;
