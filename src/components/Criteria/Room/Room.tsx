import { FC, Fragment } from "react";

import Heading from "../../Heading/Heading";

import "./Room.scss";

import { CriteriasProps } from "../../../types/criteria.spec";

const Room: FC<CriteriasProps> = ({ choices, onChoiceChange }) => {
  const buttons = [
    { emoji: "🏠", label: "Appartement/Maison" },
    { emoji: "🏨", label: "Hôtel" },
    { emoji: "🛌", label: "Chambre d'hôte" },
    { emoji: "🏕️", label: "Camping" },
  ];

  return (
    <Fragment>
      <Heading content="Quels types de logement affectionnez-vous ?" />

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

export default Room;
