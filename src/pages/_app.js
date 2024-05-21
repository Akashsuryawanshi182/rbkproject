import React from "react";
import Head from "next/head";
import '../styles/globals.css';
import CookieConsent from '../components/CookieConsent';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>Welcome to the world of RBK International</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
        <meta name="keywords" content="Health and Fitness" />
      </Head>
      <Component {...pageProps} />
      <CookieConsent />
    </React.Fragment>
  );
}

export default MyApp;
