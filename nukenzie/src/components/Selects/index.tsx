import { ISelectProps } from "../../types/components";
import * as Styled from "./styles";

export const Select = ({ name, children, onChange, array }: ISelectProps) => {
  const selectOptions = array.map((e, i) => (
    <option key={i} value={e.name}>
      {e.name}
    </option>
  ));

  return (
    <Styled.DivSelect>
      <Styled.LabelStyled>{children}</Styled.LabelStyled>
      <Styled.SelectStyled id={name} onChange={onChange}>
        <option value={""}>Selecione aqui o seu {name}.</option>
        {selectOptions}
      </Styled.SelectStyled>
    </Styled.DivSelect>
  );
};
