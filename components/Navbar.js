import {useState} from 'react'

export default function Navbar(){
    const [active, setActive] = useState("Skills")

    function setActiveLink(event){
        console.log(event.target.textContent)
        setActive(event.target.textContent)
    }

    return(
        <>
            <nav>
                <ul>
                    <li className={`${active === "Skills" ? 'active' : ''}`} onClick={(e) => setActiveLink(e)}>Skills</li>
                    <li className={`${active === "Portfolio" ? 'active' : ''}`} onClick={(e) => setActiveLink(e)}>Portfolio</li>
                    <li className={`${active === "Testimonials" ? 'active' : ''}`} onClick={(e) => setActiveLink(e)}>Testimonials</li>
                </ul>
            </nav>
            <style jsx>{`
                nav{
                    color: #B7D6EC;
                    overflow-x: scroll;
                    padding-right: 1em;
                }
                ul{
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                }
                li{
                    text-transform: uppercase;
                    font-size: .8em;
                    opacity: 86%;
                    font-family: 'MS Reference Sans Serif';
                    margin-left: 1em;
                    margin-right: 1em;
                    transition: all .5s;
                }
                li:first-child{
                    margin-left: 0em;
                }
                .active{
                    color: #D8EFFF;
                    transform: translateY(2px);
                    opacity: 1;
                    font-size: 1.5em;
                    margin: 0 1em;
                }
                ::-webkit-scrollbar {
                    width: 0px;  /* Remove scrollbar space */
                    background: transparent;  /* Optional: just make scrollbar invisible */
                }
            `}</style>
        </>
    )
}