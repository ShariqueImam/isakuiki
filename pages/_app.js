import '../styles/globals.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title  key={'title'}>Isaku Iki | Eethuis</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
      name="description"
      content="Isaku Iki | Eethuis"
    />

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
