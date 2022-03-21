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
          clientName: "Muhammad Naeem Ashraf",
          country: "Australia",
          comment: `Great job Naimul.
          Naimul understands the advance concepts of Frontend development. I got exactly what I needed from him :)
          Looking forward to work again.`,
          rating: 5,
          source: "upwork",
          url: "https://www.upwork.com/freelancers/~014046cecba2ff7614",
        },
        {
          clientName: "harry0025",
          country: "Croatia",
          comment: `Naim solved my problem fast. 
                              It was good communication and he is ready to go extra mail to get things done. 
                              Good English writing. 
                              If needed would hire him again.`,
          rating: 5,
          source: "fiverr",
          url: "https://www.fiverr.com/naim19149/make-your-customized-landing-page-responsibly",
        },
        {
          clientName: "farestamimi",
          country: "Germany",
          comment: `Great work, fast response, helped me a lot professional work and very talented. very recommended. Thanks alot, will hire again soon`,
          rating: 5,
          url: "https://www.fiverr.com/naim19149/make-your-customized-landing-page-responsibly",
        },
        {
          clientName: "onepunchmantwo",
          country: "India",
          comment: `A genuine seller with real skills. He was very transparent about what he can and can't do, ready to make all changes that I requested, delivered well linted code and did a proper handover. Great experience. I will come back soon for more.`,
          rating: 5,
          source: "fiverr",
          url: "https://www.fiverr.com/naim19149/make-your-customized-landing-page-responsibly",
        },
        {
          clientName: "adanzweig",
          country: "Argentina",
          comment: `Great job! i would recommend you a lot. He fixed everything i needed!`,
          rating: 5,
          source: "fiverr",
          url: "https://www.fiverr.com/naim19149/make-your-customized-landing-page-responsibly",
        },
        {
          clientName: "rrenoir",
          country: "Germany",
          comment: `It was a good experience. Naim tried his best to understand my needs and transformed it to a great delivery.`,
          rating: 4.7,
          source: "fiverr",
          url: "https://www.fiverr.com/naim19149/make-your-customized-landing-page-responsibly",
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
              return <Testimonial data={testimonial} key={keyGenerator("testimonial")} />;
            })}
          </div>
        </Container>
      </Layout>

      <style jsx>{``}</style>
    </>
  );
}
