import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
  ]
})