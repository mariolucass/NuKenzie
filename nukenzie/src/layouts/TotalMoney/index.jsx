import * as Styled from "./styles";
import { UseHomeContext } from "../../contexts/HomeContext";
import React from "react";
import * as Component from "../../components";

export const TotalMoney = () => {
  const { listTransactions } = UseHomeContext();
  const [mes, setMes] = React.useState("");

  const saveExtract = () => {
    const newObject = {
      month: mes,
      list: listTransactions,
    };

    localStorage.setItem("@NuKenzieExtrato", JSON.stringify(newObject));
  };

  const total = listTransactions.reduce((acc, e) => +e.value + acc, 0);

  return listTransactions.length ? (
    <Styled.DivValorTotal>
      <div className="valorP">
        <h3>Valor Total:</h3>
        <span>R$ {total.toFixed(2)}</span>
      </div>
      <div>
        <Component.Input
          type="month"
          onChange={(event) => {
            setMes(event.target.value);
          }}
        >
          Mes de referencia
        </Component.Input>

        <Component.Button
          variant="terciary"
          type="button"
          onClick={() => {
            saveExtract();
          }}
        >
          Salvar Extrato
        </Component.Button>
      </div>
    </Styled.DivValorTotal>
  ) : (
    <div></div>
  );
};
