import Layout from "../components/Layout";
import Container from "../components/Container";
import Testimonial from "../components/Testimonial";

import keyGenerator from "../utils/keyGenerator";
import styles from "../styles/Testimonials.module.scss";

export const getStaticProps = async () => {
  return {
    props: {
      testimonials: [
        {
          clientName: "harry0025",
          country: "Croatia",
          comment: `Naim solved my problem fast. 
                              It was good communication and he is ready to go extra mail to get things done. 
                              Good English writing. 
                              If needed would hire him again.`,
          rating: 5,
        },
        {
          clientName: "farestamimi",
          country: "Germany",
          comment: `Great work, fast response, helped me a lot professional work and very talented. very recommended. Thanks alot, will hire again soon`,
          rating: 5,
        },
      ],
    },
  };
};

export default function Testimonials(props) {
  return (
    <>
      <Layout>
        <Container>
          <div className={styles.container}>
            {props.testimonials.map((testimonial) => {
              return (
                <Testimonial
                  data={testimonial}
                  key={keyGenerator("testimonial")}
                />
              );
            })}
          </div>
        </Container>
      </Layout>

      <style jsx>{``}</style>
    </>
  );
}
