import Header from './Header'
import Main from './Main'
import Navbar from './Navbar'


export default function Layout(){
    return (
        <>
            <Header />
            <div className="contentSection">
                <Navbar />
                <Main />
            </div>
            

            <style jsx>{`
                .contentSection{
                    background-color: #162A31;
                    height: 74vh;
                    margin-top: 1vh;
                }    
            `}</style>
        </>
    )
}