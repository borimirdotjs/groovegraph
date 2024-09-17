import NextAuth, { AuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.GG_CLIENT_ID ?? "",
      clientSecret: process.env.GG_CLIENT_SECRET ?? "",
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
