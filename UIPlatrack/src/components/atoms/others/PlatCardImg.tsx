import "./styles/PlatCardImg.scss";

type PlatCardVariant = "default" | "youtube" | "wikipedia";

interface PlatCardImgProps {
    variant?: PlatCardVariant;
    img: string;
    altText: string;
}

export const PlatCardImg: React.FC<PlatCardImgProps> = ({
    variant = "default",
    img,
    altText,
}) => {
    const variantClass =
        variant !== "default" ? `plat-card-img-${variant}` : "";

    return (
        <div className={`plat-card-img ${variantClass}`.trim()}>
            <img src={img} alt={altText} loading="lazy" />
        </div>
    );
};