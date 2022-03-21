import Image from "next/image";
import lookup from "country-code-lookup";

import styles from "../styles/Testimonial.module.scss";

export default function Testimonial({ data }) {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.header} ${styles.level}`}>
          <Image src="/images/defaultProfile.svg" alt="Profile Pic" width={25} height={25} />
          {data.clientName}

          <div className={`${styles.rating} ${styles.level}`}>
            <Image src="/images/star.svg" alt="Star" width={18} height={18} />
            {data.rating}
          </div>
        </div>

        <div className={`${styles.level} ${styles.country}`}>
          <span
            className={`flag-icon flag-icon-${lookup.byCountry(data.country).iso2.toLowerCase()} `}
          ></span>
          {data.country}
        </div>

        <hr className={styles.hr} />

        <p className={styles.comment}>"{data.comment}"</p>

        <div className={styles.footer}>
          <a href={data.url} className={styles.externalLink} target="_blank">
            <Image src="/images/externalLink.svg" alt="Link" width={30} height={30} />
            {data.source === "fiverr" && (
              <Image
                src="/images/fiverr.png"
                alt="Fiverr"
                width={39}
                height={30}
                layout="intrinsic"
              />
            )}
            {data.source === "upwork" && (
              <Image
                src="/images/upwork-fill.jpg"
                alt="Fiverr"
                width={80}
                height={30}
                layout="intrinsic"
              />
            )}
          </a>
        </div>
      </div>
    </>
  );
}
