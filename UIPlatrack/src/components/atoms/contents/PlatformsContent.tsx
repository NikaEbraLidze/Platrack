import "./styles/PlatformsContent.scss"

type PlatformsContentProps = {
    heading: string
    paragraph: string
}

export function PlatformsContent({ heading, paragraph } : PlatformsContentProps){
    return(
        <div className="platforms-content">
            <h1>{ heading }</h1>
            <p>{ paragraph }</p>
        </div>
    )
}