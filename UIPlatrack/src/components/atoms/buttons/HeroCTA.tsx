import React from "react";
import "./styles/HeroCTA.scss";

type HeroCTAVariant = "explore" | "search-now";

interface HeroCTAProps {
  variant?: HeroCTAVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function HeroCTA({ variant = "explore", onClick }: HeroCTAProps) {
  return (
    <button
      className={`hero-cta ${variant}`}
      onClick={onClick}
    >
      {variant === "explore" ? "Explore" : "Search Now"}
    </button>
  );
}
