import "./Nav.css";
import NavList from "./NavList";
import Button from "../UiElements/PurpleButton";
import Logo from "../UiElements/Logo";

function Nav(props) {
  return (
    <header>
      <nav className="main-nav">
        <Logo />
        <div className="nav-links-container">
          <Button text="Get a ride" />
          <span className="mobile-menu">
            <i className="fa-solid fa-bars"></i>
          </span>
          <NavList />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
