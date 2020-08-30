import { useState } from "react";
import { ZeitProvider, CssBaseline } from "@zeit-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("light");

  const switchThemes = () => {
    setThemeType((lastThemeType) =>
      lastThemeType === "dark" ? "light" : "dark"
    );
  };

  return (
    <ZeitProvider theme={{ type: themeType }}>
      <CssBaseline />
      <Header themeType={themeType} switchThemes={switchThemes} />
      <Component {...pageProps} />
      <Footer />
    </ZeitProvider>
  );
}
export default MyApp;
