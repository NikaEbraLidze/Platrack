import "./styles/FooterContent.scss"
import { Link } from "react-router-dom"
import { Logo } from "../headers/Logo"

export function FooterContent(){
    return(
        <div className="footer-content">
            <Logo />
            <Link to="/">Terms of service</Link>
            <Link to="/">privacy policy</Link>
        </div>
    )
}

export function FooterCopyright(){
    const year = new Date().getFullYear();

    return(
        <p className="copyright">© {year} All rights reserved</p>
    )
}