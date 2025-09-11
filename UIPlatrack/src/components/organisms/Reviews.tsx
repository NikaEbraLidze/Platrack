import "./styles/Reviews.scss"
import { UserRatingCard } from "../molecules/UserRatingCard"
import { UserReviews } from "../molecules/UserReviews"

export function Reviews(){
    return(
        <div className="reviews">
            <UserRatingCard />
            <UserReviews />
        </div>
    )
}