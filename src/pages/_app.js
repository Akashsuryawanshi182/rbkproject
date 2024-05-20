// import "@/styles/globals.css";
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }


import React from "react";
import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <title>rbk</title>
          <link rel="icon" type="image/x-icon" href="/logo.png" />
          <meta name="robots" content="index, follow" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
          <meta name="keywords" content="Health and Fitness" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
  )
}

export default MyApp