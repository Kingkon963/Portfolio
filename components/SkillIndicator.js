export default function SkillIndicator({level}){
    let colorAdvance = "#EC1AD0";
    let colorInter = "#1A83EC";
    let colorBasics = "#1AEC67";

    if(level === "Advance"){
        return(
        <>
            <div className="indicator" ></div>
            <style jsx>{`
                .indicator{
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-bottom: 10px solid ${colorAdvance};
                }
            `}</style>
        </>
        )
    }

    if(level === "Intermediate"){
        return(
        <>
            <div className="indicator" ></div>
            <style jsx>{`
                .indicator{
                    min-width: 10px;
                    min-height: 10px;
                    background-color: ${colorInter};
                    margin: 0px;
                }
            `}</style>
        </>
        )
    }

    if(level === "Basics"){
        return(
        <>
            <div className="indicator" ></div>
            <style jsx>{`
                .indicator{
                    min-width: 12px;
                    min-height: 12px;
                    border-radius: 50%;
                    background-color: ${colorBasics};
                    margin: 0px;
                }
            `}</style>
        </>
        )
    }

    return(<>Invalid Indicator!</>);

}