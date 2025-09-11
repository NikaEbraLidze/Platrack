import "./styles/SearchPlatforms.scss"
import { SearchPlatformCard } from "../molecules/SearchPlatformCard"
import { Youtube, TikTok, Spotify, Wikipedia } from "../../assets/assets"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const platformSlides = [
  { icon: Youtube, altText: "YouTube icon", name: "YouTube", path: "/youtube/search"},
  { icon: TikTok, altText: "TikTok icon", name: "TikTok", path: "/tiktok/search" },
  { icon: Spotify, altText: "Spotify icon", name: "Spotify", path: "/spotify/search" },
  { icon: Wikipedia, altText: "Wikipedia icon", name: "Wikipedia", path: "/wikipedia/search" }
]

export function SearchPlatforms() {
  return (
    <section id="search" className="search-platforms">
      <Swiper
        modules={[Navigation]} 
        spaceBetween={8}
        breakpoints={{
          1024: { slidesPerView: 3 },
          600: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
        grabCursor={true}
        pagination={{ clickable: true }}
        navigation={{ 
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {platformSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <SearchPlatformCard
              icon={slide.icon}
              altText={slide.altText}
              name={slide.name}
              path={slide.path}
            />
          </SwiperSlide>
        ))}
        
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  )
}
