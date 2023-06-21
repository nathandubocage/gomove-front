import { ChangeEvent, useState } from "react";

import Heading from "../../Heading/Heading";
import Input from "../../Input/Input";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./TravelDate.scss";
import { useUserStore } from "../../../store/useUserStore";

const TravelDate = () => {
  const { userCriterias, setUserCriterias } = useUserStore();
  const [dateTravel, setDateTravel] = useState(
    userCriterias?.departureDate || ""
  );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateTravel(event.target.value);
  };

  return (
    <div className="wrapper">
      <header className="header header--single">
        <button
          className="header__back"
          onClick={() => {
            window.history.back();
          }}
        >
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>
      </header>

      <Heading content="Pendant combien de jours souhaitez vous voyager ?" />

      <section className="travel-date--single">
        <div className="travel-date__column">
          <label className="travel-date__label" htmlFor="date">
            Dates (optionnel)
          </label>

          <Input
            id="date"
            type="date"
            placeholder="Vos dates de voyage"
            onChange={handleInputChange}
            value={dateTravel}
          />
        </div>

        <div className="answers__progress">
          <button
            className="button button--primary"
            onClick={() =>
              setUserCriterias({ ...userCriterias!, departureDate: dateTravel })
            }
          >
            Confirmer
          </button>
        </div>
      </section>
    </div>
  );
};

export default TravelDate;
