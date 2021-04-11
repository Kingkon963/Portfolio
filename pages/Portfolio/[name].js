import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'

export default function ProjectDetail({props}){
    const [project, setProject] = useState()
    
    const router = useRouter()
    const {name, data} = router.query

    useEffect(() => {
        if(data){
            setProject(JSON.parse(data))
        }    
    }, project)
        

    return(
    <>
        <Head>
            <title>{name}</title>
            <meta name="theme-color" content="#162A31" />
        </Head>
        {project ? 
        <div className="container">
            <img src="/backArrow.svg" alt="Back button" className="backArrow" onClick={() => router.back()}/>

            <div className="banner">
                <Image src={project.thumbnail} width={project.width} height={project.height}/>
            </div>

            <div className="title">
                <h1>{project.name}</h1>
            </div>
            <hr />
        </div>
        : 
        <></>
        }
        <style jsx>{`
            .container{
                height: 100vh;
                background-color: var(--dark-color);
                padding-top: 5em;
                display: flex;
                flex-direction: column;
                align-items: strech;
                //padding: 5em 3em 0 3em;
            }    
            .backArrow{
                position: absolute;
                top: 1em;
                left: 1em;
            }
            .banner{
                align-self: center;
            }
            .title{
                color: var(--light-color);
                font-family: 'MS Reference Sans Serif';
                align-self: center;
                flex-grow: 100%;
                border: 1px solid white;
            }
            .title > hr {
                width: 100%;
            }
        `}</style>
    </>)
}