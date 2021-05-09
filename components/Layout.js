import ContentSection from './ContentSection'
import Header from './Header'
import Head from 'next/head'

export default function Layout({children, setActiveLink}){
    return (
        <>
            <Head>
                <meta name="theme-color" content="#162A31" />
                <title>Naim</title>
            </Head>
            <Header />
            <ContentSection setActiveLink={setActiveLink}>
                {children}
            </ContentSection>
        </>
    )
}