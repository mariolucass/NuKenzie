import { IInputProps } from "../../types/components";
import * as Styled from "./styles";

export const Input = ({
  name,
  children,
  placeholder,
  onChange,
  type,
}: IInputProps) => (
  <Styled.DivInput>
    <Styled.LabelStyled>{children}</Styled.LabelStyled>
    <Styled.InputStyled
      id={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  </Styled.DivInput>
);
