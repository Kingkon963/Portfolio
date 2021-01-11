import Navbar from "./Navbar";

export default function ContentSection({children, setActiveLink}){

    return(
    <div className="contentSection">
        <Navbar setActiveLink={setActiveLink}/>
        {children}

        <style jsx>{`
            .contentSection{
                background-color: #162A31;
                height: 74vh;
                margin-top: 1vh;
            }    
        `}</style>
    </div>
    )
}