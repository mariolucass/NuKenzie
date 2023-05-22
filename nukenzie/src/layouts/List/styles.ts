import styled from "styled-components";
import NoCard from "../../assets/NoCard.svg";

export const ListStyled = styled.ul`
  width: 90%;
  height: 200px;
  overflow-y: auto;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    animation: showCards 0.3s ease-out;
  }

  @media (min-width: 768px) {
    height: 800px;
    width: 80%;

    .button1,
    .divButtons .button2 {
    }
  }

  @media (min-width: 1023px) {
    height: 800px;
    width: 100%;
  }

  @keyframes showCards {
    0% {
      transform: translateX(400px);
      opacity: 20%;
    }

    100% {
      transform: translateX(0);
      opacity: 100%;
    }
  }
`;

export const DivButtons = styled.div`
  padding: 2rem;
  display: flex;
  width: 85%;
  gap: 0.2rem;
  justify-content: center;
  align-items: center;
  position: sticky;
  inset: 0%;
  margin: 0 auto;
  border-radius: 0 0 1rem 1rem;
  background-color: #ffff;
  box-shadow: var(--color-primary) 0px 0px 0px 3px;

  @media (max-width: 768px) {
    width: 120px;
    height: 48px;
    font-size: 16px;
  }
`;

export const DivNoCard = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;

  div {
    display: flex;
    height: 400px;
    width: 100%;
    background-image: url(${NoCard});
    background-repeat: no-repeat;
  }
`;
