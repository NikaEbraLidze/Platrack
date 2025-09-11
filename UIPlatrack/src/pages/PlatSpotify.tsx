import "./styles/PlatPages.scss"
import { useState } from "react"
import { PlatformsContent } from "../components/atoms/contents/PlatformsContent"
import { PlatformsInput } from "../components/atoms/inputs/PlatformsInput"
import { PlatSearchImg } from "../components/molecules/PlatSearchImg"
import { PlatContainer } from "../components/organisms/PlatContainer"
import { Spotify } from "../assets/assets"

export function PlatSpotify(){
    const [ input, setInput ] = useState("")
    const [ data, setData ] = useState()

    function onClick(){
        console.log("searching spotify: ", input);
    }

    return(
        <div className="plat-pages">
            <PlatformsContent
                heading="Soundtrack your moment, instantly"
                paragraph="Looking for the vibe? We connect you to Spotify’s freshest drops, curated tracks, and genre-defying sounds — no playlist-hunting required."
            />
            <PlatformsInput
                value={input}
                onChange={setInput}
                onClick={onClick}
                icon={Spotify}
                altText="search spotify songs, singers and potcasts" 
                color="#2bd800be"
            />
            { data ? <PlatContainer variant="spotify" data={data} /> : <PlatSearchImg />}
        </div>
    )
}