import "./styles/HeroSection.scss"
import { HeroContent } from "../atoms/contents/HeroContent"
import { HeroCTA } from "../atoms/buttons/HeroCTA"

export function HeroSection() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="hero-section">
      <HeroContent />
      <div className="hero-cta-container">
        <HeroCTA
          variant="explore"
          onClick={() => handleScroll("how-it-works")}
        />
        <HeroCTA
          variant="search-now"
          onClick={() => handleScroll("search")}
        />
      </div>
    </div>
  )
}
