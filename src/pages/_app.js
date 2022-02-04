import {useEffect} from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;