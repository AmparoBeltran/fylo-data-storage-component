import { BarStyled } from "./styles/Bar.styled";

export default function Bar() {

    return (
        <BarStyled >
            <input type="range" max="4" className="bar" />
        </BarStyled>
    )
}