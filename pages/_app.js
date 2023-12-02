// pages/_app.js

import "../app/globals.css"
import Header from "../components/Header"



function MyApp({ Component, pageProps }) {
  // Any custom logic you want to include for your entire app

  return (
    <>
    <Header/>
    <Component {...pageProps} />;
    </>
  )
}

export default MyApp;
