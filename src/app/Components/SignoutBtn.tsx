import { signOut } from "@/auth";

export function SignOutBtn() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <button type="submit" className="btn btn-accent">
                Sign Out
            </button>
        </form>
    );
}
