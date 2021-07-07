import Head from "next/head";
import React, { lazy, Suspense } from "react";
import Header from "./Header";


const Layout = ({ children, title = "Ecommerce" }) => {
  return (
    <>
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
    </>
  );
};

export default Layout;
