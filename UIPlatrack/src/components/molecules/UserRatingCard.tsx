import "./styles/UserRatingCard.scss"
import { UserRatingContent } from "../atoms/contents/UserRatingContent"
import { UserRatingInputs } from "./UserRatingInputs"

export function UserRatingCard(){
    return(
        <div className="user-rating-card">
            <UserRatingContent />
            <UserRatingInputs />
        </div>
    )
}