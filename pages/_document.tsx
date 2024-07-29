import Document, {
  DocumentContext,
  Main,
  Head,
  NextScript,
  DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <html lang="ru">
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
      </html>
    );
  }
}

export default MyDocument;
