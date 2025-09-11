import "./styles/PlatformsInput.scss"

type PlatformsInputProps = {
  value: string
  onChange: (value: string) => void
  onClick: () => void
  icon: string
  altText: string
  color: string
}

export function PlatformsInput({ value, onChange, onClick, icon, altText, color }: PlatformsInputProps){

    return(
        <div className="platforms-input" style={{ border: `1px solid ${color}` }}>
            <input 
                type="text" 
                value={value}
                placeholder="Start Searching..."
                onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={onClick} type="submit">
                <img src={icon} alt={altText} />
            </button>
        </div>
    )
}