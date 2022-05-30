import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

import projects from "../../data/projects";
import Container from "../../components/Container";
import styles from "../../styles/Portfolio.module.scss";

function handleClick(e, router, projectId) {
  let projectName = e.target.textContent;
  console.log(projectName);
  router.push({
    pathname: "Portfolio/" + projectName + "/",
    query: { id: JSON.stringify(projectId) },
  });
}

export default function Portfolio() {
  const router = useRouter();
  return (
    <>
      <Layout setActiveLink="Portfolio">
        <Container>
          <div className={styles.titleBar}>
            <h1>Projects</h1>
          </div>
          <div className={styles.projectsContainer}>
            {projects.map((project, id) => {
              return (
                <div
                  className={styles.project}
                  onClick={(e) => handleClick(e, router, id)}
                  key={id}
                >
                  <div className={styles.innerText}>{project.name}</div>
                  <div className={styles.imgContainer}>
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      className={styles.projectImg}
                      width={project.width}
                      height={project.height}
                      layout="responsive"
                      objectFit="cover"
                      loading="eager"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Layout>
    </>
  );
}
