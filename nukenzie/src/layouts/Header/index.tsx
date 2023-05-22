import * as Component from "../../components";
import * as Styled from "./styles";
import { UseHomeContext } from "../../contexts";

export const Header = () => {
  const { setStart } = UseHomeContext();

  return (
    <Styled.HeaderStyled>
      <h1>
        <span className="spanHeader">Nu</span> Kenzie
      </h1>
      <Component.Button variant="secondary" onClick={() => setStart(true)}>
        Inicio
      </Component.Button>
    </Styled.HeaderStyled>
  );
};

export default Header;
