import { SectionFeaturesStyled } from "./styles/SectionFeatures.styled";

export default function SectionFeatures() {
    return (
        <SectionFeaturesStyled>
            <img src="/images/logo.svg" alt="logo" />

            <div className="icons">
                <div className="icon"><a href="#"><img src="/images/icon-document.svg" alt="icon-document" /></a></div>
                <div className="icon"><a href="#"><img src="/images/icon-folder.svg" alt="icon-folder" /></a></div>
                <div className="icon"><a href="#"><img src="/images/icon-upload.svg" alt="icon-upload" /></a></div>

            </div>
        </SectionFeaturesStyled>
    )
}