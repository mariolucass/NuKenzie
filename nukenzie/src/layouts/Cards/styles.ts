import styled from "styled-components";
import { ITransactions } from "../../types/contexts";
import Trash from "../../assets/trash.svg";

interface IProps {
  transaction: ITransactions;
}

export const CardLi = styled.li<IProps>`
  display: flex;
  align-items: flex-start;
  min-height: 125px;
  border: 1px solid #e9ecef;
  padding: 1rem;
  padding-left: 0;
  border-radius: 8px 16px 16px 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: var(--grey-1);

  div {
    height: 100%;
  }

  button {
    width: 32px;
    height: 32px;
    background-image: url(${Trash});
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 12px;
    border: none;
    background-color: var(--grey-2);
    gap: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    transition: 0.5s;
    cursor: pointer;

    :hover {
      transition: 0.5s;
      border: 1px solid var(--black-color);
      background-color: var(--grey-2-60);
    }
  }

  .divTotal {
    display: flex;
    height: 100%;
    gap: 10rem;
  }

  .rectangle {
    width: 10px;
    height: 100%;
    margin-right: 20px;
    border-radius: 4px 0px 0px 4px;
    background-color: ${({ transaction }) =>
      transaction.type === "Entrada"
        ? `var(--color-secondary)`
        : `var(--color-terciary)`};
  }

  .cardInteractions span {
    color: ${({ transaction }) =>
      transaction.type === "Entrada"
        ? `var(--color-secondary)`
        : `var(--color-terciary)`};
  }
`;
