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
              onClick={() => null}
              title="Environnement"
              subtitle="Soleil ☀️, Ville 🌆"
            />
            <CardSetting
              onClick={() => null}
              title="Type de logement"
              subtitle="Hôtel 🏨, Camping ⛺️"
            />
            <CardSetting onClick={() => null} title="Transport" subtitle="-" />
            <CardSetting
              onClick={() => null}
              title="Activités"
              subtitle="Sorties le soir 🪩"
            />
            <CardSetting
              onClick={() => null}
              title="Importance nourriture"
              subtitle="Plutôt oui ☺️"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
}
