import "./styles/FAQ.scss";
import { useState } from "react";
import { FAQContent } from "../atoms/contents/FAQContent";
import { FAQQuestionContent } from "../atoms/contents/FAQQuestionContent";

type FAQItem = {
  heading: string;
  paragraph: string;
};

const faqItems: FAQItem[] = [
  {
    heading: "What platforms can I search from?",
    paragraph:
      "You can search content across multiple platforms including TikTok, YouTube, Spotify, and Wikipedia. This allows you to find videos, music tracks, and articles all in one place without switching between apps or websites.",
  },
  {
    heading: "Is this free to use?",
    paragraph:
      "Yes, the platform is completely free to use. You can perform searches, explore results, and access content from all supported platforms without any subscription or payment required.",
  },
  {
    heading: "Do I need to create an account?",
    paragraph:
      "No account is required to start using the platform. You can search and browse content immediately. Creating an account is optional and can provide additional features like saving favorites or customizing your experience.",
  },
  {
    heading: "Can I use this on mobile?",
    paragraph:
      "Absolutely! The platform is fully mobile-friendly, so you can search and explore content from your smartphone or tablet with a smooth and responsive interface.",
  },
  {
    heading: "Do you store my searches?",
    paragraph:
      "We prioritize your privacy. Searches may be stored temporarily to improve performance, but we do not collect or use your personal data for any other purposes.",
  },
  {
    heading: "Can I suggest a feature?",
    paragraph:
      "Yes! We welcome user feedback and suggestions. If you have an idea for a new feature or improvement, you can submit it through our feedback form and help us make the platform even better.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq">
      <FAQContent />

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <FAQQuestionContent
              heading={item.heading}
              paragraph={item.paragraph}
              active={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
            {index < faqItems.length - 1 && <div className="line"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
