import { useState } from "react";
import "./BurgerMenu.css";
import { Squash } from "hamburger-react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <section className="burger-menu">
      <Squash size={30} toggled={open} toggle={setOpen} />
      {open && (
        <ul>
          <Link
            className="responsive"
            to="/Connexion"
            onClick={handleLinkClick}
          >
            AGENDA
          </Link>
          <Link
            className="responsive"
            to="/Connexion"
            onClick={handleLinkClick}
          >
            ALEATOIRE
          </Link>
          <Link
            className="responsive"
            to="/Connexion"
            onClick={handleLinkClick}
          >
            MAP
          </Link>
          <Link
            className="responsive"
            to="/Connexion"
            onClick={handleLinkClick}
          >
            NAONIGHT
          </Link>
          <Link
            className="responsive"
            to="/Connexion"
            onClick={handleLinkClick}
          >
            FAVORIS
          </Link>

          <Link to="/Connexion" onClick={handleLinkClick}>
            CONNEXION
          </Link>

          <Link to="/Inscription" onClick={handleLinkClick}>
            INSCRIPTION
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            PARAMETRES
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            DECONNEXION
          </Link>
        </ul>
      )}
    </section>
  );
}

export default BurgerMenu;
