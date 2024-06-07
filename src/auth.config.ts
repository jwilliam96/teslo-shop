import NextAuth, { type NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import bcryptjs from 'bcryptjs';
import { z } from 'zod';

import prisma from './lib/prisma';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/auth/login',
    newUser: '/auth/new-account',
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      // const isLoggedIn = !!auth?.user;

      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }
      return true;
    },
    async signIn({ account, profile }) {

      if (account?.provider === 'google') {

        if (profile?.email) {
          const verifyUser = await prisma.user.findUnique({ where: { email: profile?.email } })
          if (verifyUser) {
            return true
          } else {
            await prisma.user.create({
              data: {
                name: profile?.name!,
                email: profile?.email,
                image: profile?.picture,
                emailVerified: profile.email_verified ?? false
              }
            })
          }
        }

      }


      if (account?.provider === "github") {

        if (profile?.email) {
          const verifyUser = await prisma.user.findUnique({ where: { email: profile?.email } })
          if (verifyUser) {
            return true
          } else {
            await prisma.user.create({
              data: {
                name: profile?.name!,
                email: profile?.email,
                image: profile?.picture,
                emailVerified: profile.email_verified!
              }
            })
          }
        }
      }
      return true
    },



    async jwt({ token, user }) {
      if (user) {
        const users = await prisma.user.findUnique({ where: { email: user.email!.toLowerCase() } });
        if (users) {
          if (!users.emailVerified) {
            token.data = user
          }
          const { password, ...rest } = users
          token.data = rest
        }
      }
      return token;
    },

    async session({ session, token, user }) {
      session.user = token.data as any;
      return session;
    },

  },

  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,

    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials) {

        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);


        if (!parsedCredentials.success) return null;

        const { email, password } = parsedCredentials.data;


        // Buscar el correo
        const user = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
        if (!user) return null;

        // Comparar las contraseñas
        if (!bcryptjs.compareSync(password, user.password as string)) return null;


        // Regresar el usuario sin el password
        const { password: _, ...rest } = user;

        return rest;
      },
    }),


  ]
}



export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);