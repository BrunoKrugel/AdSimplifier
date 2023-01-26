import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import * as dotenv from "dotenv";

dotenv.config();

console.log(process.env.FACEBOOK_ID);
export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ]
})