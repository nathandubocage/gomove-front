import { useState } from "react";

import Heading from "../../Heading/Heading";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Weather.scss";

const Weather = () => {
  const [weatherChoices, setWeatherChoices] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleWeatherChoice = (index: number) => {
    setWeatherChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const buttons = [
    { emoji: "☀️", label: "Soleil" },
    { emoji: "⛰️", label: "Montagne" },
    { emoji: "🌊", label: "Mer/Océan" },
    { emoji: "🌆", label: "Ville" },
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

      <Heading content="Quels environnements préférez-vous pour vos vacances ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="weather">
        {weatherChoices.map((choice, index) => (
          <button
            key={index}
            className={
              choice ? "card-button card-button--active" : "card-button"
            }
            onClick={() => handleWeatherChoice(index)}
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

export default Weather;
