import SectionFeatures from "./SectionFeatures";
import SectionStorage from "./SectionStorage";
import { MainContainerStyled } from "./styles/MainContainer.styled";

export default function MainContainer() {
    return (
        <MainContainerStyled>
            <SectionFeatures />
            <SectionStorage />
        </MainContainerStyled>
    )
}