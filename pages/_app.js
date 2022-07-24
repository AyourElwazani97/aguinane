import "../styles/globals.scss";
import styles from "../styles/Main.module.scss";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} styles={styles} />;
}

export default MyApp;
