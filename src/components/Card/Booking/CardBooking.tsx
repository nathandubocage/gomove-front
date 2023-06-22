import { Fragment } from "react";

import "./CardBooking.scss";

import airFrance from "../../../assets/images/airfrance.svg";
import airPlaneMode from "../../../assets/icons/airplanemode_active.svg";

export default function CardBooking() {
  return (
    <Fragment>
      <div className="card-booking">
        <div className="card-booking__company">
          <img src={airFrance} alt="Air France" />
          <span>Air France</span>
        </div>
        <div className="card-booking__details">
          <span className="card-booking__date">
            12 Juin 2023 / 21:30- 23:00
          </span>
          <span className="card-booking__hours"> 1 h 30 min</span>
          <div className="card-booking__way">
            <img src={airPlaneMode} alt="Avion" />
            <div className="card-booking__type">Avion</div>
            <span className="card-booking__airport">ORL - BER</span>
          </div>
        </div>
        <div className="card-booking__price">
          <span>35 €</span>
          <span>Meilleure option</span>
        </div>
      </div>
    </Fragment>
  );
}
