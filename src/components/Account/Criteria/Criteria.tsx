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
            <CardSetting title="Localisation" subtitle="Paris" />
            <CardSetting title="Dates" subtitle="12/06/2023 - 18/06/2023" />
            <CardSetting title="Voyageurs" subtitle="2" />
            <CardSetting title="Budget" subtitle="< 800 €" />
            <CardSetting title="Destination" subtitle="Europe" />
          </div>
        </section>
      </div>
    </Fragment>
  );
}
