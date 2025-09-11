import "./styles/UserRatingInputs.scss"
import { useState } from "react"
import { StarRating } from "../atoms/inputs/StarRating"
import { SubscribeInput } from "../atoms/inputs/SubscribeInput"
import { MainButton } from "../atoms/buttons/MainButton"

export function UserRatingInputs() {
  const [text, setText] = useState("")
  const [rating, setRating] = useState(0)

  function onSubmit() {
    const data = {
      comment: text,
      rating: rating,
    }
    console.log("გაგზავნისთვის მზად:", data)
  }

// const [reviews, setReviews] = useState<Review[]>([])

// function onSubmit() {
//   if (rating < 1 || rating > 5) return alert("შეფასება უნდა იყოს 1-დან 5-მდე")
//   const wordCount = text.trim().split(/\s+/).length
//   if (wordCount < 5 || wordCount > 10) return alert("კომენტარი უნდა იყოს 5-10 სიტყვა")

//   const newReview = { rating, comment: text }
//   setReviews((prev) => {
//     const updated = [...prev, newReview]
//     return updated.slice(-10) // მხოლოდ 10 შეფასება
//   })
// }

  return (
    <div className="user-rating">
      <SubscribeInput value={text} onChange={setText} />
      <div className="star-rating-container">
        <StarRating onRate={setRating} />
        <MainButton onClick={onSubmit}>Send</MainButton>
      </div>
    </div>
  )
}
