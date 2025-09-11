import "./styles/PlatCard.scss";
import { PlatCardContent } from "../atoms/contents/PlatCardContent";
import { PlatCardImg } from "../atoms/others/PlatCardImg";

type PlatCardVariant = "tiktok" | "youtube" | "spotify" | "wikipedia";

interface PlatCardProps {
  variant: PlatCardVariant;
  img: string;
  altText: string;
  heading: string;
  paragraph: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function PlatCard({
  variant,
  img,
  altText,
  heading,
  paragraph,
  onClick,
}: PlatCardProps) {
  return (
    <div className={`plat-card plat-card-${variant}`} onClick={onClick}>
      <PlatCardImg
        variant={
          variant === "youtube" || variant === "wikipedia" ? variant : undefined
        }
        img={img}
        altText={altText}
      />
      <PlatCardContent
        variant={variant}
        heading={truncateText(heading, 7)}
        paragraph={paragraph}
      />
    </div>
  );
}

function truncateText(text: string, maxWords: number) {
  const words = text.split(" ");
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(" ") + "...";
}
