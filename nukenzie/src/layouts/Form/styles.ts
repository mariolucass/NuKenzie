import styled from "styled-components";

export const FormStyled = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 1rem;
  width: 80%;
  margin: 0 auto;

  div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .divButtons {
      position: relative;
    }
  }

  .inputPlace {
    position: relative;
    right: 20%;
    top: 10px;
    @media (min-width: 768px) {
      right: 42.5px;
    }
  }
`;
