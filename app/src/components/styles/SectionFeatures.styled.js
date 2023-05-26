import styled from "styled-components";

export const SectionFeaturesStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 5em 2em 2em;
  gap: 1.5em;
  align-items: flex-start;
  border: none;
  border-radius: 10px 50px 10px 10px;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 270px;
    height: 150px;
  }

  background-color: ${({ theme }) => theme.colors.darkBlue};
  img {
    width: 7em;
  }
  .icons {
    display: flex;
    align-items: center;
    gap: 1em;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      border: none;
      padding: 0.5em;
      background-color: ${({ theme }) => theme.colors.veryDarkBlue};
      img {
        width: 1em;
      }
    }
  }
`;
