import ContentSection from './ContentSection'
import Header from './Header'
import Head from 'next/head'

export default function Layout({children, setActiveLink}){
    return (
        <>
            <Head>
                <meta name="theme-color" content="#999999" />
            </Head>
            <Header />
            <ContentSection setActiveLink={setActiveLink}>
                {children}
            </ContentSection>
        </>
    )
}