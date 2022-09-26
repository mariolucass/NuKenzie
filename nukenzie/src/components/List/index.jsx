import { useState } from "react";
import Card from "../Cards";
import "./styles.css";

export const List = (props) => {
  const [listagem, setListagem] = useState();
  const [isFiltered, setFilter] = useState(false);
  const [text, setText] = useState("nenhum lançamento");

  const lista = props.list.map((e, i) => (
    <Card transaction={e} key={i} setListagem={setListagem} />
  ));

  const setListAll = () => {
    setText("nenhum lançamento");
    setFilter(true);

    setListagem(
      props.list.map((e, i) => (
        <Card transaction={e} key={i} setListagem={setListagem} />
      ))
    );
  };

  const setListEntrada = () => {
    setText("nenhuma entrada");
    setFilter(true);

    setListagem(
      props.list
        .filter((e) => e.type !== "Saída")
        .map((e, i) => (
          <Card transaction={e} key={i} setListagem={setListagem} />
        ))
    );
  };

  const setListSaida = () => {
    setText("nenhuma saída");
    setFilter(true);

    setListagem(
      props.list
        .filter((e) => e.type !== "Entrada")
        .map((e, i) => (
          <Card transaction={e} key={i} setListagem={setListagem} />
        ))
    );
  };

  return (
    <ul className="">
      <div className="divButtons">
        <h3>Resumo Financeiro</h3>
        <button className="button2" onClick={setListAll}>
          Todos
        </button>
        <button className="button2" onClick={setListEntrada}>
          Entradas
        </button>
        <button className="button2" onClick={setListSaida}>
          Despesas
        </button>
      </div>
      {props.list.length ? (
        isFiltered ? (
          listagem
        ) : (
          lista
        )
      ) : (
        <div className="divNoCard">
          <h3>Você ainda não possui {text}.</h3>
          <div className="noCard"></div>
        </div>
      )}
    </ul>
  );
};

export default List;
