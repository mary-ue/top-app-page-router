import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const a = 1;
  return (
    <>
      <Component {...pageProps} />
      {a}
    </>
  );
}
