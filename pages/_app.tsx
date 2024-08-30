import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  useEffect(() => {
    if (router && typeof window !== 'undefined') {
      const handleRouteChange = (url: string) => {
        ym('hit', url);
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link key={1} rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
