import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { ConnectToDb } from "@/lib/config/db";
import { UserModel } from "../models/user.model";
import { authConfig } from "./auth.config";
const loginUsingCredential = async (credentials) => {
  const { username, password } = credentials;
  try {
    ConnectToDb();
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("Wrong Credentials!");
    if (password !== user.password) throw new Error("Wrong Password");
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to login!");
  }
};
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await loginUsingCredential(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        ConnectToDb();
        try {
          const existUser = await UserModel.findOne({ email: profile.email });
          if (!existUser) {
            const newUser = new UserModel({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
              password:process.env.DEFAULT_PASS,
              isAdmin:true,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks
  }
});
