import "./styles/PlatPages.scss"
import { useState } from "react"
import { PlatformsContent } from "../components/atoms/contents/PlatformsContent"
import { PlatformsInput } from "../components/atoms/inputs/PlatformsInput"
import { PlatSearchImg } from "../components/molecules/PlatSearchImg"
import { PlatContainer } from "../components/organisms/PlatContainer"
import { TikTok } from "../assets/assets"

export function PlatTikTok(){
    const [ input, setInput ] = useState("")
    const [ data, setData ] = useState()

    function onClick(){
        console.log("searching tiktok: ", input);
    }

    return(
        <div className="plat-pages">
            <PlatformsContent
                heading="Catch what’s trending — instantly"
                paragraph="Get instant access to the latest viral TikToks without endless scrolling. Smart filters + search logic bring you exactly what’s buzzing right now."
            />
            <PlatformsInput
                value={input}
                onChange={setInput}
                onClick={onClick}
                icon={TikTok}
                altText="search tiktok videos, pages and persons" 
                color="#2dabffff"
            />
            { data ? <PlatContainer variant="tiktok" data={data} /> : <PlatSearchImg />}
        </div>
    )
}