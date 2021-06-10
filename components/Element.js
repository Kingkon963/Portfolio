import Image from "next/image";

import SkillIndicator from "./SkillIndicator";

import styles from "../styles/Element.module.scss";

const Element = ({ e, size }) => {
  return (
    <div className={styles.elementContainer}>
      <span className={`${styles.name}`}>{e.name}</span>
      <div
        className={styles.imageWrapper}
        className={e.rotate ? styles.rotate : ""}
      >
        <Image
          src={e.src}
          alt={e.name}
          width={size}
          height={size}
          layout="intrinsic"
          //   loading="eager"
        />
      </div>
      <SkillIndicator level={e.level} />
    </div>
  );
};

export default Element;
