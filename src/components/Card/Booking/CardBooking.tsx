import { FC, Fragment } from "react";

import "./CardBooking.scss";
import airPlaneMode from "../../../assets/icons/airplanemode_active.svg";
import { TFlights } from "../../../types/travel.spec";
import getHoursFromMinutes from "../../../utils/get-hours-from-minutes";

interface CardBookingProps {
  id: number;
  onClick: (id: number) => void;
  flight?: TFlights;
  isSelected?: boolean;
}

const CardBooking: FC<CardBookingProps> = ({ id, onClick, flight, isSelected }) => {
  return (
    <Fragment>
      <div
        className={`card-booking ${isSelected ? "card-booking--selected" : ""}`}
        onClick={() => onClick(id)}
      >
        <div className="card-booking__company">
          <img src={`https://www.gstatic.com/flights/airline_logos/70px/dark/${flight?.compagny.id}.png`} alt="Air France" />
          <span>{flight?.compagny.name}</span>
        </div>
        <div className="card-booking__details">
          <span className="card-booking__date">
            {flight?.date}
          </span>
          <span className="card-booking__hours">{getHoursFromMinutes(flight?.duration!)}</span>
          <div className="card-booking__way">
            <img src={airPlaneMode} alt="Avion" />
            <div className="card-booking__type">Avion</div>
            <span className="card-booking__airport">{flight?.from.label} - {flight?.to.label}</span>
          </div>
        </div>
        <div className="card-booking__price">
          <span>{flight?.price} €</span>
          <span>Meilleure option</span>
        </div>
      </div>
    </Fragment>
  );
};

export default CardBooking;
