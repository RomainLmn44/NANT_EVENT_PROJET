import "./LogoHomes.css";
import { Link } from "react-router-dom";

function LogoHome() {
  return (
    <>
      <div className="accueil-logo">
        <button type="button" className="button-logo">
          <Link to="/Home">
            <img
              className="logo-ne"
              src="public\logo_NE.png"
              alt="Logo Nant'event"
            />
          </Link>
        </button>
      </div>
    </>
  );
}

export default LogoHome;
