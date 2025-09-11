import "./styles/SearchPlatformCard.scss"
import { useNavigate } from "react-router-dom";

type SearchPlatformCardProps = {
  icon: string;   
  altText: string;
  name: string;
  path: string;
};

export function SearchPlatformCard({ icon, altText, name, path }: SearchPlatformCardProps) {
  const navigate = useNavigate()

  function navigatePath() {
    navigate(path)
  }
  
  return (
    <div className="search-platform-card" onClick={navigatePath}>
      <img src={icon} alt={altText} />
      <p>{name}</p>
    </div>
  );
}
