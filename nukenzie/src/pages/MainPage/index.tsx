import * as Styled from "./styles";
import * as Layout from "../../layouts";
import { Container } from "../../styles/globalStyles";

export const MainPage = () => (
  <Container>
    <Layout.Header />
    <Styled.DivMain>
      <Styled.FormLeft>
        <Layout.Form />
        <Layout.TotalMoney />
      </Styled.FormLeft>
      <Layout.List />
    </Styled.DivMain>
  </Container>
);
