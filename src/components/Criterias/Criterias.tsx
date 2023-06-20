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

  const nextStep = () => setStep((previousStep) => previousStep + 1);
  const previousStep = () => setStep((previousStep) => previousStep - 1);

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <Weather />;

      case 1:
        return <Room />;

      case 2:
        return <Travel />;

      case 3:
        return <Hobbies />;

      case 4:
        return <Food />;

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
      console.log("Valider mes critères");
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
