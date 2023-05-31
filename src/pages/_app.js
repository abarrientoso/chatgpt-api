import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/chat.svg'/>
        <title>ChatGPT-API</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
