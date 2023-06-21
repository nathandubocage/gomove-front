import { useState } from "react";

import Heading from "../../Heading/Heading";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Hobbies.scss";

const Hobbies = () => {
  const [hobbieChoices, setHobbieChoices] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleHobbieChoice = (index: number) => {
    setHobbieChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const buttons = [
    { emoji: "🪩", label: "Sorties le soir" },
    { emoji: "🏄‍♀️", label: "Activités sportives" },
    { emoji: "🖼️", label: "Activités culturelles" },
    { emoji: "🐨", label: "Je ne bouge pas" },
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

      <Heading content="En vacances, vous quels types de personne êtes-vous ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="hobbies">
        {hobbieChoices.map((choice, index) => (
          <button
            key={index}
            className={
              choice ? "card-button card-button--active" : "card-button"
            }
            onClick={() => handleHobbieChoice(index)}
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

export default Hobbies;
