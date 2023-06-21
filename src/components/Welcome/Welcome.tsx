import "./Welcome.scss";

import backgroundImage from "../../assets/images/background_welcome.png";
import logoWelcome from "../../assets/images/logo_welcome.svg";

import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <section
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="welcome"
    >
      <div className="welcome__heading">
        <img src={logoWelcome} alt="Gomove" className="welcome__logo" />
        <h1 className="welcome__heading-bold">
          <span>+1000</span>
          <span>Destinations</span>
        </h1>
        <h2 className="welcome__heading-light">à travers le monde</h2>
      </div>

      <div className="welcome__actions">
        <Button
          onClick={() => navigate("../register")}
          content="Créer votre compte"
        />
        <button onClick={() => navigate("../login")} className="welcome__login">
          Se connecter
        </button>
      </div>
    </section>
  );
}
