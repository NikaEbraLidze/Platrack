import "./styles/MainButton.scss"

type MainButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    children: String;
}

export function MainButton({ onClick, children }: MainButtonProps){
    return(<>
        <button className="main-button" onClick={onClick} >{ children }</button>
    </>)
}