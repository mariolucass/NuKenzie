import "./styles.css";

export const TotalMoney = (props) => {
  console.log(props);
  const total = props.list.reduce((e, acc) => e.value);
  console.log(props.list.map((e) => e.value));
  console.log(total);

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
