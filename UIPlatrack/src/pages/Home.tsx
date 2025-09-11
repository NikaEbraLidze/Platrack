import "./styles/Home.scss"
import { Header } from "../components/molecules/Header"
import { HeroSection } from "../components/organisms/HeroSection"
import { SearchPlatforms } from "../components/organisms/SearchPlatforms"
import { HowItWorks } from "../components/organisms/HowItWorks"
import { FAQ } from "../components/organisms/FAQ"
import { Reviews } from "../components/organisms/Reviews"
import { Footer } from "../components/organisms/Footer"

export function Home(){
    return(<>
        <div className="home-page">
            <Header />
            <HeroSection />
            <SearchPlatforms />
            <HowItWorks />
            <FAQ />
            <Reviews />
            <Footer />
        </div>
    </>)
}