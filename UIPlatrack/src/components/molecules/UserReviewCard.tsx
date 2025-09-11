import "./styles/UserReviewCard.scss"
import { FaStar } from "react-icons/fa"

type UserReviewCardProps = {
  rating: number 
  comment: string
  username?: string
}

export function UserReviewCard({ rating, comment, username }: UserReviewCardProps) {
  return (
    <div className="user-review-card">
      {username && <h4 className="user-review-username">{username}</h4>}

      <div className="user-review-stars">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar
            key={i}
            className={`star ${i < rating ? "active" : ""}`}
          />
        ))}
      </div>

      <p className="user-review-comment">{comment}</p>
    </div>
  )
}
