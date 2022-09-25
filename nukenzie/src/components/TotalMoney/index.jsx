import "./styles.css";

export const TotalMoney = (props) => {
  const total = props.list
    .map((e) => e.value)
    .reduce((e, acc) => {
      return e + acc;
    }, 0);

  return (
    <div className="valorTotal">
      <div className="valorP">
        <h3>Valor Total:</h3>
        <span>$ {total}</span>
      </div>
      <span> O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalMoney;
