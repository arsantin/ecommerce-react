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
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
<link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
<link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
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