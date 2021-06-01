import "../styles/globals.css";
import { NavContextProvider } from "../context/NavContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      <Component {...pageProps} />
    </NavContextProvider>
  );
}

export default MyApp;
