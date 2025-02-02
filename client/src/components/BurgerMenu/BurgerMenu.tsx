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
          <Link to="/" onClick={handleLinkClick}>
            Connexion
          </Link>

          <Link to="/" onClick={handleLinkClick}>
            Inscription
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Paramètres
          </Link>
          <Link to="/" onClick={handleLinkClick}>
            Déconnexion
          </Link>
        </ul>
      )}
    </section>
  );
}

export default BurgerMenu;
