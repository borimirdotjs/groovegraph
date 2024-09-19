import NextAuth, { AuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.GG_CLIENT_ID ?? "",
      clientSecret: process.env.GG_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope:
            "user-read-email user-top-read user-read-recently-played user-read-private user-read-playback-state user-modify-playback-state",
        },
      },
    }),
  ],
  callbacks: {
    async signIn() {
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        console.log(token);
      }

      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
