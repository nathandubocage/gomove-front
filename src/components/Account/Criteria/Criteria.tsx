import { Fragment } from "react";

import Heading from "../../Heading/Heading";
import CardSetting from "../../Card/Setting/CardSetting";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Criteria.scss";
import { useNavigate } from "react-router-dom";

export default function Criteria() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--account">
          <button
            onClick={() => window.history.back()}
            className="header__back"
          >
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>

          <div className="header__delete">
            <button>Effacer tous les critères</button>
          </div>
        </header>

        <Heading content="Mes critères" />

        <section className="criteria">
          <div className="criteria__cards">
            <CardSetting
              onClick={() => navigate("../weather")}
              title="Environnement"
              subtitle="Soleil ☀️, Ville 🌆"
            />
            <CardSetting
              onClick={() => navigate("../room")}
              title="Type de logement"
              subtitle="Hôtel 🏨, Camping ⛺️"
            />
            <CardSetting
              onClick={() => navigate("../travel")}
              title="Transport"
              subtitle="-"
            />
            <CardSetting
              onClick={() => navigate("../hobbies")}
              title="Activités"
              subtitle="Sorties le soir 🪩"
            />
            <CardSetting
              onClick={() => navigate("../food")}
              title="Importance nourriture"
              subtitle="Plutôt oui ☺️"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
}
