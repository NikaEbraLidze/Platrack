import "./styles/HowItWorksGrid.scss";
import { useState } from "react";
import { HowItWorksButton } from "../atoms/buttons/HowItWorksButton";
import { HowItWorksCard } from "../molecules/HowItWorksCard";
import { choosePlatform, startSearch, getResult, Search, Done, Choose } from "../../assets/assets";

type ContentItem = {
  id: number;
  children: string;
  img: string;
  icon: string;
  altText: string;
};

const content: ContentItem[] = [
  {
    id: 0,
    children: "Choose platform",
    img: choosePlatform,
    icon: Choose,
    altText: "choose platform for start searching",
  },
  {
    id: 1,
    children: "Start search",
    img: startSearch,
    icon: Search,
    altText: "now you can search what you want",
  },
  {
    id: 2,
    children: "Get result",
    img: getResult,
    icon: Done,
    altText: "see result what you want",
  },
];

export function HowItWorksGrid() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-i-w-grid">
      {content.map((item) => (
        <HowItWorksButton
          key={item.id}
          active={activeIndex === item.id}
          icon={item.icon}
          altText={item.altText}
          onClick={() => handleClick(item.id)}
        >
          {item.children}
        </HowItWorksButton>
      ))}

      <HowItWorksCard img={content[activeIndex].img} altText={content[activeIndex].altText} />
    </div>
  );
}
