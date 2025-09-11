import "./styles/PlatPages.scss"
import { useState } from "react"
import { PlatformsContent } from "../components/atoms/contents/PlatformsContent"
import { PlatformsInput } from "../components/atoms/inputs/PlatformsInput"
import { PlatSearchImg } from "../components/molecules/PlatSearchImg"
import { PlatContainer } from "../components/organisms/PlatContainer"
import { Wikipedia } from "../assets/assets"

export function PlatWikipedia(){
    const [ input, setInput ] = useState("")
    const [ data, setData ] = useState()

    function onClick(){
        console.log("searching wikipedia: ", input);
    }

    return(
        <div className="plat-pages">
            <PlatformsContent
                heading="Trusted knowledge, without the noise"
                paragraph="Cut through the noise and go straight to trusted, structured knowledge. Our smart search gets you the Wikipedia insight you need in seconds."
            />
            <PlatformsInput
                value={input}
                onChange={setInput}
                onClick={onClick}
                icon={Wikipedia}
                altText="search any story or person" 
                color="#fff"
            />
            { data ? <PlatContainer variant="wikipedia" data={data} /> : <PlatSearchImg />}
        </div>
    )
}