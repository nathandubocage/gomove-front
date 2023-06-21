import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Weather.scss";

import { CriteriasProps } from "../../../types/criteria.spec";

const Weather: FC<CriteriasProps> = ({ choices, onChoiceChange }) => {
  const buttons = [
    { emoji: "☀️", label: "Soleil" },
    { emoji: "⛰️", label: "Montagne" },
    { emoji: "🌊", label: "Mer/Océan" },
    { emoji: "🌆", label: "Ville" },
  ];

  return (
    <Fragment>
      <Heading content="Quels environnements préférez-vous pour vos vacances ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="weather">
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

export default Weather;
