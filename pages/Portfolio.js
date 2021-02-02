import Layout from "../components/Layout";
import Image from 'next/image'

export default function Portfolio(){
    return(
    <>
        <Layout setActiveLink="Portfolio">
            <div className="titleBar">
                <h1>Projects</h1>
            </div>
            <div className="projectsContainer">
                <div className="project">
                    <img src="/images/projects/myKashBack.png" alt="mykashback"
                   />
                </div>
                <div className="project">
                    <img src="/images/projects/accountant.jpg" alt="mykashback"/>
                </div>


            </div>
        </Layout>
        <style jsx>
        {`
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
                grid-template-columns: 114px 107px; 
                row-gap: 3.5em;
                column-gap: 3.5em;
                margin: 0 1em;
                padding: 2.5em 1.5em;
                overflow-y: scroll;
                //height: 61vh;
                //border: 1px solid white;
            }
            .project {
                //border: 1px solid white;
                padding: 0px;
                text-align: center;
                height: 107px;
            }
            .project:nth-child(odd) {
                text-align: right;
            }
            .project:nth-child(even) {
                text-align: left;
            }
            img {
                background-repeat: no-repeat;
                background-position: center;
                object-fit: cover;
                width: 114px;
                height: 107px;
                box-shadow: 4px 4px 6px rgba(255,255,255,16%);
            }
        `}
        </style>
    </>
    )
}