import "./styles/Header.scss"
import { Logo } from "../atoms/headers/Logo"
import { MainButton } from "../atoms/buttons/MainButton"
import { useNavigate } from "react-router-dom"

export function Header(){
    const navigate = useNavigate();
    function navigateSignIn(){
        navigate("/");
    }
    
    return(<>
        <div className="header">
            <Logo />
            <MainButton onClick={navigateSignIn} children="Sign In" />
        </div>
    </>)
}