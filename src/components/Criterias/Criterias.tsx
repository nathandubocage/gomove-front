import { Fragment, useState } from "react";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import Weather from "./Weather/Weather";
import Room from "./Room/Room";
import Travel from "./Travel/Travel";
import Hobbies from "./Hobbies/Hobbies";
import Food from "./Food/Food";

import "./Criterias.scss";

export default function Criterias() {
  const [step, setStep] = useState(0);
  const [weatherChoices, setWeatherChoices] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [roomChoices, setRoomChoices] = useState([false, false, false, false]);
  const [travelChoices, setTravelChoices] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [hobbieChoices, setHobbieChoices] = useState([
    false,
    false,
    false,
    false,
  ]);

  const [foodChoice, setFoodChoice] = useState([false, false, false, false]);

  const handleFoodChoice = (index: number) => {
    setFoodChoice((prev) => prev.map((_, i) => i === index));
  };

  const handleWeatherChoice = (index: number) => {
    setWeatherChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleRoomChoice = (index: number) => {
    setRoomChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleTravelChoice = (index: number) => {
    setTravelChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const handleHobbieChoice = (index: number) => {
    setHobbieChoices((previous) =>
      previous.map((value, i) => (i === index ? !value : value))
    );
  };

  const nextStep = () => setStep((previousStep) => previousStep + 1);
  const previousStep = () => setStep((previousStep) => previousStep - 1);

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Weather
            choices={weatherChoices}
            onChoiceChange={handleWeatherChoice}
          />
        );

      case 1:
        return <Room choices={roomChoices} onChoiceChange={handleRoomChoice} />;

      case 2:
        return (
          <Travel choices={travelChoices} onChoiceChange={handleTravelChoice} />
        );

      case 3:
        return (
          <Hobbies
            choices={hobbieChoices}
            onChoiceChange={handleHobbieChoice}
          />
        );

      case 4:
        return <Food choices={foodChoice} onChoiceChange={handleFoodChoice} />;

      default:
        return null;
    }
  };

  const totalSteps = 5;
  const bullets = [...Array(totalSteps)].map((_, index) => (
    <span
      key={index}
      className={`criterias__bullet ${step === index ? "active" : ""}`}
    ></span>
  ));

  const goToBackScreen = () => {
    if (step > 0) {
      previousStep();
    } else {
      window.history.back();
    }
  };

  const goToNextScreen = () => {
    if (step < 4) {
      nextStep();
    } else {
      null;
    }
  };

  return (
    <Fragment>
      <div className="wrapper">
        <header className="header header--single">
          <button className="header__back" onClick={goToBackScreen}>
            <img
              src={arrowLeft}
              alt="Retourner en arrière"
              className="header__arrow"
            />
          </button>
        </header>

        <section className="criterias">
          {renderStep(step)}

          <div className="criterias__progress">
            <div className="criterias__bullets">{bullets}</div>

            <button
              className="button button--primary"
              onClick={goToNextScreen}
              disabled={step === 4}
            >
              {step === 4 ? "Valider mes critères" : "Continuer"}
            </button>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
