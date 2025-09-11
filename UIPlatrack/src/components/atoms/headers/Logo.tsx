import "./styles/Logo.scss"
import { useNavigate } from "react-router-dom"
import { PlatrackLogo } from "../../../assets/assets"

export function Logo(){
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return(<>
        <div className="logo" onClick={handleClick}>
            <img src={PlatrackLogo} alt="Platrack official logo" />
            <h2>Platrack</h2>
        </div>
    </>)
}