import Layout from "../components/Layout";
import ListSection from "../components/ListSection";
import SkillIndicator from "../components/SkillIndicator";




export default function Skills(){

    let languages = [
        {
            name: "Javascript",
            src: "/images/javascript.jpg",
            level: 'Advance'

        }, 
        {
            name: "Python",
            src: "/images/python.png",
            level: 'Advance'
        },
        {
            name: "Javascript",
            src: "/images/javascript.jpg",
            level: 'Advance'

        }, 
        {
            name: "Python",
            src: "/images/python.png",
            level: 'Advance'
        },
        {
            name: "Javascript",
            src: "/images/javascript.jpg",
            level: 'Advance'

        }, 
        {
            name: "Python",
            src: "/images/python.png",
            level: 'Advance',
        }
    ];

    let frameworks = [
        {
            name: "ReactJs",
            src: "/images/reactjs.png",
            level: 'Advance',
            rotate: true
        },
    ]


    return(
    <>
        <Layout setActiveLink="Skills">
            <div className='container'>
                <ul>
                    <SkillIndicator level="Advance"/>
                    <li>Advance</li>

                    <SkillIndicator level="Intermediate"/>
                    <li>Intermediate</li>

                    <SkillIndicator level="Basics"/>
                    <li>Basics</li>
                </ul>
                
                <div className="listContainer">
                    <div>
                        <ListSection title="Languages" elements={languages} size={45}/>
                    </div>
                    <div>
                        <ListSection title="Libraries & Frameworks" elements={frameworks} size={45}/>
                    </div>
                    <div>
                        <ListSection title="Languages" elements={languages} size={45}/>
                    </div>
                    <div>
                        <ListSection title="Libraries & Frameworks" elements={frameworks} size={45}/>
                    </div>
                    <div>
                        <ListSection title="Languages" elements={languages} size={45}/>
                    </div>
                    <div>
                        <ListSection title="Libraries & Frameworks" elements={frameworks} size={45}/>
                    </div>
                
                </div>

            </div>
            
        </Layout>

        <style jsx>
        {`
            .container {
                padding: 0 2.5em 0 2.5em;
                margin: 0px;
                height: 64vh;
            }
            .listContainer {
                height: 60vh;
                overflow-y: scroll;
                overflow-x: hidden;
                display: grid;
                row-gap: 3em; 
            }
            ul{
                //border: 1px solid white;
                list-style: none;
                display: flex;
                align-items: center;
                padding: 0px 0em;
                //justify-content: space-around;
                margin-top: 0px;
            }    
            li{
                color: #B7D6EC;
                opacity: 86%;
                margin-left: .3em;
                margin-right: 3em;
                font-size: .8em;
            }
        `}
        </style>
    </>
    )
}