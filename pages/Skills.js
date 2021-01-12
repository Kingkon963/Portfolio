import Layout from "../components/Layout";


function SkillIndicator({level}){
    let color = ""
    switch(level){
        case "Advance":
            color = "#EC1AD0"
            break;
        case "Intermediate":
            color = "#1A83EC"
            break;
        case "Basics":
            color = "#1AEC67"
            break;
        default:
            color = "white"
    }

    return(
    <>
        <div className="indicator" ></div>
        <style jsx>{`
            .indicator{
                min-width: 15px;
                min-height: 15px;
                border-radius: 50%;
                background-color: ${color};
                margin: 0px;
            }
        `}</style>
    </>
    )
}

export default function Skills(){
    return(
    <>
        <Layout setActiveLink="Skills">
            <ul>
                <SkillIndicator level="Advance"/>
                <li>Advance</li>

                <SkillIndicator level="Intermediate"/>
                <li>Intermediate</li>

                <SkillIndicator level="Basics"/>
                <li>Basics</li>
            </ul>
        </Layout>

        <style jsx>
        {`
            ul{
                //border: 1px solid white;
                list-style: none;
                display: flex;
                align-items: center;
                padding: 0px 1.5em;
            }    
            li{
                color: #B7D6EC;
                opacity: 86%;
                margin-left: .3em;
                margin-right: 1.2em;
            }
        `}
        </style>
    </>
    )
}