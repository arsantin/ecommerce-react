import Head from "next/head";
import React, { lazy, Suspense } from "react";

const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));

const renderLoader = () => <p>Carregando...</p>;

const Layout = ({ children, title = "PromobitFlix" }) => {
  return (
    <Suspense fallback={renderLoader()}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      {children}      
    </Suspense>
  );
};

export default Layout;
