import Bar from "./Bar";
import { SectionStorageStyled } from "./styles/SectionStorage.styled";

export default function SectionStorage() {
    return (
        <SectionStorageStyled>
            <span>`You’ve` used <span className="bold">815 GB</span> of your storage</span>

            <Bar />
            <span className="bar-info">0GB<span>1000GB</span></span>
            <div className="storage-left">
                <span><h1>185</h1><small>gb left</small></span>
            </div>
        </SectionStorageStyled>
    )
}