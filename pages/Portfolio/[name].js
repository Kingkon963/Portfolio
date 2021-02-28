import { useRouter } from 'next/router'

export default function ProjectDetail(){
    const router = useRouter()
    const {name} = router.query
    
    return(<>
        <div className="container">
            <img src="/backArrow.svg" alt="Back button" className="backArrow" onClick={() => router.back()}/>

            <div className="banner">

            </div>
        </div>
        <style jsx>{`
            .container{
                height: 100vh;
                background-color: var(--dark-color);
            }    
            .backArrow{
                position: absolute;
                top: 1em;
                left: 1em;
            }
        `}</style>
    </>)
}