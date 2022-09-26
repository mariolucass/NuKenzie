import "./styles.css";

export const Card = (props) => {
  const removeCard = () => {
    props.setListagem(
      props.list
        .filter((e) => e.type !== "Entrada")
        .map((e, i) => (
          <Card transaction={e} key={i} setListagem={props.setListagem} />
        ))
    );
  };

  return (
    <li>
      {props.transaction.type === "Entrada" ? (
        <div className="rectangle1"></div>
      ) : (
        <div className="rectangle2"></div>
      )}

      <div className="divTotal">
        <div className="cardNames">
          <h2>{props.transaction.description}</h2>
          <span>{props.transaction.type}</span>
        </div>
        <div className="cardInteractions">
          <span>R$ {props.transaction.value},00</span>
          <button className="button2 trashButton" onClick={removeCard}></button>
        </div>
      </div>
    </li>
  );
};

export default Card;
