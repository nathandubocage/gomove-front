import { useLocation, useNavigate } from "react-router-dom";
import { TTravel } from "../../../types/travel.spec";
import arrowLeft from "../../../assets/icons/arrow_left.svg";
import getCountryFlagEmoji from "../../../utils/get-country-flag";

import "./BookingSelectReturn.scss";
import CardBooking from "../../Card/Booking/CardBooking";
import { useState } from "react";

export default function BookingSelectReturn() {
  const location = useLocation();
  const travel: TTravel = location.state.travel;

  const navigate = useNavigate();

  const [currentCardReturn, setCurrentCardReturn] = useState<number | null>(
    null
  );

  const handleClick = (id: number) => {
    setCurrentCardReturn(id);
  };

  const goToSummary = () => {
    if (currentCardReturn) {
      navigate(`../single/${travel?.id?.substring(3)}/summary`, {
        state: { travel, currentCardReturn },
      });
    }
  };

  return (
    <div className="wrapper-flex">
      <header
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          transparent 0%,
          rgba(255, 255, 255, 1) 100%
        ),url(${travel.destination.image})`,
        }}
        className="header header--sized flex flex-col-reverse single-header"
      >
        <button
          className="header__back header__back--single"
          onClick={() => window.history.back()}
        >
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>

        <h2 className="my-4 font-integral-cf font-bold text-4xl">
          {travel.destination.city}{" "}
          {getCountryFlagEmoji(travel.destination.country as string)}
        </h2>
      </header>

      <section className="booking-select">
        <div className="return wrapper">
          <h2 className="return__title">Aller choisit :</h2>

          <div className="return__cards">
            <CardBooking id={1} onClick={handleClick} />
          </div>

          <h2 className="outward__title mt-5">Choisissez votre retour</h2>

          <div className="outward__cards">
            <CardBooking
              id={1}
              onClick={handleClick}
              isSelected={currentCardReturn === 1}
            />
            <CardBooking
              id={2}
              onClick={handleClick}
              isSelected={currentCardReturn === 2}
            />
            <CardBooking
              id={3}
              onClick={handleClick}
              isSelected={currentCardReturn === 3}
            />
            <CardBooking
              id={4}
              onClick={handleClick}
              isSelected={currentCardReturn === 4}
            />
            <CardBooking
              id={5}
              onClick={handleClick}
              isSelected={currentCardReturn === 5}
            />
          </div>

          <button
            className="button button--primary button--full button--absolute"
            disabled={!currentCardReturn}
            onClick={goToSummary}
          >
            Voir le récapitulatif
          </button>
        </div>
      </section>
    </div>
  );
}
