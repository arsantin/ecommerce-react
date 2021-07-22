import Head from "next/head";
import React, { lazy, Suspense, useEffect } from "react";
import Header from "./Header";
import styled from "styled-components";
import { fetchUserLogin } from "../../store/actions/UserAction";
import { supabase } from "../../services/supabase";
import { useDispatch } from "react-redux";

const Layout = ({ children, title = "Ecommerce" }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      dispatch(fetchUserLogin(session));
    });    
  }, []);

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
      <div className="bikini"><img src="/img/roupa-de-banho.png" /></div>    
    </>
  );
};

export default Layout;
