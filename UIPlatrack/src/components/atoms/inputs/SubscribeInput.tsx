import "./styles/SubscribeInput.scss"

type SubscribeInputProps = {
  value: string
  onChange: (value: string) => void
}

export function SubscribeInput({ value, onChange }: SubscribeInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Type your thoughts here..."
      className="subscribe-input"
    ></textarea>
  )
}