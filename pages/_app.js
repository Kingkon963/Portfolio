import "../styles/globals.css";
import "../node_modules/flag-icon-css/css/flag-icon.min.css";
import { usePanelbear } from "@panelbear/panelbear-nextjs";
import { NavContextProvider } from "../context/NavContext";

function MyApp({ Component, pageProps }) {
  usePanelbear("GISCWNIflyY");

  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}

export default MyApp;
