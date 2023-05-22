import styled from "styled-components";
import illustration from "../../assets/illustration.svg";

export const DivStart = styled.div`
  color: var(--grey-1);
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivText = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  animation: showInicio ease-in 1s;

  h2 {
    font-size: 38px;
    line-height: 48px;
  }
`;

export const DivIllustration = styled.div`
  width: 50%;
  height: 600px;
  background-image: url(${illustration});
  background-repeat: no-repeat;
  animation: showInicio ease-in 1s;
`;

export const SpanText = styled.span`
  color: var(--color-primary);
`;
