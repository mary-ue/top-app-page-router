import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next TITLE</title>
        <link key={1} rel="icon" href="/favicon2.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
