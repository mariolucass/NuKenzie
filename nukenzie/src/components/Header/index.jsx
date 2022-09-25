import "./styles.css";

export const Header = (props) => {
  const setHome = () => {
    props.inicio(true);
  };

  return (
    <header>
      <h1>
        <span className="spanHeader">Nu</span> Kenzie
      </h1>
      <button className="button2" onClick={setHome}>
        Inicio
      </button>
    </header>
  );
};

export default Header;
