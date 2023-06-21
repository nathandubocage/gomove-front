import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Food.scss";

import { CriteriasProps } from "../../../types/criteria.spec";

const Food: FC<CriteriasProps> = ({ choices, onChoiceChange }) => {
  const buttons = [
    { emoji: "☀️", label: "Soleil" },
    { emoji: "☔", label: "Pluie" },
    { emoji: "❄️", label: "Neige" },
    { emoji: "🌪️", label: "Tempête" },
  ];

  return (
    <Fragment>
      <Heading content="Est-ce que la nourriture est quelque chose d'important pour vous ?" />

      <span className="small">Une seule réponse possible</span>

      <section className="food">
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

export default Food;
