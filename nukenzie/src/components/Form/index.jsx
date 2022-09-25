import { useState } from "react";
import "./styles.css";

export const Form = ({ setListTransactions }) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setListTransactions((listTransactions) => [
      ...listTransactions,
      { description: descricao, type: tipo, value: +valor },
    ]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Descrição</label>

      <input
        type="text"
        placeholder="Coloque a descrição aqui."
        onChange={(event) => setDescricao(event.target.value)}
      />

      <div className="divA">
        <div className="divIL">
          <label htmlFor="">Valor</label>
          <label htmlFor="">Tipo de valor</label>
        </div>
        <div className="divIL">
          <input
            type="text"
            placeholder="Coloque o Valor."
            onChange={(event) => setValor(event.target.value)}
          />
          <select
            name="Selecione"
            id=""
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
        <button type="submit" className="button1">
          Inserir Valor
        </button>
      </div>
    </form>
  );
};

export default Form;
