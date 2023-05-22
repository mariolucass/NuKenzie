import styled from "styled-components";

export const DivValorTotal = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 1px solid #e9ecef;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  margin: 0 auto;
  background-color: var(--grey-2);

  .valorP {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: var(--color-primary);
      font-weight: bold;
      font-size: 1.5rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
