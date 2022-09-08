import Image from "next/image";
import Layout from "../components/Layout";
import ListSection from "../components/ListSection";
import SkillIndicator from "../components/SkillIndicator";
import Container from "../components/Container";
import { languages, frameworks, others } from "../data/skills";
import styles from "../styles/Skills.module.scss";

export default function Skills() {
  return (
    <>
      <Layout setActiveLink="Skills">
        <Container>
          <div className={styles.flex}>
            <div className={styles.left}>
              <ul className={styles.skillLevels}>
                <SkillIndicator level="Advance" />
                <li>Advance</li>

                <SkillIndicator level="Intermediate" />
                <li>Intermediate</li>

                <SkillIndicator level="Basics" />
                <li>Basics</li>
              </ul>

              <div className={styles.listContainer}>
                <div>
                  <ListSection title="Languages" elements={languages} size={45} />
                </div>
                <div>
                  <ListSection title="Libraries & Frameworks" elements={frameworks} size={45} />
                </div>
                <div>
                  <ListSection title="Others" elements={others} size={45} />
                </div>
              </div>
            </div>

            <div className={styles.right}>
              <h1 className={styles.hireMe}>Hire Me @</h1>
              <a href="https://www.upwork.com/freelancers/~014046cecba2ff7614" target="_blank">
                <Image
                  src="/images/upwork-fill.jpg"
                  width="700"
                  height="250"
                  layout="intrinsic"
                  loading="eager"
                />
              </a>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
