import "./styles/HowItWorksCard.scss"

type HowItWorksCardPops = {
    img: string,
    altText: string
}

export function HowItWorksCard( {img, altText}: HowItWorksCardPops ){
    return(
        <div className="h-i-w-card">
            <img src={img} alt={altText} />
        </div>
    )
}