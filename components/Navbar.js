import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Navbar({setActiveLink}){
    const [active, setActive] = useState(setActiveLink)
    //console.log("From Navbar")
    const router = useRouter()
    
    useEffect(() => {
        router.push({
            pathname: active,
            query: {
                prevPage: (router.pathname === "/"+active) ? router.query.prevPage : router.pathname
            }
        })
    }, [active])

    return(
        <>
            <nav>
                <ul>
                    <li className={`${router.pathname === "/Skills" ? 'active' : (router.query.prevPage === '/Skills') ? 'inactive' : ''}`} 
                        onClick={() => setActive("Skills")}>Skills</li>
                    <li className={`${router.pathname === "/Portfolio" ? 'active' : (router.query.prevPage === '/Portfolio') ? 'inactive' : ''}`} 
                        onClick={() => setActive("Portfolio")}>Portfolio</li>
                    <li className={`${router.pathname === "/Testimonials" ? 'active' : (router.query.prevPage === '/Testimonials') ? 'inactive' : ''}`} 
                        onClick={() => setActive("Testimonials")}>Testimonials</li>
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
                    cursor: pointer;
                }
                li:first-child{
                    margin-left: 0em;
                }
                @keyframes active {
                    from {
                        opacity: 86%;
                        color: #B7D6EC;
                    }
                    to {
                        color: #D8EFFF;
                        transform: translateY(2px);
                        opacity: 1;
                        font-size: 1.5em;
                        margin: 0 1em;
                    }
                }
                .inactive{
                    animation-name: active;
                    animation-duration: .5s;
                    animation-direction: reverse;
                    animation-fill-mode: backwards;
                }
                .active{
                    /*color: #D8EFFF;
                    transform: translateY(2px);
                    opacity: 1;
                    font-size: 1.5em;
                    margin: 0 1em;*/
                    animation-name: active;
                    animation-duration: .5s;
                    animation-fill-mode: forwards;
                    transition: all .5s;
                }
                ::-webkit-scrollbar {
                    width: 0px;  /* Remove scrollbar space */
                    background: transparent;  /* Optional: just make scrollbar invisible */
                }
            `}</style>
        </>
    )
}