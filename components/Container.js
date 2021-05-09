export default function Container({children}) {
    return(
        <>
        <div className="container">
            {children}
        </div>

        <style jsx>
        {`
            .container {
                padding: 0 2.5em 0 2.5em;
                margin: 0px;
                height: 64vh;
            }
        `}
        </style>
        </>
    )
}