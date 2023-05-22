import { IButtonProps } from "../../types/components";
import * as Styled from "./styles";

export const Button = ({ type, variant, children, onClick }: IButtonProps) => (
  <Styled.ButtonStyled
    type={type ? type : "button"}
    variant={variant}
    onClick={onClick}
  >
    {children}
  </Styled.ButtonStyled>
);
