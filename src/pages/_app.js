import Theme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'

export default function App({ Component, pageProps, session}) {
  return (
    <ChakraProvider>
      <SessionProvider session={session}>
        <Head>
          <title>Dashboard</title>
        </Head>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </SessionProvider>
    </ChakraProvider>
  );
}
