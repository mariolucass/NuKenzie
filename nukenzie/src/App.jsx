import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <div className="container">
      <Header></Header>
      <div className="mainContainer">
        <div className="leftForm">
          <Form function={setListTransactions}></Form>
          <TotalMoney list={listTransactions}></TotalMoney>
        </div>
        <div>
          <List list={listTransactions}></List>
        </div>
      </div>
    </div>
  );
}

export default App;
