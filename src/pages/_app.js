import Theme from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

export default function App({ Component, pageProps, session }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ChakraProvider>
  );
}
