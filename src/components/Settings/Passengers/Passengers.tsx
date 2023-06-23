import { useState } from "react";

import Heading from "../../Heading/Heading";
import Quantity from "../../Quantity/Quantity";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Passengers.scss";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Passengers = () => {
  const { userCriterias, setUserCriterias } = useUserStore();
  const [passengers, setPassengers] = useState(userCriterias?.passengers || 2);

  const handlePassengersChange = (value: number) => {
    setPassengers(value);
  };

  const navigate = useNavigate();

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

      <Heading content="Nombre de voyageurs" />

      <section className="passengers--single">
        <div className="number__column">
          <div className="number__column">
            <Quantity value={passengers!} onChange={handlePassengersChange} />
          </div>
        </div>

        <div className="answers__progress">
          <button
            className="button button--primary"
            onClick={() => {
              setUserCriterias({ ...userCriterias!, passengers: passengers });
              navigate("/");
            }}
          >
            Confirmer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Passengers;
