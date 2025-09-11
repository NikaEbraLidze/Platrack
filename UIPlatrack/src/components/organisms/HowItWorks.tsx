import "./styles/HowItWorks.scss"
import { HowItWorksGrid } from "./HowItWorksGrid"

export function HowItWorks(){
    return(
        <section className="how-it-works" id="how-it-works">
            <h2><span>H</span>ow <span>I</span>t <span>W</span>orks?</h2>
            <HowItWorksGrid />
        </section>
    )
}