import { GlobalStyle } from '@/styles/global';
import { defaultTheme } from '@/styles/themes/default';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
