import styled from "styled-components";

export const MainContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;
