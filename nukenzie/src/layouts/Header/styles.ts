import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 1rem;
  width: 90vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  border-radius: 1rem;
  margin: 0 auto;

  button {
    width: 5rem;
    height: 2.5rem;
  }

  .spanHeader {
    color: var(--color-primary);
  }
`;
