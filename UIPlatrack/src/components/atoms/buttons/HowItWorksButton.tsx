import "./styles/HowItWorksButton.scss";
import { useState, useEffect } from "react";

type HowItWorksButtonProps = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active?: boolean;
  icon: string;
  altText: string;
};

export function HowItWorksButton({
  children,
  onClick,
  active = false,
  icon,
  altText,
}: HowItWorksButtonProps) {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <button
      className={`h-i-w-btn ${active ? "h-i-w-btn-active" : ""}`}
      onClick={onClick}
    >
      {isDesktop && children}
      {!isDesktop && <img src={icon} alt={altText} />}
    </button>
  );
}
