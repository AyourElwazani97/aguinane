import Head from "next/head";
import Hero from "../components/Hero";
export default function Home({ styles }) {
  return (
    <div>
      <Head>
        <title>Aguinane</title>
        <meta name="description" content="agauinane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero styles={styles} />
    </div>
  );
}
