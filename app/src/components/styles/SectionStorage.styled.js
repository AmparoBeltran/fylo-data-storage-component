import styled from "styled-components";

export const SectionStorageStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2em 2em 3em 2em;
  gap: 1.5em;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  position: relative;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 500px;
  }
  span {
    color: ${({ theme }) => theme.colors.paleBlue};
    .bold {
      font-weight: 700;
    }
  }

  .bar-info {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
  }
  .storage-left {
    display: flex;
    align-self: center;
    padding: 1em;
    border: none;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.paleBlue};
    position: absolute;
    bottom: -30px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      top: -36px;
      align-self: flex-end;
      bottom: unset;
      padding: 0.2em 1em;
      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        bottom: -5px;
        right: -10px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 20px solid ${({ theme }) => theme.colors.paleBlue};
        transform: rotate(-90deg);
      }
    }
    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5em;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.grayishBlue};
      small {
        font-weight: 700;
        font-size: 0.8em;
      }
      h1 {
        color: ${({ theme }) => theme.colors.veryDarkBlue};

        @media (min-width: ${({ theme }) => theme.desktop}) {
          font-size: 2.4em;
        }
      }
    }
  }
`;
