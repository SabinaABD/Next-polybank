import React from "react";
import "../styles/globals.css";

function MyApp({Component, pageProps}: {Component: any; pageProps: unknown}) {
  return <Component {...pageProps} />;
}

export default MyApp;
