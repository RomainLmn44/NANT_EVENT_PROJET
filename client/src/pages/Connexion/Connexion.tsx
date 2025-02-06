import GraphicSeperator from "../../components/GraphicSeparator/GraphicSeparator";
import "./Connexion.css";

function Connexion() {
  return (
    <>
      <section className="page-connexion">
        <h1>Connexion</h1>
        <GraphicSeperator />
        <h2>Ravie de vous revoir !</h2>
        <form>
          <section className="form-group">
            <label htmlFor="user-mail">E-mail</label>
            <input type="email" id="user-mail" />
          </section>
          <section className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" />
          </section>

          <button type="submit">SE CONNECTER</button>
        </form>
      </section>
    </>
  );
}

export default Connexion;
