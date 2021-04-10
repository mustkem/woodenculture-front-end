import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
            rel="stylesheet"
          />
          <meta charSet="utf-8" />
          {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" /> */}

          <meta name="theme-color" content="#000000" />
          {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}

          {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
