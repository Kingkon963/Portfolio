import Image from 'next/image'

import SkillIndicator from './SkillIndicator'
import keyGenerator from '../utils/keyGenerator'

export default function ListSection({title, elements, size, rotate}){


    return(<>
        <h3>{title}</h3>
        <hr />
        <div className='container'>

            {elements.map((e) => {
                return(
                    <div className="elementContainer" key={keyGenerator()}>
                        <div className="imageWrapper" className={e.rotate? 'rotate': ''}>
                            <Image
                                src= {e.src}
                                alt= {e.name}
                                width={size}
                                height={size}
                                layout="fixed"
                                quality="100"
                                loading="eager"
                            />
                        </div>
                        <SkillIndicator level={e.level}/>
                    </div>
                )
            })}
            
        </div>

        <style jsx>{`
            .container{
                display: grid;
                grid-template-columns: 45px 45px 45px 45px;
                justify-content: flex-start;
                column-gap: 2.4em;
                padding: 0 .1em;
            }
            h3{
                color: #B7D6EC;
                opacity: 86%;
                font-weight: normal;
                font-size: .9em;
                margin: 0px;
            }
            hr {
                background-color: #E4E4E4;
                width: 100%;
            }
            @keyframes rotation{
                from {
                    transform: rotate(0deg);
                }
                to{
                    transform: rotate(360deg);
                }
            }
            .rotate{
                animation: rotation 3s infinite linear;
            }
            .imageWrapper{
                display: inline-block;
                //border: 1px solid white;
                border-radius: 50%;
                width: ${size+'px'};
                height: ${size+'px'};
                overflow: hidden;
                //margin-left: 2em;
                margin: .5em 0px;
            }
            .imageWrapper:first-child{
                margin-left: 0px;
            }
            .elementContainer{
                display: flex;
                flex-direction: column;
                align-items: center;
                
            }
            .elementContainer:first-child{
                grid-column-start: 0;
                
            }
        `}</style>
    </>)
}