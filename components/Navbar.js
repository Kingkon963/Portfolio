import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { NavContext } from "../context/NavContext";

import styles from "../styles/Navbar.module.scss";

export default function Navbar() {
  const [active, setActive] = useContext(NavContext);
  const router = useRouter();

  useEffect(() => {
    if (active) {
      router.push({
        pathname: active,
        query: {
          prevPage:
            router.pathname === "/" + active
              ? router.query.prevPage
              : router.pathname,
        },
      });
    }
  }, [active]);

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
            className={`${
              router.pathname === "/Skills"
                ? styles.active
                : router.query.prevPage === "/Skills"
                ? styles.inactive
                : ""
            } ${styles.li}`}
            onClick={() => setActive("Skills")}
          >
            Skills
          </li>
          <li
            className={`${
              router.pathname === "/Portfolio"
                ? styles.active
                : router.query.prevPage === "/Portfolio"
                ? styles.inactive
                : ""
            } ${styles.li}`}
            onClick={() => setActive("Portfolio")}
          >
            Portfolio
          </li>
          <li
            className={`${
              router.pathname === "/Testimonials"
                ? styles.active
                : router.query.prevPage === "/Testimonials"
                ? styles.inactive
                : ""
            } ${styles.li}`}
            onClick={() => setActive("Testimonials")}
          >
            Testimonials
          </li>
        </ul>
      </nav>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </>
  );
}
