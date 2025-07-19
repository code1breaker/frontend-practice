import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: `${process.env.KEYCLOAK_URL}/realms/${process.env.KEYCLOAK_REALM}`,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account && account.access_token) {
        // Store the access token and refresh token when the user logs in
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        // token.expiresAt = Date.now() + account.expires_in * 1000; // Set token expiration time
      }
      // If the token has expired, refresh it using the refresh token
      // if (token.refreshToken && Date.now() > token.expiresAt) {
      //   try {
      //     const response = await fetch(
      //       `http://localhost:8080/realms/myrealm/protocol/openid-connect/token`,
      //       {
      //         method: "POST",
      //         headers: {
      //           "Content-Type": "application/x-www-form-urlencoded",
      //         },
      //         body: new URLSearchParams({
      //           grant_type: "refresh_token",
      //           client_id: process.env.KEYCLOAK_CLIENT_ID,
      //           client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
      //           refresh_token: token.refreshToken,
      //         }),
      //       }
      //     );
      //     const refreshedTokens = await response.json();
      //     if (refreshedTokens.access_token) {
      //       token.accessToken = refreshedTokens.access_token;
      //       token.refreshToken = refreshedTokens.refresh_token;
      //       token.expiresAt = Date.now() + refreshedTokens.expires_in * 1000;
      //     }
      //   } catch (error) {
      //     console.error("Failed to refresh token", error);
      //   }
      // }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

export default NextAuth(authOptions);
