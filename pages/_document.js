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
          <meta name="title" content="Muhammad Naimul Islam's Portfolio" />
          <meta
            name="description"
            content="This is a personal website of an independent web developer, frontend engineer, freelancer, IT professional."
          />
          <meta
            name="keywords"
            content="freelancer, frontend developer, web developer, Fiverr freelancer, Upwork freelancer, tech professional, personal website, portfolio, IT portfolio, freelancer portfolio"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="Muhammad Naimul Islam" />

          <link rel="icon" href="/me.svg" />
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
