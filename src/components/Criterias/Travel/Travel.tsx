import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Travel.scss";

import { CriteriasProps } from "../../../types/criteria.spec";

const Travel: FC<CriteriasProps> = ({ choices, onChoiceChange }) => {
  const buttons = [
    { emoji: "☀️", label: "Soleil" },
    { emoji: "☔", label: "Pluie" },
    { emoji: "❄️", label: "Neige" },
    { emoji: "🌪️", label: "Tempête" },
  ];

  return (
    <Fragment>
      <Heading content="Quels modes de transport avez-vous envie de privilégier ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="room">
        {choices.map((choice, index) => (
          <button
            key={index}
            className={
              choice ? "card-button card-button--active" : "card-button"
            }
            onClick={() => onChoiceChange(index)}
          >
            <span className="card-button__emoji">{buttons[index].emoji}</span>{" "}
            <span className="card-button__label">{buttons[index].label}</span>
          </button>
        ))}
      </section>
    </Fragment>
  );
};

export default Travel;
