import styled from "styled-components";

export const DivMain = styled.div`
  margin: 0px 0px 15px 15px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormLeft = styled.div`
  width: 95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 25%;
    margin: 0;
  }
`;
