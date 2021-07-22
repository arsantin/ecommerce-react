import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@600;900&display=swap" rel="stylesheet"/>
<link rel="icon" href="/favicon.ico"/>
<link rel="apple-touch-icon" href="/apple-icon.png"></link>
<meta name="theme-color" content="#317EFB"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument