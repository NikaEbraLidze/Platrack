import "./styles/UserReviews.scss"
import { UserReviewCard } from "../molecules/UserReviewCard"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

const reviews = [
  { rating: 5, comment: "Great platform, very easy to use daily.", username: "Nika" },
  { rating: 4, comment: "Good features but could be slightly faster.", username: "Giorgi" },
  { rating: 5, comment: "Absolutely love the design and functionality here.", username: "Ana" },
  { rating: 3, comment: "Works fine, but sometimes a little buggy.", username: "Lasha" },
  { rating: 5, comment: "Fantastic experience, highly recommended to everyone.", username: "Mariam" },
  { rating: 4, comment: "Overall smooth, but navigation can improve.", username: "David" },
  { rating: 5, comment: "The best app I have ever used.", username: "Tamar" },
  { rating: 5, comment: "Super intuitive and very user friendly platform.", username: "Irakli" },
  { rating: 2, comment: "Crashes sometimes, needs more stability updates.", username: "Elene" },
  { rating: 4, comment: "Pretty good overall, nice and clean design.", username: "Giga" },
  { rating: 5, comment: "Amazing experience, works perfectly on all devices.", username: "Keti" },
  { rating: 3, comment: "It’s okay, but could offer more features.", username: "Levan" },
  { rating: 5, comment: "Very satisfied with the performance and speed.", username: "Sopho" },
  { rating: 4, comment: "Quite flexible and works well on mobile.", username: "Goga" },
  { rating: 5, comment: "I’m extremely happy, exceeded my expectations.", username: "Nana" },
  { rating: 5, comment: "Simply the best service I’ve tried so far.", username: "Maka" },
  { rating: 4, comment: "Convenient to use every day without issues.", username: "Gia" },
  { rating: 5, comment: "Super fast, reliable and really enjoyable experience.", username: "Teo" },
  { rating: 3, comment: "Not bad, but needs a few more updates.", username: "Alex" },
  { rating: 5, comment: "One of the best platforms I have seen.", username: "Mari" },
]

export function UserReviews() {
  return (
    <div className="user-reviews">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={8}
        slidesPerView="auto"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        grabCursor={true}
        loop={true}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="review-slide">
            <UserReviewCard
              rating={review.rating}
              comment={review.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
