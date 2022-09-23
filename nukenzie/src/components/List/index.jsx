import Card from "../Cards";
import "./styles.css";

export const List = (props) => {
  // listTransactions.list.map((e, i) => console.log(e) ;
  return (
    <ul className="">
      <div>
        <h3>Resumo Financeiro</h3>
        <div>
          <button className="button1">Todos</button>
          <button className="button1">Entradas</button>
          <button className="button1">Despesas</button>
        </div>
      </div>
      {props.list.map((e, i) => (
        <Card transaction={e} key={i} />
      ))}
    </ul>
  );
};

export default List;
