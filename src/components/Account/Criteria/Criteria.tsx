import { Fragment } from "react";

import Heading from "../../Heading/Heading";
import CardSetting from "../../Card/Setting/CardSetting";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Criteria.scss";

export default function Criteria() {
  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--account">
          <button className="header__back">
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
            <CardSetting title="Environnement" subtitle="Soleil ☀️, Ville 🌆" />
            <CardSetting
              title="Type de logement"
              subtitle="Hôtel 🏨, Camping ⛺️"
            />
            <CardSetting title="Transport" subtitle="-" />
            <CardSetting title="Activités" subtitle="Sorties le soir 🪩" />
            <CardSetting
              title="Importance nourriture"
              subtitle="Plutôt oui ☺️"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
}
