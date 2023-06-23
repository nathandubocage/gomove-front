import { useState } from "react";

import arrowLeft from "../../../assets/icons/arrow_left.svg";

import Heading from "../../Heading/Heading";
import Select from "../../Select/Select";

import "./Destination.scss";
import { useUserStore } from "../../../store/useUserStore";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const continentCountries = {
    Europe: ["France", "Germany", "Spain"],
    Asie: ["China", "India", "Japan"],
    Afrique: ["Egypt", "Nigeria", "South Africa"],
    "Amérique du Nord": ["United States", "Canada", "Mexico"],
    "Amérique du Sud": ["Brazil", "Argentina", "Chile"],
    Oceanie: ["Australia", "New Zealand", "Fiji"],
    Antarctique: ["Antarctica"],
  };
  const { userCriterias, setUserCriterias } = useUserStore();
  const [continent, setContinent] = useState(userCriterias?.destination);
  const [country, setCountry] = useState("");
  const [availableCountries, setAvailableCountries] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleContinentChange = (value: string) => {
    setContinent(value);
    const countries =
      continentCountries[value as keyof typeof continentCountries];
    setAvailableCountries(countries ?? []);
  };

  const handleCountryChange = (value: string) => {
    setCountry(value);
  };

  const continentList = [
    "Sélectionnez un continent",
    ...Object.keys(continentCountries),
  ];

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

      <Heading content="Quelle partie du monde souhaitez-vous explorer ?" />

      <section className="destination--single">
        <div className="location__column">
          <label className="location__label" htmlFor="name">
            Continent
          </label>

          <Select
            value={continent!}
            onChange={(e) => handleContinentChange(e)}
            options={continentList}
          />
        </div>

        <div className="location__column">
          <label className="location__label" htmlFor="country">
            Pays (Optionnel)
          </label>

          <Select
            value={country}
            onChange={handleCountryChange}
            options={
              continent
                ? ["Sélectionnez un pays", ...availableCountries]
                : ["Sélectionnez un continent d'abord"]
            }
          />
        </div>

        <div className="answers__progress">
          <button
            className="button button--primary"
            onClick={() => {
              setUserCriterias({ ...userCriterias!, destination: continent! });
              navigate("/travels");
            }}
          >
            Confirmer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Destination;
