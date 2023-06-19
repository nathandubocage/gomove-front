import { Fragment } from "react";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import "./Introduction.scss";

export default function Introduction() {
  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--single">
          <button className="header__back">
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>
        </header>
      </div>
    </Fragment>
  );
}
