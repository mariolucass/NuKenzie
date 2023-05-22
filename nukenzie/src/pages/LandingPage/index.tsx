import * as Component from "../../components";
import * as Styled from "./styles";
import { UseHomeContext } from "../../contexts/HomeContext";
import { Container } from "../../styles/globalStyles";

export const LandingPage = () => {
  const { setStart } = UseHomeContext();
  return (
    <Container>
      <Styled.DivStart>
        <Styled.DivText>
          <h2>
            <Styled.SpanText>Nu</Styled.SpanText> Kenzie
          </h2>

          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>

          <Component.Button onClick={() => setStart(false)}>
            Iniciar
          </Component.Button>
        </Styled.DivText>

        <Styled.DivIllustration />
      </Styled.DivStart>
    </Container>
  );
};
