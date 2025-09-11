import "./styles/FAQQuestionContent.scss";
import { Arrow } from "../../../assets/assets";

type FAQQuestionContentProps = {
  heading: string;
  active?: boolean;
  paragraph: string;
  onToggle?: () => void;
};

export function FAQQuestionContent({
  heading,
  active = false,
  paragraph,
  onToggle,
}: FAQQuestionContentProps) {
  return (
    <div className="faq-question-content">
      <button
        className="question"
        onClick={onToggle}
        aria-expanded={active}
        aria-controls={`faq-panel-${heading}`}
      >
        <h3>{heading}</h3>
        <img
          src={Arrow}
          alt=""
          className={`arrow ${active ? "rotated" : ""}`}
        />
      </button>

      <p
        id={`faq-panel-${heading}`}
        role="region"
        className={`answer-paragraph ${active ? "active" : ""}`}
      >
        {paragraph}
      </p>
    </div>
  );
}