import { signIn } from "@/auth";

export function SigninBtn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("github");
            }}
        >
            <button type="submit" className="btn btn-secondary">
                Signin
            </button>
        </form>
    );
}
