import "./styles/PlatContainer.scss";
import { PlatCard } from "../molecules/PlatCard";

type YouTubeItem = {
  videoId: string;
  title: string;
  channel: string;
  thumbnail: string;
  url: string;
};

type PlatContainerProps = {
  variant: "youtube" | "tiktok" | "wikipedia" | "spotify";
  rawData: any[]; // API response
};

export function PlatContainer({ variant, rawData }: PlatContainerProps) {
  const data = transformData(rawData, variant);

  return (
    <div className="plat-container">
      {data.map((item, idx) => (
        <PlatCard
          key={idx}
          variant={variant}
          img={item.img}
          altText={item.altText}
          heading={item.heading}
          paragraph={item.paragraph}
          onClick={item.URL}
        />
      ))}
    </div>
  );
}

// one function for every platform
function transformData(data: any[], variant: string) {
  switch (variant) {
    case "youtube":
      return data.map((item: YouTubeItem) => ({
        img: item.thumbnail,
        altText: item.title,
        heading: item.title,
        paragraph: item.channel,
        URL: () => window.open(item.url, "_blank"),
      }));

    // სხვებისთვის შეგიძლია დაამატო
    // case "spotify": ...
    // case "wikipedia": ...
    // case "tiktok": ...

    default:
      return data;
  }
}
