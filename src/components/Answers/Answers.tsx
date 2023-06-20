import { ChangeEvent, Fragment, useState } from "react";

import arrowLeft from "../../assets/icons/arrow_left.svg";

import TravelDate from "./TravelDate/TravelDate";
import Number from "./Number/Number";
import Price from "./Price/Price";
import Location from "./Location/Location";

import "./Answers.scss";

export default function Answers() {
  const [step, setStep] = useState(0);

  const [dateTravel, setDateTravel] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [price, setPrice] = useState(0);
  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDateTravel(event.target.value);
  };

  const handlePassengersChange = (value: number) => {
    setPassengers(value);
  };

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };

  const handleContinentChange = (value: string) => {
    setContinent(value);
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  const nextStep = () => setStep((previousStep) => previousStep + 1);
  const previousStep = () => setStep((previousStep) => previousStep - 1);

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return <TravelDate value={dateTravel} onChange={handleInputChange} />;

      case 1:
        return <Number value={passengers} onChange={handlePassengersChange} />;

      case 2:
        return <Price value={price} onChange={handlePriceChange} />;

      case 3:
        return (
          <Location
            continentValue={continent}
            onContinentChange={handleContinentChange}
            countryValue={country}
            onCountryChange={handleCountryChange}
          />
        );

      default:
        return null;
    }
  };

  const goToBackScreen = () => {
    if (step > 0) {
      previousStep();
    } else {
      window.history.back();
    }
  };

  const goToNextScreen = () => {
    if (step < 3) {
      nextStep();
    } else {
      console.log("Valider mon profil");
      console.log(dateTravel);
      console.log(passengers);
      console.log(price);
      console.log(continent);
      console.log(country);
    }
  };

  const totalSteps = 4;
  const bullets = [...Array(totalSteps)].map((_, index) => (
    <span
      key={index}
      className={`answers__bullet ${step === index ? "active" : ""}`}
    ></span>
  ));

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

        <section className="answers">
          {renderStep(step)}

          <div className="answers__progress">
            <div className="answers__bullets">{bullets}</div>

            <button
              className="button button--primary"
              onClick={goToNextScreen}
              disabled={step === 4}
            >
              {step === 3 ? "Valider mon profil" : "Continuer"}
            </button>
          </div>
        </section>
      </div>
    </Fragment>
  );
}
