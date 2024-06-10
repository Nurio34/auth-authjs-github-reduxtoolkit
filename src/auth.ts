import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

// export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth({
//   providers: [GitHub],
// })
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [GitHub],
});
