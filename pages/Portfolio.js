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
                    <div className="inner-shadow">

                    </div>
                    <Image src="/images/projects/myKashBack2.png" alt="mykashback"
                    className="projectImg" 
                    width="300" height="300" 
                    />
                </div>
                <div className="project">
                    <div className="inner-shadow">

                    </div>
                    <Image src="/images/projects/accountant.jpg" alt="mykashback"
                    className="projectImg" 
                    width="300" height="200" layout="responsive"/>
                </div>


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
                row-gap: 5em;
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
                color: white;
                top: 0;
                left: 0;
                //border: 1px solid yellow;
               // box-shadow: inset 0px -120px 150px -100px var(--light-green);
               box-shadow: 4px 5px 6px rgba(255,255,255,16%);
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