import "./styles/UserRatingInputs.scss";
import { useState } from "react";
import { StarRating } from "../atoms/inputs/StarRating";
import { SubscribeInput } from "../atoms/inputs/SubscribeInput";
import { MainButton } from "../atoms/buttons/MainButton";

export function UserRatingInputs() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  async function onSubmit() {
    const data = {
      comment: text,
      rating: rating,
    };

    try {
      const res = await fetch("http://localhost:5000/insert/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: data.comment, rating: data.rating }),
      });

      const json = await res.json();

      if (res.ok) {
        alert("Review successfully submitted!");
        setText("");
        setRating(0);
      } else {
        alert(`Error submitting review: ${json.error}`);
      }
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error, please try again");
    }
  }

  return (
    <div className="user-rating">
      <SubscribeInput value={text} onChange={setText} />
      <div className="star-rating-container">
        <StarRating onRate={setRating} />
        <MainButton onClick={onSubmit}>Send</MainButton>
      </div>
    </div>
  );
}
