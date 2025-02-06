import GraphicSeperator from "../../components/GraphicSeparator/GraphicSeparator";
import "./Inscription.css";

function Inscription() {
  return (
    <>
      <section className="page-inscription">
        <h1>Inscription</h1>
        <GraphicSeperator />
        <h2>Envie de faire partie de la communauté ? </h2>
        <form>
          <section className="form-group">
            <label htmlFor="user-name">Nom</label>
            <input type="text" id="user-name" />
          </section>
          <section className="form-group">
            <label htmlFor="name">Prénom</label>
            <input type="text" id="name" />
          </section>
          <section className="form-group">
            <label htmlFor="user-mail">E-mail</label>
            <input type="email" id="user-mail" />
          </section>
          <section className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" />
          </section>
          <section className="form-group">
            <label htmlFor="password-confirmation">
              Confirmez le mot de passe
            </label>

            <input type="password" id="password-confirmation" />
          </section>
          <label htmlFor="email">Votre image de profil</label>
          <input type="file" name="file" />
          <button type="submit">S'INSCRIRE</button>
        </form>
      </section>
    </>
  );
}

export default Inscription;
