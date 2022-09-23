import { useState } from "react";
import "./styles.css";

export const Form = (props) => {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("");
  // const [itens, setItens] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(valor, descricao, tipo);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Descrição</label>

      <input
        type="text"
        placeholder=""
        onChange={(event) => setDescricao(event.target.value)}
      />

      <div className="divA">
        <div className="divIL">
          <label htmlFor="">Valor</label>
          <label htmlFor="">Tipo de valor</label>
        </div>
        <div className="divIL">
          {" "}
          <input
            type="text"
            placeholder=""
            onChange={(event) => setValor(event.target.value)}
          />
          <select
            name=""
            id=""
            onChange={(event) => setTipo(event.target.value)}
          >
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
