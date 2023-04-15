import type { AppProps } from 'next/app';
import { Header } from '../containers/Header/Header';

import GlobalStyle from '../styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
