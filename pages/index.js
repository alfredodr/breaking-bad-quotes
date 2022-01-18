import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import QuoteApp from "../components/home/QuoteApp";
//import bb from "../public/bb.svg";

export default function Home() {
  return (
    <div className={styles.quote_info_container}>
      <Head>
        <title>Breaking bad App</title>
        <meta name="description" content="Get Breaking Bad Quotes, see recent, favorites, archive quotes" />
        <link rel="icon" href="/bb.svg" />
      </Head>
    </div>
  )
}
