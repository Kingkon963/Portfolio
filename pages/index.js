import Head from "next/head";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index</title>
        <meta name="theme-color" content="#162A31" />
      </Head>

      <Layout /*setActiveLink="Skills"*/>
        <div className={styles.main}>
          <div className={styles.video}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/CurkDD4u_qI?autoplay=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <p>
              I'm Muhammad Naimul Islam Kingkon 🥱, <br /> <br />I study
              Computer Science {"&"} Engineering at Ahsanullah University of
              Science and Engineering, Bangladesh.
              <br />
              Besides that, I love to explore my fields of interest and acquire
              competency in these.
              <br />
              My fields of interest are{" "}
              <span className={styles.interest}>Web Development</span> (both
              frontend and backend),{" "}
              <span className={styles.interest}>Blockchain</span>,{" "}
              <span className={styles.interest}>ML using JS</span>
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
