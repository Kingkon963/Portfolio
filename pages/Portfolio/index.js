import Layout from "../../components/Layout";
import Image from 'next/image'
import { useRouter } from 'next/router'
import projects from '../../data/projects'

function handleClick(e, router){
    let projectName = e.target.textContent
    router.push("Portfolio/" + projectName + "/")
}

export default function Portfolio(){
    const router = useRouter()
    return(
    <>
        <Layout setActiveLink="Portfolio">
            <div className="titleBar">
                <h1>Projects</h1>
            </div>
            <div className="projectsContainer">
                {projects.map(project => {
                    return(
                        <div className="project" onClick={(e) => handleClick(e, router)}>
                            <div className="inner-shadow">
                                {project.name}
                            </div>
                            <Image src={project.thumbnail} alt={project.name}
                            className="projectImg" 
                            width={project.width} height={project.height} 
                            />
                        </div>
                    )
                })}
            </div>
        </Layout>
        <style jsx>{`
            .titleBar{
                border-bottom: 1px solid #E4E4E4;
                padding: 0 0 5px 0;
                margin: 0 1em;
            }
            .titleBar h1{
                color: var(--light-color);
                font-family: 'MS Reference Sans Serif';
                font-weight: normal;
                font-size: 1em;
                //border: 1px solid white;
                margin: 0px;
                
            }
            .projectsContainer{
                display: grid;
                grid-template-columns: 1fr; 
                row-gap: 2.5em;
                column-gap: 3.5em;
                margin: 0 1em;
                padding: 2.5em 1.5em;
                overflow-y: scroll;
                height: 61vh;
                //border: 1px solid white;
            }
            .project {
                //border: 1px solid white;
                padding: 0px;
                text-align: center;
                position: relative;
            }
            .inner-shadow{
                position: absolute;
                z-index: 10;
                width: 100%;
                height: calc(100% - 3px);
                color: floralwhite;
                top: 0;
                left: 0;
                //border: 1px solid yellow;
                box-shadow: inset 0px -120px 100px -100px var(--light-green);
               //box-shadow: 4px 5px 6px rgba(255,255,255,16%);
               display: flex;
               justify-content: center;
               align-items: flex-end;
               font-size: 1.5em;
               padding-bottom: .3em;
            }
            .project:nth-child(odd) {
                text-align: right;
            }
            .project:nth-child(even) {
                text-align: left;
            }
            .projectImg {
                background-repeat: no-repeat;
                background-position: center;
                object-fit: cover;
                box-shadow: 4px 4px 6px rgba(255,255,255,16%);
            }
        `}
        </style>
    </>
    )
}