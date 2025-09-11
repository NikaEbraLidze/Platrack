import "./styles/Footer.scss"
import { FooterContent, FooterCopyright } from "../atoms/contents/FooterContent"

export function Footer(){
    return(
        <footer>
            <FooterContent />
            <FooterCopyright />
        </footer>
    )
}