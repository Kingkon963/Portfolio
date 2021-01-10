export default function Header(){
    return(<>
        <div className="headerContainer">
            <div className="da">
                <h1 className='title'>HI!<br/>I'm Naim
                    <img src="/me.svg" alt="" className="profilePic"/>
                </h1>
                <h2 className='subTitle'>a front-end Developer</h2>                
            </div>
        </div>
    
    <style jsx>{`
        .headerContainer{
            background-color: #264653;
            margin: 0px;
            height: 25vh;
            padding: 1em 2em 0em 2em;
        }
        h1, h2{
            margin: 0px;
        }
        .title{
            color: #29C5B2;
            font-family: 'MS Reference Sans Serif';
            font-weight: normal;
            font-size: 4em;
            line-height: 1em;
            letter-spacing: 0px;
            //border: 1px solid white;
            position: relative;
        }
        .profilePic {
            width: 30px;
            height: auto;
            position: absolute;
            top: .8em;
            left: 3.28em;
            border: 1px solid #2A9D8F;
            border-radius: 50%;
        }
        .subTitle{
            color: #83ABC6;
            font-family: 'MS Reference Sans Serif';
            font-weight: normal;
            //border: 1px solid white;
            line-height: 1em;
            letter-spacing: .052em;
        }
        .da{
            max-height: 20vh;
        }

    `}</style>
    </>)
}