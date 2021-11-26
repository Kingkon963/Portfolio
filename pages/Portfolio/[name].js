import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import projects from "../../data/projects";
import { getWidth, displayAt } from "../../utils/screenSize";

import styles from "../../styles/PortfolioDetails.module.scss";

export default function ProjectDetail({ props }) {
  const [project, setProject] = useState();

  const router = useRouter();
  const { name, id } = router.query;

  useEffect(() => {
    if (id) {
      setProject(projects[id]);
    }
  }, [id]);

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="theme-color" content="#162A31" />
      </Head>
      {project ? (
        <>
          <div className={styles.container}>
            <img
              src="/backArrow.svg"
              alt="Back button"
              className={styles.backArrow}
              onClick={() => router.back()}
            />

            {displayAt(
              "sm",
              <div className={styles.banner}>
                <Image
                  src={project.thumbnail}
                  width={project.width}
                  height={project.height}
                  objectFit="cover"
                  loading="eager"
                />
              </div>
            )}

            {displayAt(
              ["lg", "xl", "xxl"],
              <div className={styles.banner}>
                <Image src={project.image} layout="fill" loading="eager" />
              </div>
            )}

            <div className={styles.content}>
              <div className={styles.title}>
                <h1>{project.name}</h1>
              </div>

              <div className={styles.info}>
                <span>Status</span>
                <span className={styles.infoValue}>{project.status}</span>

                <span>Technology</span>
                <span className={styles.infoValue}>{project.technology}</span>
              </div>

              <div className={styles.description}>
                <p>{parse(project.description)}</p>
              </div>
            </div>
            {project.url ? (
              <a className={styles.visitBtn} href={project.url} target="_blank">
                VISIT
              </a>
            ) : (
              <> </>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
