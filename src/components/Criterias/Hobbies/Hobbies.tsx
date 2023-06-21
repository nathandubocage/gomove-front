import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Hobbies.scss";

import { CriteriasProps } from "../../../types/criteria.spec";

const Hobbies: FC<CriteriasProps> = ({ choices, onChoiceChange }) => {
  const buttons = [
    { emoji: "🪩", label: "Sorties le soir" },
    { emoji: "🏄‍♀️", label: "Activités sportives" },
    { emoji: "🖼️", label: "Activités culturelles" },
    { emoji: "🐨", label: "Je ne bouge pas" },
  ];

  return (
    <Fragment>
      <Heading content="En vacances, vous quels types de personne êtes-vous ?" />

      <span className="small">Plusiurs réponses possibles</span>

      <section className="hobbies">
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

export default Hobbies;
