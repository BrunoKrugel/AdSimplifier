import Theme from '../styles/theme';
import { ThemeProvider, createTheme } from '@mui/material';
import Head from 'next/head';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(120, 38%, 42%)',
      dark: 'hsl(132, 94%, 21%)',
    },
    secondary: {
      main: 'hsl(0, 0%, 17%)',
      dark: 'hsl(0, 0%, 0%)',
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
