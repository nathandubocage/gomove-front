import { useState } from "react";

import Heading from "../../Heading/Heading";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Travel.scss";

const Travel = () => {
  const [travelChoices, setTravelChoices] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleTravelChoice = (index: number) => {
    setTravelChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const buttons = [
    { emoji: "🚲", label: "Vélo" },
    { emoji: "🚗", label: "Voiture" },
    { emoji: "🚅", label: "Train" },
    { emoji: "🛩️", label: "Avion" },
  ];

  return (
    <div className="wrapper">
      <header className="header header--single">
        <button className="header__back" onClick={() => window.history.back()}>
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>
      </header>

      <Heading content="Quels modes de transport avez-vous envie de privilégier ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="room">
        {travelChoices.map((choice, index) => (
          <button
            key={index}
            className={
              choice ? "card-button card-button--active" : "card-button"
            }
            onClick={() => handleTravelChoice(index)}
          >
            <span className="card-button__emoji">{buttons[index].emoji}</span>{" "}
            <span className="card-button__label">{buttons[index].label}</span>
          </button>
        ))}
      </section>

      <div className="criterias__progress">
        <button className="button button--primary" onClick={() => null}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Travel;
