import styled, { css } from "styled-components";

interface IProps {
  variant?: "primary" | "secondary" | "terciary";
}

const typeButton = {
  primary: css`
    width: 42%;
    height: 48px;
    font-size: 24px;
    background-color: var(--color-primary);
    color: var(--white-color);
    border: none;

    :hover {
      transition: 0.5s;

      color: var(--white-color);

      background-color: var(--color-primary60);
    }
  `,

  secondary: css`
    width: 100px;
    height: 40px;
    font-size: 16px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-2);
    color: var(--black-color);
    border: 2px solid transparent;

    :hover {
      transition: 0.5s;
      border: 2px solid var(--black-color);
      background-color: var(--grey-2-60);
    }
  `,

  terciary: css`
    width: 100%;
    height: 48px;
    font-size: 16px;

    background-color: var(--color-primary);
    color: var(--white-color);
    border: 2px solid transparent;

    :hover {
      transition: 0.5s;

      background-color: var(--white-color);
      border: 2px solid var(--color-primary);
      color: var(--color-primary);
    }
  `,
};

export const ButtonStyled = styled.button<IProps>`
  cursor: pointer;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  ${({ variant }) => typeButton[variant || "primary"]};
`;
