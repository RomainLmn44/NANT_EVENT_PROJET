import { Link } from "react-router-dom";
import "./Head.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import DropDown from "../Dropdown/Dropdown";

function Head() {
  return (
    <section className="head-section">
      <div className="head-logo">
        <Link to="/Home">
          <img
            className="head-logo-img"
            src="/logo_nantesEvent.png"
            alt="Nantes Event Logo"
          />
        </Link>
      </div>
      <section className="head-liner">
        <BurgerMenu />
        <div className="link-header">
          <li>
            <Link className="header-link" to="/Agenda">
              AGENDA
            </Link>
          </li>
          <li className="dropdown ">
            <DropDown />
          </li>
          <li>
            <Link className="header-link" to="/Aleatoire">
              ALEATOIRE
            </Link>
          </li>
          <li>
            <Link className="header-link" to="/MapPage">
              MAP
            </Link>
          </li>

          <li>
            <Link className="header-link" to="/NaoNight">
              NAONIGHT
            </Link>
          </li>
          <li>
            <Link className="header-link-heart" to="/Userpage">
              ❤
            </Link>
          </li>
        </div>
        <img src="/user.png" className="head-picture" alt="user" />
      </section>
    </section>
  );
}

export default Head;
