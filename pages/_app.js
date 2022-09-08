import "../styles/globals.css";
import "../node_modules/flag-icon-css/css/flag-icon.min.css";
import { NavContextProvider } from "../context/NavContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}

export default MyApp;
