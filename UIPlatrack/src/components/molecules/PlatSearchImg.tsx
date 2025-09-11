import "./styles/PlatSearchImg.scss"
import { SearchIcon } from "../../assets/assets"

export function PlatSearchImg(){
    return(
        <div className="plat-search-img">
            <img src={SearchIcon} alt="platrack search icon" />
        </div>
    )
}