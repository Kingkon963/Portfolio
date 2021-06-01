import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import projects from '../../data/projects'

export default function ProjectDetail({props}){
    const [project, setProject] = useState()
    
    const router = useRouter()
    const {name, id} = router.query

    useEffect(() => {
        if(id){
            setProject(projects[id])
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
                <Image src={project.thumbnail} width={project.width} height={project.height} loading="eager"/>
            </div>

            <div className="content">
                <div className="title">
                    <h1>{project.name}</h1>
                </div>

                <div className="info">
                    <span>Status</span>
                    <span className="info-value">{project.status}</span>

                    <span>Technology</span>
                    <span className="info-value">{project.technology}</span>
                </div>

                <div className="description">
                    <p>
                        {project.description}
                    </p>
                </div>
            </div>
            
            <button>
                VISIT
            </button>

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
            .content{
                width: calc(100% - 6em);
                align-self: center;
            }
            .title{
                color: var(--light-color);
                font-family: 'MS Reference Sans Serif';
                text-align: center;
                flex-grow: 100%;
                border-bottom: 1px solid white;
            }
            .info{
                color: var(--light-color);
                display: grid;
                grid-template-columns: 1fr 1fr;
                padding: 1em 0px;
                row-gap: 1em;
                white-space: nowrap;
                font-size: .8em;
            }
            .info-value{
                text-align: right;
            }
            p{
                color: var(--light-color);
                padding: 1em;
                border: 1px solid var(--light-color);
                font-size: .8em;
            }
            button{
                background-color: var(--light-green);
                padding: 1em;
                border: none;
                outline: none;
                color: floralwhite;
                border-radius: .3em;
                width: 30vw;
                align-self: center;
                font-size: 1em;
                font-weight: bold;
                cursor: pointer;
                margin-top: 1em;
            }
        `}</style>
    </>)
}