import "./Welcome.scss";

import backgroundImage from "../../assets/images/background_welcome.png";
import logoWelcome from "../../assets/images/logo_welcome.svg";
import Button from "../Button/Button";

export default function Welcome() {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="welcome"
    >
      <div className="welcome__heading">
        <img src={logoWelcome} alt="Gomove" className="welcome__logo" />
        <h1 className="welcome__heading-bold">
          +1000 <br /> Destinations
        </h1>
        <h2 className="welcome__heading-light">à travers le monde</h2>
      </div>

      <div className="welcome__actions">
        <Button content="Créer votre compte" />
        <button>Se connecter</button>
      </div>
    </section>
  );
}
