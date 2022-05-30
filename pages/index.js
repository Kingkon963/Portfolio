import Head from "next/head";

import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";

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
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.aboutMe}>
            <h1>About Me</h1>
            <p>
              I'm Muhammad Naimul Islam Kingkon and I'm not a Godzilla😁, <br /> <br />
              I'm studying Computer Science {"&"} Engineering at Ahsanullah University of Science
              and Engineering, Bangladesh.
              <br />
              Besides that, I love to explore my fields of interest and acquire competency in those.
              <br />
              My fields of interest are <span className={styles.interest}>
                Web Development
              </span>{" "}
              (both frontend and backend),{" "}
              <span className={styles.interest}>Android Development</span>,{" "}
              <span className={styles.interest}>Machine Learning using JS</span>
            </p>

            <div className={styles.socialBtns}>
              <a
                href="https://www.linkedin.com/in/muhammad-naimul-islam-656418213/"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <button>
                  <BsLinkedin />
                </button>
              </a>
              <a
                href="https://github.com/Kingkon963"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <button>
                  <BsGithub />
                </button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
