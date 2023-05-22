import React from "react";
import * as Component from "../../components";
import * as Styled from "./styles";
import { UseHomeContext } from "../../contexts";
import { toast } from "react-toastify";

export const Form = () => {
  const [description, setDescription] = React.useState("");
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("");
  const { setListTransactions } = UseHomeContext();

  const options = [{ name: "Entrada" }, { name: "Saida" }];

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valorFinal = value;

    if (valorFinal.includes(",")) {
      valorFinal = value.replace(",", ".");
    }

    type === "Entrada" ? (valorFinal *= 1) : (valorFinal *= -1);
    valorFinal = Number(valorFinal).toFixed(2);

    description !== "" && type !== "" && type !== "0"
      ? setListTransactions((listTransactions) => [
          ...listTransactions,
          { description: description, type: type, value: valorFinal },
        ])
      : toast.error("Tente colocar um valor válido");
  };

  return (
    <Styled.FormStyled onSubmit={handleSubmit}>
      <Component.Input
        onChange={(event) => setDescription(event.target.value)}
        placeholder={"Coloque aqui sua descrição."}
      >
        Descrição
      </Component.Input>

      <Component.Input
        onChange={(event) => setValue(event.target.value)}
        placeholder={"Coloque aqui seu valor."}
      >
        Valor
      </Component.Input>

      <Component.Select
        onChange={(event) => setType(event.target.value)}
        array={options}
        name={"tipo"}
      >
        Tipo
      </Component.Select>

      <Component.Button type="submit" variant="terciary" onClick={() => {}}>
        Inserir Valor
      </Component.Button>
    </Styled.FormStyled>
  );
};
