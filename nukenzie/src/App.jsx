import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [isInicio, setInicio] = useState(true);

  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "Entrada", value: 2500 },
    // { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  const setPage = () => {
    setInicio(false);
  };

  return (
    <div>
      {isInicio ? (
        <div className="divInicio">
          <div className="textInicio">
            <h2>
              <span className="spanText">Nu</span> Kenzie
            </h2>
            <h1>Centralize o controle das suas finanças</h1>
            <span>de forma rápida e segura</span>
            <button className="button1" onClick={setPage}>
              Iniciar
            </button>
          </div>
          <div className="illustration"></div>
        </div>
      ) : (
        <div className="container">
          <Header inicio={setInicio}></Header>
          <div className="mainContainer">
            <div className="leftForm">
              <Form setListTransactions={setListTransactions}></Form>
              <TotalMoney list={listTransactions}></TotalMoney>
            </div>
            <div>
              <List
                list={listTransactions}
                setListTransactions={setListTransactions}
              ></List>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
