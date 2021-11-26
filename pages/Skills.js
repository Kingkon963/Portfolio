import Image from "next/image";
import Layout from "../components/Layout";
import ListSection from "../components/ListSection";
import SkillIndicator from "../components/SkillIndicator";
import Container from "../components/Container";
import { languages, frameworks, others } from "../data/skills";
import { displayAt } from "../utils/screenSize";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <>
      <Layout setActiveLink="Skills">
        <Container>
          <div className={styles.flex}>
            <div className={styles.left}>
              <ul>
                <SkillIndicator level="Advance" />
                <li>Advance</li>

                <SkillIndicator level="Intermediate" />
                <li>Intermediate</li>

                <SkillIndicator level="Basics" />
                <li>Basics</li>
              </ul>

              <div className="listContainer no-scrollbar">
                <div>
                  <ListSection
                    title="Languages"
                    elements={languages}
                    size={45}
                  />
                </div>
                <div>
                  <ListSection
                    title="Libraries & Frameworks"
                    elements={frameworks}
                    size={45}
                  />
                </div>
                <div>
                  <ListSection title="Others" elements={others} size={45} />
                </div>
              </div>
            </div>
            <div className={styles.right}>
              {displayAt(
                ["lg", "xl", "xxl"],

                <>
                  <h1 className={styles.hireMe}>Hire Me @</h1>
                  <a
                    href="https://www.upwork.com/freelancers/~014046cecba2ff7614"
                    target="_blank"
                  >
                    <Image
                      src="/images/upwork-fill.jpg"
                      width="700"
                      height="250"
                      layout="intrinsic"
                      loading="eager"
                    />
                  </a>
                </>
              )}
            </div>
          </div>
        </Container>
      </Layout>

      <style jsx>
        {`
          ::-webkit-scrollbar {
            width: 0;
            background: transparent;
          }
          .listContainer {
            height: 60vh;
            overflow-y: scroll;
            overflow-x: hidden;
            scrollbar-width: none;
            display: grid;
            row-gap: 30px;
            max-width: 576px;
          }
          ul {
            //border: 1px solid white;
            list-style: none;
            display: flex;
            align-items: center;
            padding: 0px 0em;
            //justify-content: space-around;
            margin-top: 0px;
          }
          li {
            color: #b7d6ec;
            opacity: 86%;
            margin-left: 0.3em;
            margin-right: 3em;
            font-size: 0.8em;
          }
        `}
      </style>
    </>
  );
}
