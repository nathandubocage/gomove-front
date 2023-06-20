import { Fragment } from "react";

import arrowLeft from "../../../assets/icons/arrow_left.svg";
import Heading from "../../Heading/Heading";

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

        <section className="criteria"></section>
      </div>
    </Fragment>
  );
}
