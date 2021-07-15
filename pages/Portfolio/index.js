import Layout from "../../components/Layout";
import Image from "next/image";
import { useRouter } from "next/router";

import projects from "../../data/projects";
import Container from "../../components/Container";

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
          <div className="titleBar">
            <h1>Projects</h1>
          </div>
          <div className="projectsContainer">
            {projects.map((project, id) => {
              return (
                <div
                  className="project"
                  onClick={(e) => handleClick(e, router, id)}
                  key={id}
                >
                  <div className="inner-text">{project.name}</div>
                  <div className="imgContainer">
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      className="projectImg"
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
      <style jsx>
        {`
          .titleBar {
            border-bottom: 1px solid #e4e4e4;
            padding: 0 0 5px 0;
            //margin: 0 1em;
          }
          .titleBar h1 {
            color: var(--light-color);
            font-family: "MS Reference Sans Serif";
            font-weight: normal;
            font-size: 1em;
            //border: 1px solid white;
            margin: 0px;
          }
          .projectsContainer {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5em;
            margin: 1em 0;
            overflow-y: scroll;
            //height: auto;
            //border: 3px solid red;
          }
          .project {
            //border: 1px solid white;
            padding: 0px;
            text-align: center;
            position: relative;
            min-height: 150px;
            min-width: 150px;
            cursor: pointer;
          }
          .inner-text {
            display: none;
            position: absolute;
            z-index: 10;
            width: 100%;
            height: calc(100% - 3px);
            color: floralwhite;
            top: 0;
            left: 0;
            //border: 1px solid yellow;
            box-shadow: inset 0px -120px 100px -100px var(--light-green);
            display: flex;
            justify-content: center;
            align-items: flex-end;
            font-size: 20px;
            padding-bottom: 0.3em;
            transition: all 0.5s;
          }
          .inner-text:hover {
            visibility: visible;
            font-size: 30px;
            box-shadow: inset 0px -120px 200px -100px var(--light-green);
          }
          .project:nth-child(odd) {
            text-align: right;
          }
          .project:nth-child(even) {
            text-align: left;
          }
          .project:last-child {
            //margin-bottom: 500px;
          }
          .imgContainer {
             {
              /* width: 114;
            height: 107; */
            }
          }
          .projectImg {
            background-repeat: no-repeat;
            background-position: center;
            object-fit: cover;
            box-shadow: 4px 4px 6px rgba(255, 255, 255, 16%);
          }
          @media only screen and (min-width: 768px) {
            .projectsContainer {
              grid-template-columns: 300px 300px 300px 300px;
              gap: 1.5em;
              margin-top: 1.5em;
              overflow: hidden;
            }
          }
        `}
      </style>
    </>
  );
}
