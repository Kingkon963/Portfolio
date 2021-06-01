import Layout from "../components/Layout";
import Container from "../components/Container";
import Testimonial from "../components/Testimonial";

import keyGenerator from "../utils/keyGenerator";

export const getStaticProps = async () => {
    return{
        props: {
            testimonials: [
                {
                    clientName: 'harry0025',
                    comment: `Naim solved my problem fast. 
                              It was good communication and he is ready to go extra mail to get things done. 
                              Good English writing. 
                              If needed would hire him again.`,
                    rating: 5

                },
                {
                    clientName: 'harry0025',
                    comment: `Naim solved my problem fast. 
                              It was good communication and he is ready to go extra mail to get things done. 
                              Good English writing. 
                              If needed would hire him again.`,
                    rating: 5

                }
            ]
        }
    }
}

export default function Testimonials(props){
    return(
    <>
        <Layout setActiveLink="Testimonials">
            <Container>
                {props.testimonials.map(testimonial => {
                    return(
                        <Testimonial data={testimonial} key={keyGenerator('testimonial')} />
                    );
                })}
            </Container>
        </Layout>

        <style jsx>
        {`
            
        `}
        </style>
    </>
    )
}

