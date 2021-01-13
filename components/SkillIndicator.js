export default function SkillIndicator({level}){
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
                min-width: 10px;
                min-height: 10px;
                border-radius: 50%;
                background-color: ${color};
                margin: 0px;
            }
        `}</style>
    </>
    )
}