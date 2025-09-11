import "./styles/PlatCardContent.scss"

type PlatCardContentVariant = "tiktok" | "youtube" | "spotify" | "wikipedia"

type PlatCardContentProps = {
    variant: PlatCardContentVariant
    heading: string
    paragraph: string
}

export function PlatCardContent({ variant, heading, paragraph } : PlatCardContentProps ){
    return(
        <div className={`plat-card-content plat-card-content-${variant}`}>
            <h4>{ heading }</h4>
            <p>{ paragraph }</p>
        </div>
    )
}