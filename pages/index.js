import Head from "next/head";
import styles from "../../styles/Home.module.css";
import QuoteApp from "../src/components/home/QuoteApp";

export default function Home() {
  return (
    <div className={styles.quote_info_container}>
      <Head>
        <title>Breaking bad App</title>
        <meta
          name="description"
          content="Get Breaking Bad Quotes, see recent, favorites, archive quotes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QuoteApp />
    </div>
  );
}
