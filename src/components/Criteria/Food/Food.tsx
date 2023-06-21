import { useState } from "react";
import Heading from "../../Heading/Heading";
import arrowLeft from "../../../assets/icons/arrow_left.svg";
import "./Food.scss";

const Food = () => {
  const [foodChoice, setFoodChoice] = useState([false, false, false, false]);

  const handleFoodChoice = (index: number) => {
    setFoodChoice((prev) => prev.map((_, i) => (i === index ? true : false)));
  };

  const buttons = [
    { emoji: "🤤", label: "Énormément" },
    { emoji: "😋", label: "Plutôt oui" },
    { emoji: "🤔", label: "Pas vraiment" },
    { emoji: "🙃", label: "Non" },
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

      <Heading content="Est-ce que la nourriture est quelque chose d'important pour vous ?" />

      <span className="small">Une seule réponse possible</span>

      <section className="food">
        {foodChoice.map((choice, index) =>
          buttons[index] ? (
            <button
              key={index}
              className={
                choice ? "card-button card-button--active" : "card-button"
              }
              onClick={() => handleFoodChoice(index)}
            >
              <span className="card-button__emoji">{buttons[index].emoji}</span>{" "}
              <span className="card-button__label">{buttons[index].label}</span>
            </button>
          ) : null
        )}
      </section>

      <div className="criterias__progress">
        <button className="button button--primary" onClick={() => null}>
          Confirmer
        </button>
      </div>
    </div>
  );
};

export default Food;
