import * as Layout from "..";
import * as Component from "../../components";
import * as Styled from "./styles";
import { UseFilteredContext, UseHomeContext } from "../../contexts";

export const List = () => {
  const { listTransactions } = UseHomeContext();
  const { setText, listFiltered, setListFiltered } = UseFilteredContext();

  const createCards = (list) => {
    return list.map((e, i) => (
      <Layout.Card elem={e} key={i} id={i} list={list} />
    ));
  };

  const setListAll = () => setListFiltered([]);

  const setListEntries = () => {
    const listEntries = listTransactions.filter((e) => e.type !== "Saída");
    setListFiltered(listEntries);
    setText("nenhuma entrada");
  };

  const setListExits = () => {
    const listExits = listTransactions.filter((e) => e.type !== "Entrada");
    setListFiltered(listExits);
    setText("nenhuma saída");
  };

  return (
    <div>
      <Styled.DivButtons>
        <h3>Resumo Financeiro</h3>
        <Component.Button variant="secondary" onClick={setListAll}>
          Todos
        </Component.Button>
        <Component.Button variant="secondary" onClick={setListEntries}>
          Entradas
        </Component.Button>
        <Component.Button variant="secondary" onClick={setListExits}>
          Despesas
        </Component.Button>
      </Styled.DivButtons>

      <Styled.ListStyled>
        {listFiltered.length ? (
          createCards(listFiltered)
        ) : listTransactions.length ? (
          createCards(listTransactions)
        ) : (
          <Styled.DivNoCard>
            <h3>
              Este filtro não achou resultados. Tente adicionar um novo valor.
            </h3>
            <div></div>
          </Styled.DivNoCard>
        )}
      </Styled.ListStyled>
    </div>
  );
};
