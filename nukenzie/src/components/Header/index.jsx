import "./styles.css";

export const Header = () => {
  const HomePage = () => {};

  return (
    <header>
      <h1>
        <span className="spanHeader">Nu</span> Kenzie
      </h1>
      <button className="button2" onClick={HomePage}>
        Inicio
      </button>
    </header>
  );
};

export default Header;
