import * as Styled from "./styles";
import { UseHomeContext } from "../../contexts";

export const Card = ({ list, elem, id }) => {
  const { setListTransactions } = UseHomeContext();

  const removeCard = (index) => {
    setListTransactions(() => list.filter((e, i) => i !== index));
  };

  return (
    <Styled.CardLi transaction={elem}>
      <div className="rectangle"></div>
      <div className="divTotal">
        <div className="cardNames">
          <h2>{elem.description}</h2>
          <span>{elem.type}</span>
        </div>
        <div className="cardInteractions">
          <span>R$ {elem.value}</span>
        </div>
        <button onClick={() => removeCard(id)}></button>
      </div>
    </Styled.CardLi>
  );
};
