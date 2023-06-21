import { useState } from "react";

import Heading from "../../Heading/Heading";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Room.scss";

const Room = () => {
  const [roomChoices, setRoomChoices] = useState([false, false, false, false]);

  const handleRoomChoice = (index: number) => {
    setRoomChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const buttons = [
    { emoji: "🏠", label: "Appartement/Maison" },
    { emoji: "🏨", label: "Hôtel" },
    { emoji: "🛌", label: "Chambre d'hôte" },
    { emoji: "🏕️", label: "Camping" },
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

      <Heading content="Quels types de logement affectionnez-vous ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="room">
        {roomChoices.map((choice, index) => (
          <button
            key={index}
            className={
              choice ? "card-button card-button--active" : "card-button"
            }
            onClick={() => handleRoomChoice(index)}
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

export default Room;
