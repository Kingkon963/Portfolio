import ContentSection from './ContentSection'
import Header from './Header'


export default function Layout({children, setActiveLink}){
    return (
        <>
            <Header />
            <ContentSection setActiveLink={setActiveLink}>
                {children}
            </ContentSection>
        </>
    )
}