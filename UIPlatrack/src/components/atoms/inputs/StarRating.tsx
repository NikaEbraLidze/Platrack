import "./styles/StarRating.scss"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

type StarRatingProps = {
  totalStars?: number
  onRate?: (rating: number) => void
}

export function StarRating({ totalStars = 5, onRate }: StarRatingProps) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (star: number) => {
    setRating(star)
    if (onRate) onRate(star) // ეს ღირებულება UserRating-ს გადაეცემა
  }

  return (
    <div className="star-rating">
      {Array.from({ length: totalStars }, (_, i) => {
        const starValue = i + 1
        return (
          <FaStar
            key={i}
            className={`star ${starValue <= (hover || rating) ? "active" : ""}`}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
          />
        )
      })}
    </div>
  )
}
