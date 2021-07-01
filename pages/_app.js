import '../index.css'
import Head from 'next/head'
import Footer from '../components/Footer'

// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>license.wiki</title>
        <base href="/" target="_blank"></base>
        <meta name="description" content="Find the license that works for you." />
        <meta name="theme-color" content="#131313" />
      </Head>

      <Component {...pageProps} />
      <Footer />
    </>
  )
}