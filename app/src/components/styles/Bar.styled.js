import styled from "styled-components";

export const BarStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 15px;
  padding: 3px 2px;
  border: none;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.veryDarkBlue};

  .bar {
    -webkit-appearance: none;
    appearance: none;
    width: 70%;
    height: 15px;
    border: none;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
    outline: none;
    background-image: linear-gradient(
      90deg,
      hsl(6, 100%, 80%) 10%,
      hsl(335, 100%, 65%) 50%
    );
  }

  .bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    background-color: white;
    background-color: ${({ theme }) => theme.colors.paleBlue};
  }

  .bar::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 10px;
    border: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.paleBlue};
  }
`;
