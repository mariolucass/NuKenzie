import { useState } from "react";
import Card from "../Cards";
import "./styles.css";

export const List = (props) => {
  const [listagem, setListagem] = useState(props.list);

  const setListAll = () => {
    setListagem(props.list.map((e) => e));
  };

  const setListEntrada = () => {
    setListagem(props.list.map((e) => e).filter((e) => e.type !== "Saída"));
  };

  const setListSaida = () => {
    setListagem(props.list.map((e) => e).filter((e) => e.type !== "Entrada"));
  };

  return (
    <ul className="">
      <div className="divButtons">
        <h3>Resumo Financeiro</h3>
        <button className="button1" onClick={setListAll}>
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
        listagem.map((e, i) => <Card transaction={e} key={i} />)
      ) : (
        <div className="noCard"></div>
      )}
    </ul>
  );
};

export default List;
