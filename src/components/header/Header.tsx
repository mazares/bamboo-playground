import "./Header.css";
import ButtonTheme from "../button-theme/ButtonTheme";
import Nav from "../nav/Nav";

export default function Header() {
  return (
    <header className="Header">
      <ButtonTheme />
      <h1>header</h1>
      <Nav />
    </header>
  );
}
