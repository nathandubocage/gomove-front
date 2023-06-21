import { useState } from "react";

import Heading from "../../Heading/Heading";
import Range from "../../Range/Range";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import "./Price.scss";

const Price = () => {
  const [price, setPrice] = useState(0);

  const handlePriceChange = (value: number) => {
    setPrice(value);
  };

  return (
    <div className="wrapper">
      <header className="header header--single">
        <button
          className="header__back"
          onClick={() => {
            window.history.back();
          }}
        >
          <img
            src={arrowLeft}
            alt="Retourner en arrière"
            className="header__arrow"
          />
        </button>
      </header>

      <Heading content="Quel est votre budget ?" />

      <section className="price--single">
        <label className="price__label">&lt; {price} €</label>

        <Range value={price} min={0} max={100} onChange={handlePriceChange} />

        <div className="answers__progress">
          <button
            className="button button--primary"
            onClick={() => {
              null;
            }}
          >
            Confirmer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Price;
