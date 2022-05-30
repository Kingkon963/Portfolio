import Script from "next/script";
import "../styles/globals.css";
import "../node_modules/flag-icon-css/css/flag-icon.min.css";
import { NavContextProvider } from "../context/NavContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavContextProvider>
      {/* ExacVisitor tag */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w, d) {
            if (w.google_tag_manager == null) {
              d.addEventListener("DOMContentLoaded", function() {
                run();
              });
            } else run();
            function run() {
              var token = "fad5118b-72d8-4f34-83e7-56c69983da79";
              var script = d.createElement('script');
              script.async = true;
              script.src = "https://track.exactvisitor.com/assets/for-cache.min.js?s=ev&authorization=fad5118b-72d8-4f34-83e7-56c69983da79";
              script.onload = function() {
                w.salesToolsObserverCached(token);
              };
              d.body.appendChild(script);
            }
          })(window, document)
          `,
        }}
      />
      <Component {...pageProps} />
    </NavContextProvider>
  );
}

export default MyApp;
