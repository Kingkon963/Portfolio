import Image from 'next/image'

export default function Testimonial({data}) {
    return(
    <>
        <div className="data">
            <div className="header level">
                <Image 
                    src="/images/defaultProfile.svg" 
                    alt="Profile Pic" 
                    width={25}
                    height={25}
                />
                {data.clientName}

                <div className="rating level">
                    <Image 
                        src="/images/star.svg" 
                        alt="Star" 
                        width={18}
                        height={18}
                    />
                    {data.rating}
                </div>
            </div>

            <hr />

            <p className="comment">
                {data.comment}
            </p>

            <div className="footer">
                <Image 
                    src="/images/externalLink.svg" 
                    alt="Link" 
                    width={18}
                    height={18}
                />
                <Image 
                    src="/images/fiver.svg" 
                    alt="Fiverr" 
                    width={18}
                    height={18}
                />
            </div>
        </div>
        
        <style jsx>
        {`
            .data{
                background-color: #264653;
                border: 1px solid #2A9D8F;
                color: rgba(183, 214, 236, .86);
                padding: .5em .75em;
            }
            .level{
                display: flex;
                align-items: center;
            }
            .header{
                gap: 10px;
            }
            .rating{
                margin-left: auto;
                gap: 2px;
                color: rgba(255, 193, 0, .86);
            }

            hr{
                border-color:#2A9D8F;
            }
            .comment{
                line-height: 1.3rem;
                font-size: .8rem;
            }
            .footer{
                display: flex;
                flex-direction: row;
                justify-content: end;
            }
        `}
        </style>
    </>
    )
}