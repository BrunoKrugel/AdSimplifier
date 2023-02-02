import Theme from '../styles/theme';
import { ThemeProvider, createTheme } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: '#86AEFF',
    },
    secondary: {
      main: '#1B0E51',
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeProvider>
  );
}
